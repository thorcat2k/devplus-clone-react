import AboutDev from "../../Components/AboutDev/AboutDev";
import Campus from "../../Components/Campus/Campus";
import Common from "../../Components/Common/Common";
import Footer from "../../Components/Footer/Footer";
import Receive from "../../Components/Receive/Receive";
import Review from "../../Components/Review/Review";
import Navbar from "../../Components/Header/Navbar/Navbar"

function HomePage() {
  return (
    <>
      <Navbar/>
      <AboutDev />
      <Receive />
      <Campus />
      <Common />
      <Review />
      <Footer />
    </>
  );
}
export default HomePage;
