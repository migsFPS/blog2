import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
  <p style={{ textAlign: 'justify' }}>
     Hi, I’m Joefer Miguel Nuqui Tulabut. A Bachelor of Science in Information Technology student.  I chose
    Cybersecurity because I am interested in protecting computers, networks,
    and personal information from cyber threats.
  </p>

 <h2>Why I Chose My IT Specialization</h2>

  <p style={{ textAlign: 'justify' }}>
     I chose Cybersecurity because cyber threats and data breaches are becoming
    more common as people and businesses rely more on technology. I became
    interested in how hackers can affect systems and how cybersecurity
    professionals protect important information. This field motivates me to
    learn about network security, ethical hacking, and data protection. I want
    to develop my skills so I can help organizations keep their systems and
    information safe.
  </p>

  <p>
    (This is a sample website - you’ll be building a site like this on{' '}
    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
  </p>
</section>
    </Layout>
  );
}