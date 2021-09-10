import {
    HomeIcon,
    AcademicCapIcon,
    ShoppingCartIcon,
    DocumentTextIcon
  } from '@heroicons/react/solid'
import {
    TrendingDownIcon,
    TrendingUpIcon
} from '@heroicons/react/outline'

import {
    DotsVerticalIcon
} from '@heroicons/react/outline'

const items = [
        {
            firstname : "Abdoulaye",
            name : "DIALLO",
            date : "20 Mars 20:21",
            icon : <TrendingUpIcon className="h-5 w-5 text-indigo-700"/>,
            amount : "30.000 xof"
        },
       {
            firstname : "Abdoulaye",
            name : "DIALLO",
            date : "20 Mars 20:21",
            icon : <AcademicCapIcon className="h-5 w-5 text-indigo-700"/>,
            amount : "30.000 xof"
       },
       {
          firstname : "Oumar",
          name : "DIALLO",
          date : "20 Mars 20:21",
          icon : <ShoppingCartIcon className="h-5 w-5 text-indigo-700"/>,
          amount : "30.000 xof"
      },
      {
        firstname : "Abdoulaye",
        name : "DIALLO",
        date : "20 Mars 20:21",
        icon : <TrendingUpIcon className="h-5 w-5 text-indigo-700"/>,
        amount : "30.000 xof"
      },
      {
        firstname : "Oumar",
        name : "DIALLO",
        date : "20 Mars 20:21",
        icon : <DocumentTextIcon className="h-5 w-5 text-indigo-700"/>,
        amount : "10.000 xof"
    },
    {
        firstname : "Abdoulaye",
        name : "DIALLO",
        date : "20 Mars 20:21",
        icon : <TrendingDownIcon className="h-5 w-5 text-indigo-700"/>,
        amount : "30.000 xof"
    },
    {
        firstname : "Oumar",
        name : "DIALLO",
        date : "20 Mars 20:21",
        icon : <HomeIcon className="h-5 w-5 text-indigo-700"/>,
        amount : "30.000 xof"
    }

]

function Transactions() {
    return (
        items.map((item) => {
            return (<div className="flex items-center py-2 px-3 space-x-2 text-gray-700 bg-white rounded-xl hover:text-gray-600 justify-between mb-3 hover:bg-indigo-50 transition duration-700">
                        <div className="flex flex-row items-center lg:space-x-4 space-x-1">
                            <div className="flex items-center justify-center border-gray-50 h-14 w-14 bg-gray-50 rounded-lg">
                                {item.icon}
                            </div>
                            <div className="text-sm">
                                <div className="text-gray-800"> {item.firstname+ ' ' +item.name} </div>
                                <div className="text-gray-400">{item.date}</div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <div className="text-green-500 font-bold">{item.amount}</div>
                        </div>

                        <div>
                             <DotsVerticalIcon className="h-5 text-gray-500 cursor-pointer" />
                        </div>
                 </div>)
        }) 
    );
}

export default Transactions;