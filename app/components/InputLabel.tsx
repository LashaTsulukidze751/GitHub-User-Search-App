"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import searchImage from "@/public/icon-search.svg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { UserDatatype, themState, userDataState } from "../state";

export default () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useRecoilState<UserDatatype | null>(
    userDataState
  );
  const [notFound, setNotFound] = useState(false);
  const [theme, setTheme] = useRecoilState(themState);

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    console.log(`https://api.github.com/users/${userName}`);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data.message != "Not Found") {
        setUserData(data);
        console.log(data);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNotFound(false);
    setUserName(e.target.value);
  };

  return (
    <form
      onSubmit={fetchData}
      className={`${
        theme ? " bg-dark-blue" : "bg-white"
      } flex h-[60px] w-full  rounded-[15px] flex-col    p-[14px] shadow-shadow1
      md:h-[69px]
      `}
    >
      <div className="flex h-full w-full items-center justify-evenly">
        <Image
          src={searchImage}
          alt="search image"
          className="h-5 w-5 md:h-6 md:w-6"
        />
        <div className="flex w-full justify-between px-2">
          <input
            type="text"
            name="username"
            placeholder="Search Github username"
            value={userName}
            onChange={handleInputChange}
            className="ml-1 h-[25px] w-8/12 bg-inherit text-[13px] outline-none md:text-[18px]"
          />
          {notFound && (
            <span className="text-red-600">no result</span>
          )}
        </div>
        <button
          type="submit"
          className="h-[46px] w-[84px] rounded-[10px] bg-blue-def text-center text-white md:h-[50px] md:w-[106px]"
        >
          search
        </button>
      </div>
    </form>
  );
};
