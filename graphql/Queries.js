import { gql } from '@apollo/client';

export const GET_ALL_LINKS = gql`
    query {
        feed {
            count
            links {
                id
                description
                url
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                        name
                    }
                }
            }
        }
    }
`;

export const GET_SINGLE_POST_INFO = gql`
    query getPost($linkId: ID!) {
        links(linkId: $linkId) {
            id
            description
            url
            postedBy {
                id
                name
            }
            votes {
                id
                user {
                    id
                    name
                }
            }
            comments {
                id
                user {
                    id
                    name
                }
                post_id
                text
            }
        }
    }
`;
