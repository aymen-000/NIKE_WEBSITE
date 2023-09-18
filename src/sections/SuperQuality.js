import Button from "../component/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <div className="flex space-y-4 flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 lg:space-y-3">
          <h1 className=" text-4xl font-montserrat font-bold text-black">n
            We Provide You <span className=" text-coral-red ">Super Quality</span> Shoes
          </h1>
          <p className="text-slate-gray flex items-start text-xl font-montserrat leading-8 mt-2 py-4"> 
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience,providing you with unmatched quality,innovation,and a touch of elegane.
            <br/>
            <br/>
            Our dedication to detail and exellence ensures your satisification
          </p>
          <Button label={"View dtails"} iconURL={arrowRight}/>
        </div>
        <div className="w-full flex justify-center lg:w-1/2 pl-10">
          <img src={shoe8} width={400} height={400}/>
        </div>
    </div>
  )
}

export default SuperQuality
