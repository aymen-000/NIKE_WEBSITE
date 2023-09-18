import Button from "../component/Button"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"
const SpecialOffers = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-10 items-center ">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-montserrat font-bold">  <span className="text-coral-red">Special</span> Offer</h1>
          <p className="text-2xl text-slate-gray font-montserrat">Empark on a shopping journey that redifines your experience with unbeatable deals,From premier selections to incredible saving, We offer unparalleled value that sets us aprt.</p>
          <br/>
          <p className="text-2xl text-slate-gray font-montserrat">
            Navigate a realme of possibilities designed to fulfill you unique desire, surprissing the loftiest expectations.Your journey with us is nothing short of exceptional.
          </p>
          <div className="flex flex-row gap-5 mt-4">
            <Button label={"Shop now"} iconURL={arrowRight}/>
            <button className="bg-white rounded-full px-7 py-4 flex justify-center items-center gap-2 border font-montserrat text-lg leading-none text-slate-gray border-slate-gray">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={offer}/>
        </div>
    </div>
  )
}

export default SpecialOffers
