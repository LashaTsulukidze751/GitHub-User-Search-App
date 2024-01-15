'use client'
import { RecoilRoot } from "recoil";
import MainPage from "./MainPage";
function Home() {
  return (
    <>
      <RecoilRoot>
        <MainPage/>
      </RecoilRoot>
    </>
  );
}

export default Home;
