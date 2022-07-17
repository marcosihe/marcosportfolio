import BaseLayout from "../../components/layout/BaseLayout";
import { useRouter } from "next/router";
import axios from "axios";

const Portfolio = ({ portfolio }) => {
  const router = useRouter();
  console.log(portfolio);
  return (
    <BaseLayout>
      <h2>PortfolioDetail Page</h2>
      <h3>From post #{router.query.id} </h3>
      <div>
        <h2>{portfolio.title}</h2>
        <p>Body: {portfolio.body}</p>
        <p>Id: {portfolio.id}</p>
      </div>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  let post = {};
  try {
    const res = await axios.get(`${URL}/${query.id}`);
    post = res.data;
  } catch (error) {
    console.error(error);
  }
  return { portfolio: post };
};

export default Portfolio;
