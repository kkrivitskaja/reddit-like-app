import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAuth } from '../../lib/auth';
import BaseButton from '../BaseButton/index';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();
    const router = useRouter();

    function onSubmit(e) {
        e.preventDefault();
        signIn({ email, password });
        router.push('/');
    }
    return (
        <div className={styles['login']}>
            <h4 className={styles['login-title']}>Log in</h4>
            <form onSubmit={onSubmit} className={styles['login-form']}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <BaseButton primary outlined onSubmit={onSubmit}>
                    Login In
                </BaseButton>
            </form>
            <div className={styles['login-text']}>
                <span> New to Reddit?</span>
                <Link href="/signup">
                    <a> SIGN UP</a>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
