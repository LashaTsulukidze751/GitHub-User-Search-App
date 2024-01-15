"use client";
import InputLabel from "./components/InputLabel";
import Header from "./components/Header";
import { useRecoilState } from "recoil";
import UserInformation from "./components/UserInformation";
import { themState } from "./state";

export default function MainPage() {
  const [theme, settheme] = useRecoilState(themState);
  return (
      <div
        className={`${
          theme?' bg-dark-blue':'bg-light-whitegrey'
        } min-h-screen w-full  px-6 py-8 pr-5`}
      >
        <Header />
        <InputLabel />
        <UserInformation />
      </div>
  );
}
