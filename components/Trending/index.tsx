import { GoogleLogin } from "@react-oauth/google";
import { AiOutlineMail } from "react-icons/ai";
import { CgMore } from "react-icons/cg";

/* 🔹 Reusable Trend Item */
const TrendItem = ({
  category,
  tag,
  posts,
}: {
  category: string;
  tag: string;
  posts: string;
}) => (
  <div className="flex justify-between items-start">
    <div>
      <p className="text-gray-400 text-xs">{category}</p>
      <h1 className="text-sm font-medium">{tag}</h1>
      <p className="text-gray-400 text-xs">{posts}</p>
    </div>
    <CgMore className="text-gray-500 cursor-pointer mt-1" />
  </div>
);

const RightCard: React.FC = () => {
  return (
    <div className="text-white">



      {/* 🔹 TRENDING CARD */}
      <div className="mt-10 p-4 mx-6 border border-gray-700 rounded-xl">
        <h1 className="text-xl font-bold mb-4">
          What's happening
        </h1>

        <div className="space-y-4">

          <TrendItem
            category="Entertainment · Trending"
            tag="#Alpha"
            posts="1475 posts"
          />

          <TrendItem
            category="Politics · Trending"
            tag="#Narendra Modi"
            posts="895 posts"
          />

          <TrendItem
            category="Sports · Trending"
            tag="#Virat Kohli"
            posts="165 posts"
          />

          <TrendItem
            category="Person · Trending"
            tag="#Mohit Choubey"
            posts="75 posts"
          />
          <TrendItem
            category="Topic· Trending"
            tag="#Jefery Epistine"
            posts="69 posts"
          />
        </div>
      </div>

      {/* 🔹 FLOATING MAIL */}
      <div className="fixed bottom-6 right-6">
        <button className="w-12 h-12 rounded-xl bg-black border border-gray-700
          flex items-center justify-center shadow-lg
          hover:bg-gray-800 transition">
          <AiOutlineMail className="text-white text-2xl" />
        </button>
      </div>

    </div>
  );
};

export default RightCard;


