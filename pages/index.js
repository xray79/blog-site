import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps() {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        blogposts{
          title
          blogbody
          description
          slug
          splash{
            url
          }
        }
      }
  `,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const { data } = await res.json();

  return {
    props: data,
    revalidate: 10,
  };
}

const Home = ({ blogposts }) => {
  return (
    <ContentWrapper>
      <Head>
        <title>Dev.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Dev.io!</a>
        </h1>

        <div className={styles.grid}>
          {blogposts.map((blog, i) => {
            const { title, description, slug } = blog;
            return (
              <Blog
                title={title}
                description={description}
                slug={slug}
                key={i}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </ContentWrapper>
  );
};

export default Home;
