import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useAuth } from '../../lib/auth';
import BaseButton from '../BaseButton/index';
import styles from './SignupForm.module.scss';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useAuth();
    const router = useRouter();

    function onSubmit(e) {
        e.preventDefault();
        signUp({ email, password, name });
        router.push('/');
    }

    return (
        <div className={styles['login']}>
            <h4 className={styles['login-title']}>Sign Up</h4>
            <form onSubmit={onSubmit} className={styles['login-form']}>
                <input
                    type="name"
                    placeholder="Name"
                    required
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <BaseButton type="submit" primary outlined onSubmit={onSubmit}>
                    Sign Up
                </BaseButton>
            </form>
            <div className={styles['login-text']}>
                <span> New to Reddit?</span>
                <Link href="/login">
                    <a>LOG IN</a>
                </Link>
            </div>
        </div>
    );
};

export default SignupForm;
