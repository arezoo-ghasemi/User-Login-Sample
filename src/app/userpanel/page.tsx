import Image from "next/image";
import picUser from "../../pic/userIcon.jpg";

const page = () => {
    return (
        <div className="h-screen flex flex-col gap-3  items-center mt-10  bg-gradient-to-b from-white from-70% to-blue-300">
            <Image src={picUser}  alt="profilePic" width={200} height={200} className="border-2 border-blue-950 rounded-full" />
            <p className="font-bold ">Wellcome dear john</p>
            <p>I hope you are well and enjoy working with this site.</p>
        </div>
    );
}

export default page;