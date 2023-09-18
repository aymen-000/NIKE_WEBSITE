import { facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"
import Liste from "../component/Liste"
import { footerLinks } from "../constants"
const Footer = () => {
  return (
    <div>
        <div className="flex flex-col  items-start w-2/3 lg:w-1/3 space-y-3">
          <div>
            <img src={footerLogo} height={150} width={150}/>
          </div>
          <div>
            <p className="text-slate-gray font-montserrat">
              Get shoes ready for the new team at your nearest Nike store.Find Yourself perfect Size in Store.Get Rewards.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-5">
            <img src={facebook} width={35} height={35} className="bg-white rounded-full p-2"/>
            <img src={instagram} width={35} height={35} className="bg-white rounded-full p-2"/>
            <img src={twitter} width={35} height={35}  className="bg-white rounded-full p-2"/>
          </div>
        </div> 
        <div className="flex flex-row space-x-6 mt-3">
            {footerLinks.map((item,index)=>{
              return <div className="flex flex-col space-y-2">
                <div className="text-white font-extrabold">{item.title}</div>
                <Liste link={item.links} />
              </div>
            })}
        </div>
        <div className="flex flex-row justify-between mx-auto my-4 pb-1 mb-1">
          <p className="text-slate-gray font-montserrat">Copyrights All rights reserved</p>
          <a className="text-slate-gray font-montserrat" href="/">Terms & Conditions</a>
        </div>
    </div>
  )
}

export default Footer
