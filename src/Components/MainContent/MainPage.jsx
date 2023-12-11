import AboutMe from "./About/AboutMe";
import Banner from "./Banner/Banner";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Banner />
      </div>
      <div className="my-32">
        <AboutMe />
      </div>
    </div>
  );
};

export default MainPage;
