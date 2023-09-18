function ServicesCom({imgURL,label,subtext}) {
  return (
    <div className="flex flex-col space-y-2 shadow-2xl  container bg-white rounded-sm p-7 py-10">
        <div>
            <img src={imgURL} width={30} height={30} className="bg-orange-600 rounded-full p-1"/>
        </div>
        <h1>{label}</h1>
        <p className="text-xl text-slate-700">{subtext}</p>
    </div>
  )
}

export default ServicesCom