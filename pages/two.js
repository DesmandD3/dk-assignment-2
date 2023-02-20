import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';

import film from '@/data/movies.json';

const inter = Inter({ subsets: ['latin'] })

export default function Two() {

  const [myMoviePick, setMyMoviePick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMyMoviePick(true);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Desmands Assignment 2</title>
        <meta name="author" content="Desmand King - D3" />
        <meta property="og:title" content="Assignment 2" />
        <meta property="og:description" content="BCIT - D3" />
        <link rel="icon" href="/movie-ticket.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <>
          <header className={styles.custHeader}>
            <div className={styles.headerAlignment}>
              <h1>My Top Picks</h1>
              <h2>What will you watch tonight?</h2>
              <Link href="/">
                <Image src="/movie-ticket.png" alt="Movie Ticket" width={65} height={65} />
              </Link>
            </div>
          </header>

          {myMoviePick ?
            <div className={styles.mainAlignment}>
              <div className={styles.container}>
                <Image className={styles.bgWrap}
                  alt="A brick wall"
                  src="/brick.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }} />
                <div className={styles.box}>
                  <div className={styles.imgBx}>
                    <Image src={film[19].Movie_Poster_HD} alt={film[19].Movie_Name} width={200} height={300} />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>{film[19].Movie_Name}</h2>
                      <p>{film[19].Movie_Description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <Image className={styles.bgWrap}
                  alt="A brick wall"
                  src="/brick.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }} />
                <div className={styles.box}>
                  <div className={styles.imgBx}>
                    <Image src={film[15].Movie_Poster_HD} alt={film[15].Movie_Name} width={200} height={300} />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>{film[15].Movie_Name}</h2>
                      <p>{film[15].Movie_Description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <Image className={styles.bgWrap}
                  alt="A brick wall"
                  src="/brick.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }} />
                <div className={styles.box}>
                  <div className={styles.imgBx}>
                    <Image src={film[42].Movie_Poster_HD} alt={film[42].Movie_Name} width={200} height={300} />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>{film[42].Movie_Name}</h2>
                      <p>{film[42].Movie_Description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <Image className={styles.bgWrap}
                  alt="A brick wall"
                  src="/brick.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }} />
                <div className={styles.box}>
                  <div className={styles.imgBx}>
                    <Image src={film[21].Movie_Poster_HD} alt={film[21].Movie_Name} width={200} height={300} />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>{film[21].Movie_Name}</h2>
                      <p>{film[21].Movie_Description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <Image className={styles.bgWrap}
                  alt="A brick wall"
                  src="/brick.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }} />
                <div className={styles.box}>
                  <div className={styles.imgBx}>
                    <Image src={film[7].Movie_Poster_HD} alt={film[7].Movie_Name} width={200} height={300} />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>{film[7].Movie_Name}</h2>
                      <p>{film[7].Movie_Description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <Image className={styles.bgWrap}
                  alt="A brick wall"
                  src="/brick.jpg"
                  quality={100}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }} />
                <div className={styles.box}>
                  <div className={styles.imgBx}>
                    <Image src={film[2].Movie_Poster_HD} alt={film[2].Movie_Name} width={200} height={300} />
                  </div>
                  <div className={styles.content}>
                    <div>
                      <h2>{film[2].Movie_Name}</h2>
                      <p>{film[2].Movie_Description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : <></>
          }

        </>
      </main>
    </>
  )

}