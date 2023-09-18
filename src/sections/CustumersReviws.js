import { reviews } from "../constants"
import CustumerCard from "../component/CustumerCard"
const CustumersReviws = () => {
  return (
    <div className="flex flex-col justify-center space-y-3">
        <h1 className="text-3xl font-extrabold text-black">What Our <span className="text-coral-red">Custumers</span> Say?</h1>
        <p className="text-slate-gray font-montserrat">Hear genius stories from our satisidfied customers about their exceptional experiences with us</p>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-14 mt-5 space-y-5">
          {reviews.map((item)=>{
            return <CustumerCard name={item.customerName} rating={item.rating} photo={item.imgURL} view={item.feedback}/>
          })}
        </div>
    </div>
  )
}

export default CustumersReviws
