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
            <div  className=' box bg-secondary   z-40 mix-blend-difference  rounded-full ' style={{width: countH, height: countH,}}>

            </div>
			<h1  className="logo font-anton text-[calc(100px+10vw)] tracking-tighter absolute text-secondary ">
				KNOW
				<span  className=" font-montserrat text-[calc(200px+20vw)] leading-3">.</span>
			</h1>
		</div>  )
}

export default LoadingHome