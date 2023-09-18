
function Button({label,iconURL}) {
  return (
    <button className="bg-coral-red rounded-full px-7 py-4 flex justify-center items-center gap-2 border font-montserrat text-lg leading-none text-white border-coral-red">
        {label}<img src = {iconURL} alt="arrow right icon " className="ml-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button