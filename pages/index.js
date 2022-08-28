import Head from 'next/head';

import { useQuery} from '@apollo/client';
import { GET_ALL_LINKS } from '../src/graphql/Queries';

import PostCard from '../src/components/PostCard/index';
import style from '../styles/Home.module.scss';

export default function Home() {
    const { data, loading, error } = useQuery(GET_ALL_LINKS);

    if (loading && !data) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;
    const links = data.feed.links;

    return (
        <div>
            <Head>
                <title>Reddit clone</title>
                <meta name="description" content="Reddit clone client showing posts f" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
            
                {console.log(data, links)}
                <div className={style['posts-list']}>
                    {links.map((link) => (
                        <PostCard post={link} key={link.id} />
                    ))}
                </div>
            </main>
        </div>
    );
}
