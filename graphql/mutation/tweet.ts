import { graphql } from "@/gql";

export const createTweetMutations=graphql(`#graphql
   mutation CreateTweet($payload: CreateTweetData!) {
    createTweet(payload: $payload) {
      id
      content
      author {
        id
        firstName
        lastName
        profileImageURL
      }
    }
  }
`);


  
