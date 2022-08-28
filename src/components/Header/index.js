import { useRouter } from 'next/router';

import BaseButton from '../BaseButton/index';

import Logo from '../../assets/Logo';

import SearchBar from './SearchBar';
import { useAuth } from '../../lib/auth';
import style from './Header.module.scss';

const Header = () => {
    const router = useRouter();
    const { isSignedIn, isUserInfo, signOut } = useAuth();
    console.log(isUserInfo());

    return (
        <header className={style['header-wrapper']}>
            <div className={style['header']}>
                <div>
                    <Logo />
                </div>
                <SearchBar />
                {isUserInfo()}
                {isSignedIn() ? (
                    <div className={style['header-btn']}>
                        <BaseButton
                            primary
                            outlined
                            onClick={() => {
                                router.push('/newpost');
                            }}
                        >
                            Create post
                        </BaseButton>

                        <BaseButton
                            primary
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Log Out
                        </BaseButton>
                    </div>
                ) : (
                    <div className={style['header-btn']}>
                        <BaseButton
                            primary
                            outlined
                            onClick={() => {
                                router.push('/login');
                            }}
                        >
                            Log In
                        </BaseButton>
                        <BaseButton
                            primary
                            onClick={() => {
                                router.push('/signup');
                            }}
                        >
                            Sign Up
                        </BaseButton>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
