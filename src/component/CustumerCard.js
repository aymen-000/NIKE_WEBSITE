import { star } from "../assets/icons"
function CustumerCard({photo , view , name,rating}) {
    const rate = "(" + rating + ")"
  return (
    <div className="flex flex-col gap-2 lg:w-1/3 w-2/3">
        <img src={photo} height={80} width={80} className="rounded-full flex self-center"/>
        <p className="text-slate-gray font-montserrat break-all">{view}</p>
        <div className="flex flex-row gap-1">
            <img src={star}/>
            <p className="text-slate-gray">{rate}</p>
        </div>
        <p className="text-2xl font-montserrat text-black font-black">{name}</p>
    </div>
  )
}

export default CustumerCard