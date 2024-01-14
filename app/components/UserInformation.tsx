import Image from "next/image";
import { useRecoilState } from "recoil";
import { UserDatatype, userDataState } from "../state";
import defaultimage from "@/public/favicon-32x32.png";
import Link from "next/link";

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
    <div>
      <div>
        {/* <Image
          src={userData?.avatar_url} // Provide a default image source
          alt="user image"
          width={70}
          height={70}
          className="rounded-[70px]"
        /> */}
        <ul>
          <li>{userData.name}</li>
          <Link href={userData.html_url}>@{userData.login}</Link>
          <li>
            joined {date.getDate()} {months[date.getMonth()]}{" "}
            {date.getFullYear()}
          </li>
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        similique minus tempore quae! Unde, accusantium non. Sint, dolore rerum
        placeat repellendus dignissimos in magna
      </p>

      <ul>
        <li>
          <h5>Repos</h5>
          <h5>{userData.public_repos}</h5>
        </li>
        <li>
          <h5>Followers</h5>
          <h5>{userData.followers}</h5>
        </li>
        <li>
          <h5>Following</h5>
          <h5>{userData.following}</h5>
        </li>
      </ul>
      <ul>
        <li>
          <img src="" alt="" />
          <h5>location</h5>
        </li>
        <li>
          <img src="" alt="" />
          <h5>link</h5>
        </li>
        <li>
          <img src="" alt="" />
          <h5>twitter</h5>
        </li>
        <li>
          <img src="" alt="" />
          <h5>company</h5>
        </li>
      </ul>
    </div>
  ) : (
    <></>
  );
};
