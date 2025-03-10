import Image from "next/image";
import userI from '../pic/userImage.webp'

export default function Home() {
  return (
    <div >
      <div className="w-full text-xl font-bold text-center mt-5">
        <p>Login user sample site</p>
      </div>
      <div className=" w-full  grid grid-cols-1 lg:grid-cols-2 lg:gap-28 gap-10 justify-center items-center my-10 lg:my-20 px-10">
        <p className="lg:ml-10 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra 
          accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
          In egestas erat imperdiet sed euismod nisi porta lorem mollis Morbi tristique senectus et netus Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien faucibus et molestie ac feugiat sed lectus vestibulum Ullamcorper velit
        </p>
        <Image src={userI} alt="UserImage" width={400} height={400} className="lg:ml-5 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-2xl rounded-tl-full rounded-br-full"/>
      </div>
    </div>

  );
}
