import { gql } from '@apollo/client';

export const VOTE_FOR_POST = gql`
    mutation vote($linkId: ID!) {
        vote(linkId: $linkId) {
            id
        }
    }
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                name
                email
                id
            }
        }
    }
`;

export const SIGNUP = gql`
    mutation signup($email: String!, $password: String!, $name: String!) {
        signup(email: $email, password: $password, name: $name) {
            token
        }
    }
`;

export const CREATE_NEW_POST = gql`
    mutation post($url: String!, $description: String!) {
        post(url: $url, description: $description) {
            id
        }
    }
`;
