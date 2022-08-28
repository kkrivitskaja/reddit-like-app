import style from '../../styles/Home.module.scss';

const VotesList = ({ users, title }) => {
    const usersLength = users.length;
    const usersArr = users.slice(3, usersLength);
    return (
        <div className={style['votes-list']}>
            <h3>Users who upvoted "{title}"</h3>

            <div className={style['votes-users']}>
                {usersArr.map((user) => (
                    <div key={user.user.id}>{user.user.name}</div>
                ))}
            </div>
        </div>
    );
};

export default VotesList;
