import PostCard from '../PostCard/index';

import style from '../../styles/Home.module.scss';

const PostsList = (props) => {
    const posts = props.links;
    return (
        <>
            <div className={style['posts-list']}>
                {posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))}
            </div>
        </>
    );
};

export default PostsList;
