'use client'
import { useContext } from "react";
import MenuItem from "./MenuItem";
import { ContextP } from "./ContextC";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

type aryType = {title:string, adr:string};
const Menue = () => {
    const ary:aryType[] = [{title:"Home", adr:"/"},{title:"About us", adr:"/about"}, {title:"Contact us", adr:"/contact"}];

    const Cshow = useContext(ContextP);
    const route = useRouter();
    const loginHandel = ()=>{     
        route.replace("/login");
    }
    const logoutHandel = ()=>{ 
        const cS = new Cookies(null,{ path:"/" });        
        cS.remove("TokenUser");
        Cshow?.setShow(true);
        route.replace("/");
    }
    return (
        <>
        <div className="flex flex-row border-y-1 border-gray-700 py-3 lg:px-7 px-1 justify-between">      
            <ul className="flex flex-row gap-3 font-bold text-gray-900">
                {ary.map((elm:aryType, index: number)=>{
                return <MenuItem key={index} item={elm} />
                })}
            </ul>
            {Cshow?.show ? <div><button onClick={loginHandel} className="text-gray-100 hover:cursor-pointer bg-gray-950 py-1 px-7">{"Login"}</button></div>: 
            <div><button onClick={logoutHandel} className="text-gray-100 hover:cursor-pointer bg-gray-950 py-1 px-7">{"Logout"}</button></div>}
        </div>
        </>
    );
}

export default Menue;