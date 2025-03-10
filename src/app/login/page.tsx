'use client'
import { actionlogin } from "@/actions/actionlogin";
// import AuthButton from "@/component/AuthButton";
import  { ContextP } from "@/component/ContextC";
import SubmitButton from "@/component/SubmitButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useContext, useEffect } from "react";


const initialState = {
    success: false,
    message: '',
}
const Page = () => {
    const [state, formAction] = useActionState(actionlogin, initialState);
    const Cshow = useContext(ContextP);
    const router = useRouter();

    useEffect(()=>{
        if(state?.success && Cshow){
            Cshow?.setShow(false);
            router.push("/userpanel");
        }
    },[Cshow, router, state?.success])


    return (
        <div className="w-full h-dvh flex justify-center bg-gradient-to-b from-gray-100 from-60% to-blue-500 ">
            <div className="w-full h-fit mx-3 lg:w-1/3 gap-3 mt-12 flex flex-col justify-center items-center border-1 shadow-2xl border-gray-700">
                <form action={formAction}  className="w-full p-3 flex flex-col  gap-2">
                    {state?.message && !state?.success ? (<h1 className="font-bold text-center">{state?.message}</h1>):''}
                    <input type="text" placeholder=" Enter your username" name="username"  className="w-full border-1 hover:border-blue-400 focus:border-1 focus:border-blue-700  "/>
                    <input type="password" placeholder=" Enter your password" name="password" className="w-full border-1 hover:border-blue-400 focus:border-blue-700 " />
                    <div className="felx flex-row gap-3 ">
                        <input type="checkbox" name="save" id="save" />
                        <label htmlFor="save">Remember</label>
                    </div>
                    <SubmitButton/>
                    {/* <AuthButton /> */}
                </form>   
                <Link href={"/register"} className="text-blue-700 p-3 hover:text-blue-950 hover:cursor-pointer">{"User register"}</Link>        
            </div>
        </div>
    );
}

export default Page;