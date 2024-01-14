"use client"
import InputLabel from "./components/InputLabel";
import Header from "./components/Header";
import { RecoilRoot } from "recoil";
import UserInformation from "./components/UserInformation";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-light-whitegrey px-6 py-8 pr-5">
      <RecoilRoot>
        <Header />
        <InputLabel />
        <UserInformation />
      </RecoilRoot>
    </div>
  );
}
