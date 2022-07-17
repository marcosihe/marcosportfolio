import BaseLayout from "../../components/layout/BaseLayout";
import Link from "next/link";
import axios from "axios";

const Portfolios = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => (
      <li key={posts.id}>
        <Link href={`portfolios/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <>
      <BaseLayout>
        <h1>Portfolios Page</h1>
        <ul>{renderPosts()}</ul>
      </BaseLayout>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/posts'
  let posts = [];
  try {
    const res = await axios.get(URL);
    posts = res.data;
  } catch (error) {
    console.error(error);
  }
  return { posts: posts.slice(0, 10) };
};

export default Portfolios;