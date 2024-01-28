import { useState } from "react";
// import { MdFacebook } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Input from "../reUse/Input";
import Button from "../reUse/Button";
import { registerUser } from "../api/userApi";
import ClipLoader from "react-spinners/ClipLoader";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (el: any) => {
    el.preventDefault();
    setLoading(true);

    if (email !== "") {
      registerUser(email)
        .then(() => {
          setLoading(false);
          toast.success("User Register");
        })
        .then(() => {
          navigate("/login");
        });
    }
  };

  return (
    <div className=" w-full h-[94vh] flex flex-col justify-center items-center ">
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <div className="mb-5 w-20 h-20 rounded-full border shadow-md flex justify-center items-center font-bold text-[20px] bg-[white] text-[#C14A4C]">
          Read
        </div>
        <div className="text-[26px] font-bold mb-3">Create an Account</div>
        <div className="text-[14px] -mt-4 ">
          sign up now and get free account instant.
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <form
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          className="w-[97%]"
          type="email"
          required
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />

        <div>
          <Button
            name="Register"
            className="w-[97%] bg-[#C14A4C] text-white h-14 hover:bg-black-600 transition-all duration-300"
            type="submit"
            icon={loading && <ClipLoader color="white" size={18} />}
            onClick={handleSubmit}
          />
        </div>
        <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
          Sign up with social network
        </div>
        <div className="flex flex-col">
          <Button
            name="Continue with Google"
            className="h-14 bg-[crimson] hover:text-white  transition-all duration-300 font-medium text-[#ababab]"
            icon={<FaGoogle />}
          />
        </div>
      </form>
      <div className="mt-5 text-[13px]">
        Already have an Account?{" "}
        <span className="font-bold text-black-300">
          <Link to="/login">Login here</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
