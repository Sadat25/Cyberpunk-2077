import Btn from "../Components/Btn"

const NavBar = () => {
    return (
        <div className='bg-linear-to-r from-[#E03609] to-[#F0B71F] pb-px'>
            <div className='bg-black'>
                <div className='container m-auto bg-linear-to-r from-[#E03609] to-[#F0B71F] px-px'>
                    <div className='relative bg-black p-13 flex justify-between items-center'>
                        <img className="absolute bottom-[-31px] left-[-31px] " src="/Union.png" alt="" />
                        <img className="absolute bottom-[-31px] right-[-31px] " src="/Union2.png" alt="" />
                        <img src="/logo.png" alt="" />
                        <ul className="flex gap-15 "> 
                            <li className="cursor-pointer ">Home</li>
                            <li className="cursor-pointer ">Pages</li>
                            <li className="cursor-pointer ">Support</li>
                            <li className="cursor-pointer ">Contact</li>
                        </ul>
                        <Btn className='px-10'> Get started free </Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar