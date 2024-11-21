import { blogdata } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = blogdata.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Loading...</p>; // Render loading or a fallback message
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title={`${post.category} / ${post.date}`} />
            <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post.description.substring(0, 50) + "..."} />
              <p className="desc-p">{post.description}</p>
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  );
};

export default SinglePost;
