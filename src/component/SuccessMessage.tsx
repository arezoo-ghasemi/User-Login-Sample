'use client'

type delType = {delHandle:()=>void }
const SuccessMessage = ({delHandle}:delType) => {

    return (
        <div className={`w-screen h-screen  z-20 absolute  bg-[rgba(0,0,0,0.7)] justify-center flex `} >
            <div className="lg:w-1/3 w-4/5  h-fit mt-28 p-7 border-1 border-gray-900 bg-white  items-center flex flex-row justify-between gap-10  ">
                <p>your message send successfull</p>
                <button onClick={delHandle} className="text-black font-bold">x</button>
            </div>           
        </div>
    );
}

export default SuccessMessage;