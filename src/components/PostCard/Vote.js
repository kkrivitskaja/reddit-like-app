import UpvoteIcon from './UpvoteIcon';

import style from '../../../styles/Home.module.scss';
import { useAuth } from '../../lib/auth';

const Votes = ({ linkId }) => {
    const { upvotePost } = useAuth();

    return (
        <div className={style['card-vote-btn']}>
            <button
                onClick={() => {
                    upvotePost(linkId);
                    console.log('linkId', linkId);
                }}
            >
                <UpvoteIcon />
            </button>
        </div>
    );
};

export default Votes;
