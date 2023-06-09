import Image from "next/image";

const ProjectPage = () => {
  return (
    <section className="bg-accent py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-text">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-secondary rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a href="#">
              <Image
                src="/images/placeholder.svg"
                alt="Project 1"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-2 text-primary">
                  Project 1
                </h3>
                <p className="text-lg leading-7 text-primary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mollis dolor eu tellus dignissim auctor.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-secondary rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a href="#">
              <Image
                src="/images/placeholder.svg"
                alt="Project 2"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-2 text-primary">
                  Project 2
                </h3>
                <p className="text-lg leading-7 text-primary">
                  Nullam finibus lacus id tincidunt consectetur. Donec auctor
                  ipsum et justo commodo, at bibendum massa feugiat.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-secondary rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">
            <a href="#">
              <Image
                src="/images/placeholder.svg"
                alt="Project 3"
                width={500}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-2 text-primary">
                  Project 3
                </h3>
                <p className="text-lg leading-7 text-primary">
                  Vestibulum dapibus nisl ac lorem bibendum faucibus. Proin
                  euismod velit sed erat commodo, ut eleifend tellus ultrices.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
