function Liste({link}) {
  function component(link){
    return link.map((item)=>{return <a href={item.linnk} className="text-slate-gray font-bold no-underline hover:underline cursor-pointer text-sm break-keep">{item.name}</a>})
  }
  return (
    <div className="flex flex-col space-y-1">
        {component(link)}
    </div>
  )
}

export default Liste