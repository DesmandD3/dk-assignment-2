import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import film from '@/data/movies.json';

export default function Home() {

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
              <h1>Top Movies!</h1>
              <h2>What will you watch tonight?</h2>
              <Link href="/two">
                <Image src="/movie-ticket.png" alt="Movie Ticket" width={65} height={65} />
              </Link>
            </div>
          </header>
          <div className={styles.mainAlignment}>
            {
              film.map((movie, index) => {
                return (
                  <div key={index} className={styles.container}>
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
                        <Image src={movie.Movie_Poster_HD} alt={movie.Movie_Name} width={200} height={300} />
                      </div>
                      <div className={styles.content}>
                        <div>
                          <h2>{movie.Movie_Name}</h2>
                          <p>{movie.Movie_Description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              )}
          </div>
        </>
      </main>
    </>
  )
}
