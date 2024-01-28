import React from "react";
import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import { FC } from "react";
import { useSelector } from "react-redux";
import Header2 from "./Header2";

const Layout: FC = () => {
  const readToggle = useSelector((state: any) => state.toggle);
  return (
    <div>
      <Sider />
      <div className="w-full flex justify-end ">
        <div
          className={`bg-[white] transition-all duration-300 `}
          style={{
            width: `${readToggle ? "calc(100% - 170px)" : "calc(100% - 70px)"}`,
          }}
        >
          <Header2/>
          <div className="m-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
