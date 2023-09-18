
import { services } from "../constants"
import ServicesCom from "../component/ServicesCom"
const Services = () => {
  return (
    <div className="mx-auto px-2 grid gap-10 lg:grid-cols-3 sm:grid-cols-2 max-sm:flex max-sm:flex-col">
        {services.map((item)=>{
          return <ServicesCom imgURL={item.imgURL} label={item.label} subtext={item.subtext} key={item.label}/>
        })}
    </div>
  )
}

export default Services
