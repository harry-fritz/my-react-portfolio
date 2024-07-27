import img1 from "../assets/projects1.jpg";
import img2 from "../assets/projects2.jpg";
import img3 from "../assets/projects3.jpg";
import img4 from "../assets/projects4.jpg";
import Aos from "aos";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img
          data-aos="fade-up"
          height={250}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img1}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={250}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img2}
          alt=""
        />
        <img
          data-aos="fade-up"
          height={250}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img2}
          alt=""
        />
        <img
          data-aos="fade-down"
          height={250}
          width={250}
          className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
