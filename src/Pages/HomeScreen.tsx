import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/animatedReading.jpg";
const HomeScreen = () => {
  return (
    <div className="bg-[white] w-[100%] h-[90vh] flex justify-center">
      <div className=" w-[95%] h-[90%] flex items-center justify-between">
        <div className="flex items-center w-[45%]">
          <img src={img} alt="" className="w-[540px] mt-[10px]" />
        </div>
        <div className="w-[45%] ">
          <div className="text-[black] text-[14px]">Readme</div>
          <div className="text-[black] text-[50px]  font-[700]">
            Choose From The Best Library
          </div>
          <div className="text-[black] text-[14px]">
            Explore a range of hybrid Books crafted to track, monitor and
            improve overall health and wellness. Powered by
            state-of-the-art-technology, sapa trackers are renowned for their
            award-winning design and unsurpassed battery life
          </div>
          <div className="text-[white] mt-[50px]">#1</div>
          <div className="text-[#C14A4C]">WORLDWIDE</div>
          <div className="text-[white] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
          <button className="bg-[#C14A4C] rounded-sm flex py-2 px-7 text-[white] items-center mt-[15px]">
            Read now
            <FaArrowRight className="text-[white] text-[14px] ml-[5px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
