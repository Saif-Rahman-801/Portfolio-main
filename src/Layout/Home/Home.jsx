import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            {/* Navbar here */}
            <Navbar />
            {/* children components */}
            <Outlet />
        </div>
    );
};

export default Home;