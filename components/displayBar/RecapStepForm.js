import {TitleCard} from "../section-title"
import Item from "./Item"

export default function RecapStepForm({title, datas}){

    return(
        <div className="h-full lg:pr-2 bg-white shadow-xl rounded-2xl border-gray-100 p-5 lg:m-2">
            <TitleCard title={title} />
            <div className="w-full flex flex-row">
                <Item datas={datas} />
            </div>
        </div>
    )

}
