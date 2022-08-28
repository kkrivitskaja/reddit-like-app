import { useMutation } from '@apollo/client';
import Link from 'next/link';

import { VOTE_FOR_LINK } from '../../graphql/Queries';

import VotesInfo from './VotesInfo';
import Vote from './Vote';

import style from '../../../styles/Home.module.scss';

const PostCard = ({ post }) => {
    // const upvoteHandler = () => {
    //     useMutation(VOTE_FOR_LINK, {
    //         variables: { linkId: post.id },
    //     })
    //         .then(() => alert('Upvoted!'))
    //         .catch(() => alert('You already voted!'));
    // };

    return (
        <div className={style['card']}>
            <div className={style['card-vote']}>
                <Vote linkId={post.id} />
                <div className={style['card-context']}>
                    <h3>
                        <Link href={post.url}>
                            <a target="_blank">{post.description}</a>
                        </Link>
                    </h3>
                    <VotesInfo votes={post.votes} title={post.description} />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
