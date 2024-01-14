"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import searchImage from "@/public/icon-search.svg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { UserDatatype, userDataState } from "../state";

export default () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useRecoilState<UserDatatype | null>(userDataState);

  const fetchData = async (e: FormEvent) => {
    e.preventDefault();
    console.log(`https://api.github.com/users/${userName}`);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <form
      onSubmit={fetchData}
      className="flex h-[60px] w-full items-center justify-evenly rounded-[15px] bg-white p-[14px] shadow-shadow1"
    >
      <Image src={searchImage} alt="search image" className="h-5 w-5" />
      <input
        type="text"
        name="username"
        placeholder="Search Github username"
        value={userName}
        onChange={handleInputChange}
        className="h-[25px] w-[180px] text-[13px] outline-none"
      />
      <button
        type="submit"
        className="h-[46px] w-[84px] rounded-[10px] bg-blue-def text-center text-white"
      >
        search
      </button>
    </form>
  );
};
