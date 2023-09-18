import { arrowRight } from "../assets/icons"
import Button from "../component/Button"


const Subscribe = () => {
  return (
    <div className="flex lg:flex-row py-10 items-center justify-between flex-col space-y-8 ">
        <div className="w-2/3">
          <h1 className="text-3xl font-montserrat font-bold text-black self-center">Sign Up for <span className="text-coral-red">Updates</span> &Newsletter </h1>
        </div>
        <div className="flex flex-row justify-between border-solid border-2 border-slate-gray rounded-[2rem] py-2 px-2 min-lg:w-2/3">
            <input placeholder="subscribe@nike.com" className="py-3 px-2 border-none outline-0 text-slate-gray" type="email"/>
            <button className="bg-coral-red rounded-full px-5 py-2 flex justify-center items-center  border font-montserrat text-lg leading-none text-white border-coral-red w-1/3">Sign up</button>
        </div>
    </div>
  )
}

export default Subscribe
