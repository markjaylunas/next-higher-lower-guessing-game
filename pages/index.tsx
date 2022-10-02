import type { NextPage } from 'next';
import Head from 'next/head';
import Game from '../components/Game';

const Home: NextPage = () => {
    return (
        <div className="h-full">
            <Head>
                <title>Higher Lower Guessing Game</title>
                <meta name="description" content="Guessing Game." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="h-screen bg-black flex items-center">

                <Game />
            </main>
        </div>
    );
};

export default Home;
