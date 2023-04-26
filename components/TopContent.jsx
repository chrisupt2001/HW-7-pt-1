import { getCurrentUser } from "../utils/data";
import Image from "next/image";


const { name, email, avatar } = getCurrentUser();

const TopContent = () => {
  return( 
  <div className="barge flex justify-center flex-col items-center">
    <Image className="rounded-full mt-14" alt="" height={145} width={145} src={avatar}>
    </Image>
    <p className="h1">{name}</p>
  </div>
        )
};

export default TopContent;
