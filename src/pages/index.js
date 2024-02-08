import Image from "next/image";
import Link from "next/link";

import Layout, { siteTitle } from "@/components/Layout";
import { getPostsData } from "@/lib/post";
import Head from "next/head";


// SSGの場合
export async function getStaticProps() {
  const allPostData = getPostsData(); // id, title, data, thumbnail
  console.log(allPostData);

  return {
    props: {
      allPostData,
    },
  };
}

// // SSRの場合
// export async function getServerSideProps(context){
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({allPostData}) {
  return (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
   <section className="headingMd">
    私はフルスタックエンジニアです
   </section>
   <section className="headingMd padding1px">
    <h2>📝エンジニアのブログ</h2>
    <div className="grid">
      {allPostData.map(({id, title, date, thumbnail}) => (
        <article key={id}>
        <Link href={`/posts/${id}`}>
          <img src={`${thumbnail}`}
          className="thumbnailImage"
          />
        </Link>
        <Link href={`/posts/${id}`} className="boldText">
          {title}
        </Link>
        <br />
        <small className="lightText">
          {date}
        </small>
        </article>
      ))}
    </div>
   </section>
  </Layout>
  );
}
