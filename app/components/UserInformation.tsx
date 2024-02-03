import { useRecoilState } from "recoil";
import { UserDatatype, themState, userDataState } from "../state";
import Link from "next/link";
import Image from "next/image";
import { checkAvailability } from "../domFunctions";

//images
import locationImg from "@/public/icon-location.svg";
import websiteImg from "@/public/icon-website.svg";
import tweeterImg from "@/public/icon-twitter.svg";
import companyImg from "@/public/icon-company.svg";

export default () => {
  const [theme, setTheme] = useRecoilState(themState);
  const [userData, setUserData] = useRecoilState<UserDatatype | null>(
    userDataState
  );
  const date = userData ? new Date(userData.created_at) : new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return userData ? (
    <div
      className={`${
        theme ? " bg-dark-blue" : "bg-white"
      } mt-4 w-full justify-evenly rounded-[15px]  px-6 py-8 lg:flex lg:flex-col lg:items-end`}
    >
      <div className="mb-7 flex w-full justify-around">
        <img
          src={`${userData?.avatar_url}`}
          alt="user image"
          className="h-[70px] w-[70px] rounded-[70px] md:h-[117px] md:w-[117px]"
        />
        <ul className="flex flex-col justify-center lg:w-2/3 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col justify-center">
            <li
              className={`text-base font-bold  ${
                theme ? "text-white" : "text-[#2B3442]"
              } md:text-[26px]`}
            >
              {userData.name}
            </li>
            <Link
              href={userData.html_url}
              className="text-[13px] text-[#0079FF] md:text-[16px]"
            >
              @{userData.login}
            </Link>
          </div>
          <li
            className={`text-[13px] flex items-center ${
              theme ? "text-white" : "text-[#2B3442]"
            } md:text-[15px]`}
          >
            joined {date.getDate()} {months[date.getMonth()]}{" "}
            {date.getFullYear()}
          </li>
        </ul>
      </div>
      <p className={`text-[13px] lg:w-2/3  ${theme ? "text-white" : "text-[#4B6A9B]"}`}>
        {userData.blog}
      </p>
      <ul
        className={` ${
          theme ? " bg-dark-black" : "bg-light-whitegrey"
        } my-6 flex  h-[85px] w-full justify-evenly rounded-xl lg:w-2/3 `}
      >
        <li className="flex flex-col items-center justify-center">
          <h5
            className={`tex-[11px] ${
              theme ? "text-white" : "text-light-blue"
            } md:text-[13px]`}
          >
            Repos
          </h5>
          <h5 className="text-[16px] font-bold md:text-[22px]">
            {userData.public_repos}{" "}
          </h5>
        </li>
        <li className="flex flex-col items-center justify-center">
          <h5
            className={`tex-[11px] ${
              theme ? "text-white" : "text-light-blue"
            } md:text-[13px]`}
          >
            Followers
          </h5>
          <h5 className="text-[16px] font-bold md:text-[22px]">
            {userData.followers}
          </h5>
        </li>
        <li className="flex flex-col items-center justify-center">
          <h5
            className={`tex-[11px] ${
              theme ? "text-white" : "text-light-blue"
            } md:text-[13px]`}
          >
            Following
          </h5>
          <h5 className="text-[16px] font-bold md:text-[22px]">
            {userData.following}
          </h5>
        </li>
      </ul>
      <ul className="relative right-1 flex flex-col md:flex-row md:flex-wrap lg:w-2/3">
        <li className="m-2 flex w-full sm:w-5/12">
          <div className="flex w-[20px] justify-center">
            <Image src={locationImg} alt="location" />
          </div>
          <h5
            className={`relative left-4 text-[13px] ${
              theme ? " text-white" : "text-light-blue"
            } md:text-[15px]`}
          >
            {userData.location}
          </h5>
        </li>
        <li className="m-2 flex w-full sm:w-5/12">
          <Image src={websiteImg} alt="Website url" />
          <Link
            className={`relative left-4 text-[13px] ${
              theme ? " text-white" : "text-light-blue"
            } md:text-[15px]`}
            href={userData.avatar_url}
          >
            {userData.login}
          </Link>
        </li>
        <li className="m-2 flex w-full sm:w-5/12">
          <Image src={tweeterImg} alt="tweeter url" />
          <h5
            className={`relative left-4 text-[13px] ${
              theme ? " text-white" : "text-light-blue"
            } md:text-[15px]`}
          >
            {checkAvailability(userData.twitter_username)}
          </h5>
        </li>
        <li className="m-2 flex w-full sm:w-5/12">
          <Image src={companyImg} alt="company name" />
          <h5
            className={`relative left-4 text-[13px] ${
              theme ? " text-white" : "text-light-blue"
            } md:text-[15px]`}
          >
            {checkAvailability(userData.twitter_username)}
          </h5>
        </li>
      </ul>
    </div>
  ) : (
    <></>
  );
};
