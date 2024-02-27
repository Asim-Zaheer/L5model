import Layout from "../components/Layout";
import Head from "next/head";
import App from "@/components/design";
import SecondDesign from "@/components/design2";
const Home = () => {
    return (
      <>
        <Head>
          <title>LEVELFIVE</title>
        </Head>
        <Layout>
         <App/>
        <SecondDesign/>
        </Layout>
      </>
    );
  };
  export default Home;