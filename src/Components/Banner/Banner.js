import "./Banner.css";
const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner-img">
          <img
            src="https://devplus.edu.vn/assets/images/devplus/Devplus_missions.png"
            alt=""
          />
        </div>
        <div className="banner-body">
          <h1 className="fade-left">
            Devplus Will Support The Early Stage Developers Go The Right Career
            Path
          </h1>
          <p className="fade-right">
            Devplus is not a training center, it's battle campus for you to
            level up your skillsets and ready to onboard any projects in our
            “kindest” companies listing
          </p>
          <a href="#">
            <button className="banner-btn fade up">Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Banner;
