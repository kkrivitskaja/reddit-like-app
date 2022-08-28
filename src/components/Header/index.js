import Logo from './Logo';
import BaseButton from '../BaseButton/index';

import style from '../../styles/Home.module.scss';

const Header = () => {
    return (
        <header className={style['header-wrapper']}>
            <div className={style['header']}>
                <div>
                    <Logo />
                </div>
                <div className={style['header-btn']}>
                    <BaseButton primary outlined>
                        Log In
                    </BaseButton>
                    <BaseButton primary>Sign Up</BaseButton>
                </div>
            </div>
        </header>
    );
};

export default Header;
