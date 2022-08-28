import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST_INFO } from '../src/graphql/Queries';

import PostCard from '../src/components/PostCard/index';
import style from '../styles/Home.module.scss';

const SinglePost = () => {
    const router = useRouter();

    const { data, loading, error } = useQuery(GET_SINGLE_POST_INFO, {
        variables: {
            id: router.query.Id,
        },
    });

    if (loading && !data) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    const post = data.links;
    const { comments } = post;

    return (
        <main>
            <PostCard post={post} key={post.id} />
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <span>{comment.user.name}</span>
                </div>
            ))}
        </main>
    );
};

export default SinglePost;
