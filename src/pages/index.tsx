import Head from 'next/head';
import { HomeView } from '../components';

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* <div className="glassy"></div> */}
      <Head>
        <title>Rick and Morty™</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full px-0 flex flex-col flex-grow min-h-screen my-3">
        <HomeView />
      </main>
    </div>
  );
}
