import AboutDev from "../../Components/AboutDev/AboutDev";
import Campus from "../../Components/Campus/Campus";
import Common from "../../Components/Common/Common";
import Footer from "../../Components/Footer/Footer";
import Receive from "../../Components/Receive/Receive";

function HomePage() {
  return (
    <>
      <AboutDev />
      <Receive/>
      <Campus />
      <Common />
      <Footer />
    </>
  );
}
export default HomePage;
