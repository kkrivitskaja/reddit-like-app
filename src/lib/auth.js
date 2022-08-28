import React, { useState, useContext, createContext } from 'react';
import { useRouter } from 'next/router';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, gql, split } from '@apollo/client';

import { VOTE_FOR_POST, LOGIN, SIGNUP, CREATE_NEW_POST } from '../graphql/Mutations';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            <ApolloProvider client={auth.createApolloClient()}>{children}</ApolloProvider>
        </authContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [authToken, setAuthToken] = useState(null);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        id: '',
    });
    const router = useRouter();
    const isSignedIn = () => {
        if (authToken) {
            console.log('LOGIN');

            return true;
        } else {
            console.log('LOG OUT');
            return false;
        }
    };
    const isUserInfo = () => {
        if (authToken) {
            console.log('LOGIN USER INFO');
            return <div>{userInfo.name}</div>;
        }
    };

    const getAuthHeaders = () => {
        if (!authToken) return null;

        return {
            authorization: `Bearer ${authToken}`,
        };
    };

    const createApolloClient = () => {
        const link = new HttpLink({
            uri: 'https://api.vrmarketing.guru/',
            headers: getAuthHeaders(),
        });

        return new ApolloClient({
            cache: new InMemoryCache(),
            link,
        });
    };

    const createPost = async ({ url, description }) => {
        try {
            const client = createApolloClient();

            const result = await client.mutate({
                mutation: CREATE_NEW_POST,
                variables: { url, description },
            });

            console.log('SUCCESS!!!!', result);
        } catch (e) {
            console.log(e.message);
        }
    };

    const upvotePost = async (linkId) => {
        try {
            if (!authToken) {
                alert('You will need to sign to vote!');
                return;
            }
            const client = createApolloClient();

            console.log('value on handler', linkId);

            const result = await client.mutate({
                mutation: VOTE_FOR_POST,
                variables: { linkId },
            });

            console.log('UPVOTED!!!!!!!', result);
        } catch (e) {
            console.log(e.message);
        }
    };

    const signIn = async ({ email, password }) => {
        try {
            const client = createApolloClient();

            const result = await client.mutate({
                mutation: LOGIN,
                variables: { email, password },
            });

            console.log(result);

            if (result?.data?.login?.token) {
                setAuthToken(result?.data?.login?.token);
                setUserInfo({
                    name: result?.data?.login?.user.name,
                    email: result?.data?.login?.user.email,
                    id: result?.data?.login?.user.id,
                });
            }
            localStorage.setItem('token', result?.data?.login?.token);
            console.log(result?.data?.login);
            console.log('user info', userInfo);
            router.push('/');
        } catch (error) {
            console.log(error.message);
           
            return alert('FAIL!!!!!!!!!!!!!!!!!!!!!!!!!');
        }
    };


    const signUp = async ({ email, password, name }) => {
        try {
            const client = createApolloClient();

            const result = await client.mutate({
                mutation: SIGNUP,
                variables: { email, password, name },
            });

            console.log("SIGNUP", result);

            if (result?.data?.signup?.token) {
                setAuthToken(result?.data?.signup?.token);
                setUserInfo({
                    name: result?.data?.login?.user.name,
                    email: result?.data?.login?.user.email,
                    id: result?.data?.login?.user.id,
                });
            }
            localStorage.setItem('token1', result?.data?.signup?.token);
            console.log('user info', userInfo);
            router.push('/')
        } catch (error) {
            console.log(error.message);
        }
    };

    const signOut = () => {
        setAuthToken(null);
        setUserInfo({
            name: '',
            email: '',
            id: '',
        });
        console.log('Logget out');
        console.log('user info', userInfo);
        localStorage.removeItem('token');
        //  router.push('/')
    };

    return {
        setAuthToken,
        isSignedIn,
        isUserInfo,
        signIn,
        signUp,
        signOut,
        createPost,
        createApolloClient,
        upvotePost,
    };
}
