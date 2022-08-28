import SearchIcon from '../../assets/SearchIcon';
import style from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <form className={style['search']}>
            <SearchIcon />
            <input type="text" placeholder="Search Reddit" />
            <button type="submit" hidden />
        </form>
    );
};
export default SearchBar;
