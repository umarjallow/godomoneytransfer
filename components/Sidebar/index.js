
import {UserIcon,LogoutIcon} from '@heroicons/react/outline'
import Navigation from '../Navigation'
import Link from 'next/link';
import items from "../items"



function SideBar () {

    return(
        <div className="h-screen flex flex-col w-80 h-full bg-[#fdfdfd] overflow-auto md:overflow-scroll border-r border-[#f5f0f0]">

            <div className=" bg-purple-900 p-4 m-5 rounded-xl">
                <div className="text-white flex flex-col justify-center items-center">
                       <div className="text-2xl font-bold mb-2">
                           9 000 000 <small className="text-xs"> xof</small>
                        </div> 
                       <div className="text-base font-normal">Solde actuel</div>
                </div> 
            </div>

            <nav className="mt-12 text-base font-normal py-4 px-4">
               {/*  <div className=" text-white uppercase font-normal pl-10 mb-5 text-sm">navigation</div> */}
                    <ul className="">
                        <Navigation items={items} />
                    </ul>
            </nav>

            <div className="absolute bottom-0 my-5 mx-5 group bg-gray-100 rounded-xl">
                <div className="flex items-center py-2 px-3 space-x-2 text-gray-700 hover:text-gray-600 ">
                    <div className="flex items-center justify-center mx-auto border-gray-50 h-14 w-14 bg-gray-50 rounded-lg shadow-md">
                        <UserIcon className="h-5 text-indigo-700" /> 
                    </div>
                    <div className="text-sm">
                        <div className="text-gray-600 font-bold">Oumar DIALLO</div>
                        <div className="text-gray-400">Admin</div>
                    </div>
                    <div>
                        <Link href="/">
                            <LogoutIcon className="h-5 text-indigo-700" /> 
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default SideBar