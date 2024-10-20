"use client"
import { useState } from "react";
import clsx from "clsx";
const Verifier = () => {

    const handlerClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsVerified(!isVerified);
    }
   const [isVerified,setIsVerified] = useState(false);

  return <div className={clsx('text-black',{
    'text-green-500':isVerified,
    'text-red-500':!isVerified
  })}>
    
   <button onClick={handlerClick}>
    {isVerified ? 'Verified' : 'Not Verified'}
   </button>
    
    </div>;
};

export default Verifier;

