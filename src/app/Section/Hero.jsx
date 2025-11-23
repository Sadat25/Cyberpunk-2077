import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className=" container m-auto bg-linear-to-r from-[rgb(224,54,9)] to-[rgb(240,183,31)] px-px ">
                <div className="relative w-full bg-black px-13">
                    <img className="absolute bottom-[-31px] left-[-31px] " src="/Union.png" alt="" />
                    <img className="absolute bottom-[-31px] right-[-31px] " src="/Union2.png" alt="" />
                    <h2 className='font-bold text-[198px] pt-31 text-center font-Orbitron '>Cyber Punk</h2>
                    <img className='m-auto -mt-45' src="/CP.png" alt="" />
                    <img className='absolute top-[625px] left-[330px]' src="/line.png" alt="" />
                    <ul className='list-disc absolute top-[610px] left-[140px]'>
                        <li>
                            <h2 className='mb-4.5 font-Montserrat font-semibold text-2xl'>Stories & Lore</h2>
                            <p className='font-Montserrat font-medium leading-[155%] text-[#DDDDDD] max-w-60 '>Dive into compelling narratives set in a dystopian future.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-linear-to-r from-[#E03609] to-[#F0B71F] h-px'></div>
        </div>
    )
}
export default Hero
