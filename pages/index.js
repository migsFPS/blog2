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
  <h2>Why I Chose My IT Specialization</h2>

  <p style={{ textAlign: 'justify' }}>
    I chose Data Analytics because I am interested in how data can be used
    to understand problems and make better decisions. I like the idea of
    finding useful information from numbers and patterns.
  </p>

  <p style={{ textAlign: 'justify' }}>
    Today, businesses and organizations collect a large amount of data every
    day. However, having data is not enough because it needs to be organized
    and analyzed properly to become useful information.
  </p>

  <p style={{ textAlign: 'justify' }}>
    I became interested in Data Analytics because it can help solve real-world
    problems. For example, businesses can analyze customer data to understand
    what people need, improve their services, and make better decisions.
  </p>

  <p style={{ textAlign: 'justify' }}>
    I want to develop my skills in data analysis, statistics, and data
    visualization. In the future, I hope to use these skills to turn data
    into meaningful insights that can help people and organizations.
  </p>

  <p>
    (This is a sample website - you’ll be building a site like this on{' '}
    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
  </p>
</section>
    </Layout>
  );
}