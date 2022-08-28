import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSubscription, gql } from '@apollo/client';
import Link from 'next/link';

import { useAuth } from '../src/lib/auth';
import BaseButton from '../src/components/BaseButton/index';
import styles from '../styles/Home.module.scss';

function NewPost() {
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const { createPost } = useAuth();
    const router = useRouter();

    function onSubmit(e) {
        e.preventDefault();
        createPost({ url, description });
        router.push('/');
    }
    return (
        <main>
            <div className={styles['post']}>
                <h3>Create new Post</h3>
                <form onSubmit={onSubmit} className={styles['post-form']}>
                    <input
                        type="text"
                        placeholder="Post title"
                        required
                        autoFocus
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                    <input
                        type="link"
                        placeholder="URL link"
                        required
                        onChange={(e) => setUrl(e.target.value)}
                    ></input>
                    <BaseButton
                        outlined
                        primary
                        onClick={(e) => {
                            e.preventDefault();
                            router.push('/');
                        }}
                    >
                        Cancel
                    </BaseButton>
                    <BaseButton type="submit" primary onSubmit={onSubmit}>
                        Create post
                    </BaseButton>
                </form>
            </div>
        </main>
    );
}

export default NewPost;
