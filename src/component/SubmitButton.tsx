'use client'

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
        <button className= "w-full bg-blue-950 text-gray-100 py-1" disabled={pending} type="submit">{pending?"Loading...":"Login"}</button>
    );
}

export default SubmitButton;