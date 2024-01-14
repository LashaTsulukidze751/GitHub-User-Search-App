import { useRecoilState } from "recoil";
import { themState } from "../state";
import sunImage from "@/public/icon-sun.svg";
import moonImage from "@/public/icon-moon.svg";
import Image from "next/image";

export default () => {
  const [theme, setTheme] = useRecoilState(themState);

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  return (
    <header className="flex h-[60px] w-full items-center justify-between pr-5">
      <h1 className="text-3xl font-bold">devfinder</h1>
      <div className="flex hover:text-light-blue" onClick={handleThemeChange}>
        <h2 className="relative right-4 text-sm font-bold tracking-wide">
          {theme ? "DARK" : "LIGHT"}
        </h2>
        <Image
          src={theme ? moonImage : sunImage}
          className="h-5 w-5"
          alt="sun image"
        ></Image>
      </div>
    </header>
  );
};
