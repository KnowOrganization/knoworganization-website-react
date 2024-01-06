import React, {useRef, useLayoutEffect, useState, useEffect} from 'react'


function LoadingHome() {

    const [countH, setcountH] = useState(0)

  
    useEffect(() => {
        const timer = setTimeout(() => {
            setcountH(countH + 2)
        }, 1);
        
        return () => {
            clearTimeout(timer)
        };
    }, [countH]);

  return (
<div
			className={

                `loader flex justify-center items-center w-screen h-screen  absolute top-0 z-30 bg-primary`
            }
		>
            <div  className=' box bg-white   z-40 mix-blend-difference  rounded-full ' style={{width: countH, height: countH,}}>

            </div>
			<h1  className="logo font-anton text-[300px] tracking-tighter absolute text-white ">
				KNOW
				<span  className=" font-montserrat text-[600px] leading-3">.</span>
			</h1>
		</div>  )
}

export default LoadingHome