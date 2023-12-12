import AboutMe from "./About/AboutMe";
import Banner from "./Banner/Banner";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className="my-5 md:my-0">
        <Banner />
      </div>
      <div className="my-20">
        <Skills />
      </div>
      <div className="my-32">
        <AboutMe />
      </div>
      <div className="my-32">
        <Experience />
      </div>
    </div>
  );
};

export default MainPage;
