import { useCreateTweet } from "@/hooks/tweet";
import { convertFileToBase64 } from "@/hooks/useBase64";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { CiImageOn } from "react-icons/ci";

const CreatePost: React.FC = () => {
  const { user } = useCurrentUser();
  const { mutate } = useCreateTweet();

  const [content, setContent] = useState<string>("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);

 
  const haldleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute(
      "accept",
      "image/png, image/jpeg, image/jpg"
    );

    input.onchange = async (event: any) => {
      const file = event.target.files?.[0];
      if (!file) return;

      
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be less than 5MB");
        return;
      }

      try {
        const base64 = await convertFileToBase64(file);
        setImageBase64(base64);
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    };

    input.click();
  }, []);

  
  const haldleCreateTweet = useCallback(() => {
    if (!content.trim()) return;

    mutate({
      content,
      imageURL: imageBase64 ?? undefined,
    });

    
    setContent("");
    setImageBase64(null);
  }, [content, imageBase64, mutate]);

  return (
    <>
      <div className="border border-gray-600 p-5">
        <div className="grid grid-cols-12 gap-3">
          <div className="col col-span-1">
            {user?.profileImageURL && (
              <Link href={`/${user?.id}`}>
                <Image
                  src={user.profileImageURL}
                  alt="profile"
                  height={30}
                  width={30}
                  className="rounded-full object-cover"
                />
              </Link>
            )}
          </div>

          <div className="col col-span-11">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-transparent text-xl px-3 border-b border-slate-700"
              rows={2}
              placeholder="What's Happening"
            />

            {/*
                Image Preview
             */}
            {imageBase64 && (
              <div className="mt-3">
                <Image
                  src={imageBase64}
                  alt="Preview"
                  height={300}
                  width={400}
                  className="rounded-lg object-cover"
                />
              </div>
            )}

            <div className="mt-2 flex justify-between items-center">
              <CiImageOn
                onClick={haldleSelectImage}
                className="text-2xl hover:text-[#1d9bf0] cursor-pointer"
              />

              <button
                onClick={haldleCreateTweet}
                className="bg-[#f5eaea] hover:bg-[#949393] text-black font-semibold text-lg py-1 rounded-full w-25 px-4"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;