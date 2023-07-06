const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              GraphQL Mocker's development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
            We have experienced firsthand the complexities of testing and debugging GraphQL queries, and we wanted to create a tool that simplifies this process. With our extensive knowledge of GraphQL and web development, we embarked on the journey to build MockGraphQL, a powerful Google Chrome extension that empowers developers to efficiently mock GraphQL request responses. 
            </p>
            <p className="mt-4 text-gray-600">
              {" "}
              Our goal is to provide developers with a seamless and user-friendly experience, enabling them to save time, enhance their testing workflows, and ultimately deliver high-quality GraphQL applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
