/* eslint-disable react/no-unescaped-entities */
// deploy to vercel, adding to test checkly
import Layout from "../components/layout";
import HomePage from "../components/home";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";

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
