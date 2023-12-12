import AboutMe from "./About/AboutMe";
import Banner from "./Banner/Banner";
import ContactForm from "./Contact/ContactForm";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className="my-5 md:my-0">
        <Banner />
      </div>
      <div className="my-32">
        <AboutMe />
      </div>
      <div className="my-20">
        <Skills />
      </div>
      <div className="my-20">
        <Experience />
      </div>
      <div className="my-20">
        <Projects />
      </div>
      <div className="my-24">
        <ContactForm/>
      </div>
    </div>
  );
};

export default MainPage;
