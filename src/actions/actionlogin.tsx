'use server'

import axios from "axios";

import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

 
export async function actionlogin(state: { success:boolean, message: string } | undefined, formdata: FormData) {
    const username = formdata.get("username");
    const password = formdata.get("password");
    // const remember = formdata.get("save");
    // let rem  = 0;
    // if (remember=="on") {
    //     rem = 1;        
    // }
    ////////////validation///////////////
    if(username==""){
        return { success:false, message: "username is empty" };
    }
    if(password==""){
        return {success:false, message: "password is empty" };
    }
    try{
        const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {email: username,   password: password});
        if(res.status==200 || res.status==201){
            // const token = res.data.token;
            const token = res.data.access_token;       
            (await cookies()).set("TokenUser", token);
            return {success:true, message: "" };
            // redirect("/userpanel");
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch (error) {
        return {success:false, message: "Invalid username or password" };
    }
}

//////Login information////////////////////////
// [POST] https://api.escuelajs.co/api/v1/auth/login
// # Body
// {
//   "email": "john@mail.com",
//   "password": "changeme"
// }