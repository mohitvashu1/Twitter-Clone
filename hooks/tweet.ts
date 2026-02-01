import { graphqlClient } from "@/clients/api";
import { CreateTweetData } from "@/gql/graphql";
import { createTweetMutations } from "@/graphql/mutation/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateTweet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateTweetData) =>
      graphqlClient.request(createTweetMutations, { payload }),

    onMutate: () => {
      toast.loading("Creating Tweet", { id: "create-tweet" });
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["all-tweets"] });
      toast.success("Created Successfully", { id: "create-tweet" });
    },
  });
};

export const useGetAllTweets = () => {
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: () => graphqlClient.request(getAllTweetsQuery),
  });

  return {
    ...query,
    tweets: query.data?.getAllTweets,
  };
};
