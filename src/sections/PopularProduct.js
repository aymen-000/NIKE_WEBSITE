import BuyCard from "../component/BuyCard"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <div  className="flex flex-col space-y-2">
        <h1 className="text-3xl font-montserrat  font-bold">Our <span className="text-2xl font-montserrat text-coral-red">Popular </span>Products </h1>
        <p className=" my-3  w-full md:w-2/3 lg:w-1/3 text-slate-gray "> Experience top--notch quality and style with our sought-after selections.Discover a world of comfort, design,and value</p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((item,index)=>{
            return <BuyCard name={item.name} imgURL={item.imgURL} price={item.price} key={index}/>
          })}
        </div>
    </div>
  )
}

export default PopularProduct
