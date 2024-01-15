import { useRecoilState } from "recoil";
import { UserDatatype, userDataState } from "../state";
import Link from "next/link";
import Image from "next/image";
import { checkAvailability } from "../domFunctions";

//images
import locationImg from "@/public/icon-location.svg";
import websiteImg from "@/public/icon-website.svg";
import tweeterImg from "@/public/icon-twitter.svg";
import companyImg from "@/public/icon-company.svg";

export default () => {
  const [userData, setUserData] = useRecoilState<UserDatatype | null>(
    userDataState
  );
  const date = userData ? new Date(userData.created_at) : new Date();
  console.log(userData?.avatar_url);
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
    <div className="mt-4 w-full justify-evenly rounded-[15px] bg-white px-6 py-8">
      <div className="mb-7 flex justify-around">
        <img
          src={`${userData?.avatar_url}`} // Provide a default image source
          alt="user image"
          width={70}
          height={70}
          className="rounded-[70px]"
        />
        <ul>
          <li className="text-base font-bold text-[#2B3442]">
            {userData.name}
          </li>
          <Link href={userData.html_url} className="text-[13px] text-[#0079FF]">
            @{userData.login}
          </Link>
          <li className="text-[13px] text-[#697C9A]">
            joined {date.getDate()} {months[date.getMonth()]}{" "}
            {date.getFullYear()}
          </li>
        </ul>
      </div>
      <p className="text-[13px] text-[#4B6A9B]">{userData.blog}</p>
      <ul className="my-6 flex h-[85px] w-full justify-evenly bg-light-whitegrey">
        <li className="flex flex-col items-center justify-center">
          <h5 className="tex-[11px] text-light-blue">Repos</h5>
          <h5>{userData.public_repos}</h5>
        </li>
        <li className="flex flex-col items-center justify-center">
          <h5 className="tex-[11px] text-light-blue">Followers</h5>
          <h5>{userData.followers}</h5>
        </li>
        <li className="flex flex-col items-center justify-center">
          <h5 className="tex-[11px] text-light-blue">Following</h5>
          <h5>{userData.following}</h5>
        </li>
      </ul>
      <ul className="flex flex-col md:flex-row md:flex-wrap">
      
          <li className="m-2 flex w-full sm:w-5/12">
            <div className="flex w-[20px] justify-center"><Image src={locationImg} alt="location" />
              </div>            
            <h5 className="relative left-4 text-[13px] text-light-blue">{userData.location}</h5>
          </li>
          <li className="m-2 flex w-full sm:w-5/12">
            <Image src={websiteImg} alt="Website url" />
            <Link className="relative left-4 text-[13px] text-light-blue" href={userData.avatar_url}>{userData.login}</Link>
          </li>
        
        
          <li className="m-2 flex w-full sm:w-5/12">
            <Image src={tweeterImg} alt="tweeter url" />
            <h5 className="relative left-4 text-[13px] text-light-blue">{checkAvailability(userData.twitter_username)}</h5>
          </li>
          <li className="m-2 flex w-full sm:w-5/12">
            <Image src={companyImg} alt="company name" />
            <h5 className="relative left-4 text-[13px] text-light-blue">{checkAvailability(userData.twitter_username)}</h5>
          </li>
        
      </ul>
    </div>
  ) : (
    <></>
  );
};
