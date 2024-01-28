// import img from "../assets/studyLady.webp";
import img4 from "../assets/studyLady.webp";
import { CiHeart } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
// import { MdDeleteForever } from "react-icons/md";
// import { useState } from "react";
import Button from "../reUse/Button";
import { Link } from "react-router-dom";

const Header = () => {
//   const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="border-b w-[100%] h-[65px] flex items-center justify-center sticky top-[0%] left-[0px]  bg-white z-50">
      <div className="w-[95%] h-[100%] flex items-center justify-between bg-white">
        <div className="font-[600] h-[60px] w-[60px] rounded-[50%] shadow-md flex justify-center items-center bg-[#C14A4C] text-[white]">
          Read
        </div>
        <div className="flex  w-[400px] h-[40px] justify-center border items-center text-[15px] rounded-[20px]">
          <CiSearch className="text-[#39A88E] w-[40px]" />
          <input
            type="text"
            placeholder="What do you want to Read today...."
            className="flex w-[100%] justify-between font-[500] text-[11px] outline-0 h-[30px] rounded-[20px]"
          />
        </div>
        <div className="flex justify-between items-center w-[17%] h-[60%] text-[27px]">
          <div className="rounded-[50%] w-[40px] h-[40px] overflow-hidden">
            <img src={img4} alt="" />
          </div>
          <CiHeart className="cursor-pointer"/>
          <div className="border py-3 cursor-pointer"></div>
          <Link to="/register">
            <Button
              className=" bg-[#C14A4C] h-[35px] text-[15px]"
              name="Register"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;