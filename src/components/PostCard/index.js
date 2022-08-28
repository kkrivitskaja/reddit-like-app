import { useMutation } from '@apollo/client';

import { VOTE_FOR_LINK } from '../../graphql/Queries';
import UpvoteIcon from './UpvoteIcon';
import VotesInfo from './VotesInfo';

import style from '../../styles/Home.module.scss';

const PostCard = ({ post }) => {
    const upvoteHandler = () =>{
        useMutation(VOTE_FOR_LINK, {
            variables: { linkId: post.id },
        })
            .then(() => alert('Upvoted!'))
            .catch(() => alert('You already voted!'));}
    
    return (
        <div className={style['card']}>
            <div>
                <h3>{post.description}</h3>
            </div>
            <div className={style['card-vote']}>
                <UpvoteIcon onClick={upvoteHandler} />
                <VotesInfo votes={post.votes} title={post.description} />
            </div>
        </div>
    );
};

export default PostCard;
