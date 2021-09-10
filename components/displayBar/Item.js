export const Item = ({label}, {item}) => {
    console.log(label, item)
    return(
        <div className="lg:w-1/3 sm:w-1/2 p-1">
            <div className="h-4 mb-1 text-lg font-bold">{label}:</div> 
            <div className="tracking-widest">{item}</div>
        </div>
    )
}