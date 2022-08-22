import { useState } from 'react';
import VotesList from './VotesList';

import style from '../../styles/Home.module.scss';

const VotesInfo = ({ votes, title }) => {
    const [isShowUpvote, setShowUpvote] = useState(false);
    if (votes.length === 0)
        return (
            <div className={style['votes']}>
                <div>no upvote</div>
            </div>
        );
    return (
        <>
            <div className={style['votes']}>
                {votes.slice(0, 3).map((vote) => (
                    <div className={style['votes-user']} key={vote.user.id}>
                        {vote.user?.name !== '' && /^[a-zA-Z]+$/.test(vote.user?.name.substr(0, 1))
                            ? vote.user.name.substr(0, 1).toLocaleUpperCase()
                            : 'John Doe'.substr(0, 1).toLocaleUpperCase()}
                    </div>
                ))}
                <button className={style['votes-btn']} onClick={() => setShowUpvote(!isShowUpvote)}>
                    {votes.length !== 0 && votes.length > 3 ? (
                        <div>...{votes.length - 3} more upvote</div>
                    ) : null}
                </button>
            </div>
            {isShowUpvote ? <VotesList users={votes} title={title} /> : null}
        </>
    );
};

export default VotesInfo;
