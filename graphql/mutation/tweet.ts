import { graphql } from "@/gql";

export const createTweetMutations=graphql(`#graphql
   mutation CreateTweet($payload: CreateTweetData!) {
    createTweet(payload: $payload) {
      id
      content
      imageURL
      author {
        id
        firstName
        lastName
        profileImageURL
      }
    }
  }
`);


  
