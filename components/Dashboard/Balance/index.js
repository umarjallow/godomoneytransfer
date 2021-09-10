import { 
    TrendingDownIcon,
    TrendingUpIcon
  } from '@heroicons/react/outline'


function Balance() {
    return (
        <div className="flex flex-col space-y-2 lg:space-y-3">
                <div className="flex flex-row justify-between">
                <div>
                    {/* <div className="font-semibold text-gray-400">solde </div> */}
                    <div className="text-godo-dark font-bold text-2xl">3 111 233 XOF</div>
                    {/* <div className="text-base text-gray-500 font-normal">Mardi le 21 Mai 2021</div> */}
                </div>
                <div>
                    <div>Aujourd'hui</div>
                </div>
                </div>

                <div className="flex justify-between">

                <div className="flex flex-row justify-center lg:space-x-3">
                    <div className="flex flex-row items-center justify-center border-gray-50 h-12 w-12 bg-green-50 rounded-full">
                        <div className="flex flex-row items-center justify-center">
                            <TrendingUpIcon className="h-5 text-green-700" />
                        </div>
                    </div>
                    <div className="text-sm">
                        <div className="text-gray-800">3 000 000 XOF</div>
                        <div className="text-gray-400">Entrées</div>
                    </div>
                </div>

                <div className="flex flex-row justify-center lg:space-x-3">
                    <div className="flex flex-row items-center justify-center border-gray-50 h-12 w-12 bg-red-50 rounded-full">
                        <div className="flex flex-row items-center justify-center">
                            <TrendingDownIcon className="h-5 text-red-700" />
                        </div>
                    </div>
                    <div className="text-sm">
                        <div className="text-gray-800">3 000 000 XOF</div>
                        <div className="text-gray-400">Sorties</div>
                    </div>
                </div>

                </div>
                                
         </div>
    );
}

export default Balance;