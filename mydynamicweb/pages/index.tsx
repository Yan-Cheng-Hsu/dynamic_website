import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const TypingText = () => {
  return (
    <p className={styles['animate_typing']}>
      <span><i>A curiour tech lover with a solid CS background and good communication skills</i></span>
    </p>
  );
}; 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bill YC Hsu's Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by clicking&nbsp;
            <code className={styles.code}>
              About Me
            </code> 
          </p>

          <div>
            <a
              href="https://www.bill-yan-cheng-hsu.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>@2023 All right reserved by Bill YC Hsu</i>
              <br></br>
              <Image
                src="/pics/logo.png"
                alt="Bill YCH Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className='text-center'>
          <h1><b>Bill Hsu</b></h1>
          <TypingText></TypingText>
        </div>




        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/pics/resume_photo.jpg"
            alt="Next.js Logo"
            width={400}
            height={500}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              About Me <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Milestones <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Related Works <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={inter.className}>
              Contacts <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>

      </main>
    </>
  )
}