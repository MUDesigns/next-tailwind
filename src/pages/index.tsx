/* eslint-disable react/no-unescaped-entities */
// deploy to vercel, adding to test checkly
import Layout from "@/components/index/layout";
import BannerPage from "@/components/index/banner";
import ProjectPage from "@/components/index/projects";
import AboutPage from "@/components/index/about";
import ContactPage from "@/components/index/contact";

const Home = () => {
  return (
    <Layout>
      <BannerPage />
      <ProjectPage />
      <AboutPage />
      <ContactPage />
    </Layout>
  );
};

export default Home;
