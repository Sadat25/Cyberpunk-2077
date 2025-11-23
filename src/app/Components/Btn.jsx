

const Btn = ({children, className}) => {
  return (
    <button className={`px-6 py-3 rounded-lg text-white bg-linear-to-r from-[#F0B71F] to-[#E03609] cursor-pointer font-Montserrat font-semibold text-lg tracking-[-0.5px] ${className}`}>
        {children}  
    </button>
  )
}

export default Btn