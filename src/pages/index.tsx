/* eslint-disable react/no-unescaped-entities */
// deploy to vercel, adding to test checkly
import Layout from "../components/index/layout";
import HomePage from "../components/index/home";
import AboutPage from "../components/index/about";
import ContactPage from "../components/index/contact";

const Home = () => {
  return (
    <Layout>
      <HomePage />
      <AboutPage />
      <ContactPage />
    </Layout>
  );
};

export default Home;
