const ActivityForm = () => {
    return (
    <div className="max-w-[425px] flex flex-col ">
        <div className="flex flex-col items-center">
            <h1>ActivityForm</h1>

            <input className="border" type="text" placeholder="name"/>
            <input className="border" type="text" placeholder="name"/>
            <input className="border" type="text" placeholder="name"/>
            <input className="border" type="text" placeholder="name"/>
            <input className="border" type="text" placeholder="name"/>
        </div>
        <div className="items-center">
            <button className="w-[154px] border shadow-md">confirm</button>
        </div>  
            
    </div>  
    )
}
export default ActivityForm;