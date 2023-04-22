/* eslint-disable react/no-unescaped-entities */

const BannerPage = () => {
  return (
      <section className="container mx-auto flex flex-col md:flex-row items-center py-[10rem] px-5">
        <div className="md:w-1/2 mb-10 md:mb-0 mx-auto">
          <h2 className="text-6xl font-bold text-secondary">Matthew Nyce</h2>
          <h3 className="text-3xl mb-8 text-text text-shadow shadow-accent">
            Full-Stack Developer
          </h3>
          <p className="text-lg leading-7 text-text text-shadow shadow-accent">
            I'm a full-stack developer with experience in React, Next.js,
            Node.js, and more. I'm passionate about creating responsive,
            intuitive web experiences that users love.
          </p>
        </div>
      </section>
  );
};

export default BannerPage;
