import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    return <p>Post: {pid}</p>;
};

export default Post;
