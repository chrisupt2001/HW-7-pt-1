import FB from "../images/facebook.svg";
import IG from "../images/instagram.svg";
import Snap from "../images/snapchat.svg";
import Twitter from "../images/twitter.svg";
import Image from "next/image";
const SocialLinks = () => {
  return (
    <header className='barge bg-white flex justify-between items-center'>
      <Image src={Snap} alt='Link Barge' height='40' width='40' />
      <Image src={FB} alt='Link Barge' height='40' width='40' />
      <Image src={IG} alt='Link Barge' height='40' width='40' />
      <Image src={Twitter} alt='Link Barge' height='40' width='40' />
      <p className='h1 text-white'></p>
    </header>
  );
};
export default SocialLinks;