import {formatMoney, isEmpty} from "../../configs/tools"
import {useEffect, useContext} from 'react'
import {sendContext} from '../../pages/send'


export default function RecapSideBar({datas}) {

  
    // let context = useContext(sendContext)

    // console.log(context)


    return (
        <div className="h-screen bg-[#f9f6fb] w-full lg:w-1/3 p-5 border-l border-[#f5f0f0]">
            <div className=""> 
                <div className="my-5">
                    <div className="text-2xl text-center text-purple-900 font-bold">
                        Récapitulatifs du transfert
                    </div>
                </div>
                <div className="py-5">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Pays de destination</div> 
                            <div className="text-3xl font-semibold capitalize text-gray-400">{isEmpty(datas?.currencyIn) ? "Néant" : datas?.currencyIn}</div>
                        </div>
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Montant du transfert</div>    
                            <div className="text-3xl font-semibold text-green-500">
                                { !isEmpty(datas?.amount) ? `${formatMoney(datas?.amount)} xof` : 0 } 
                              
                            </div> 
                        </div> 
                    </div>
                </div>

                {/* <div className="border border-gray-200 border-opacity-25"></div> */}
                
                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Frais</div> 
                            <div className="text-3xl font-semibold text-gray-400">
                            { !isEmpty(datas?.amount) ? `${formatMoney(5000)} xof` : 0 }
                            </div>
                        </div>      
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Taux de change</div>    
                            <div className="text-3xl font-semibold text-gray-400">
                                { !isEmpty(datas?.amount) ? `${formatMoney(655)}` : 0 }
                            </div> 
                        </div> 
                    </div>   
                </div>     

                <div className="py-5">
                    <div className="w-full flex flex-row items-center ">
                        <div className="w-full flex items-center justify-between border-2 border-purple-500 rounded-lg p-4 ">
                            <div className="text-2xl font-medium text-purple-900">Total :</div> 
                            <div className="text-3xl font-bold text-purple-900">
                                { !isEmpty(datas?.amount) ? `${formatMoney(1000000)} xof` : 0 }
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="my-5">
                <div className="text-2xl text-center text-purple-900 font-bold">
                    Mes dernières envois
                </div>
            </div>
           
        </div>
    );
}


