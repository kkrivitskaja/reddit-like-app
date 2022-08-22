import style from '../../styles/Home.module.scss';

const UpvoteIcon = () => {
    return (
        <div className={style['upvote']}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#808080F" viewBox="0 0 16 16">
                <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            </svg>
        </div>
    );
};

export default UpvoteIcon;
