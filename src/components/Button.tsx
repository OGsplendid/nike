interface IButtorProps {
  label: string,
  iconURL?: string,
  bgColor?: string,
  borderColor?: string,
  textColor?: string,
}

const Button = ({ label, iconURL, bgColor, borderColor, textColor }: IButtorProps) => {
  return (
    <button 
        className={`flex justify-center items-center gap-2 px-4 py-4 transition-all
        border font-montserrat text-lg rounded-full w-full md:w-60
        hover:outline hover:-outline-offset-8
        ${bgColor
          ? `${bgColor} ${borderColor} ${textColor}`
          : `bg-coral-red
          text-white border-coral-red`}
        `}
    >
        {label}
        {iconURL && <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt={label} />}
    </button>
  )
}

export default Button