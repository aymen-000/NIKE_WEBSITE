import { star } from "../assets/icons"

function BuyCard({name,price,imgURL}) {
    var rate = 4.5
    var strRate = "(" + rate +")"
  return (
    <div className="container flex flex-col w-full space-y-2 flex-wrap mt-3 max-sm:w-full">
        <div>
            <img src={imgURL} height={280} width={280} alt='NIKE'/>
        </div>
        <div className="flex flex-row gap-1">
            <img src={star} alt="STAR" width={15} height={15}></img>
            <p className="text-slate-gray font-montserrat">{strRate}</p>
        </div>
        <p className="font-2xl">{name}</p>
        <p className="text-coral-red font-montserrat">{price}</p>
    </div>
  )
}

export default BuyCard