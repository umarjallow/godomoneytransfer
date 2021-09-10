import {formatMoney, isEmpty} from "../../configs/tools"
import {useEffect, useContext} from 'react'


export default function RecapWithDrawal() {

  
   


    return (
        <div className="h-screen bg-gray-50 w-full lg:w-1/3 p-2 bg-[#f9f6fb] border-l border-[#f5f0f0">
            <div className=""> 
                <div className="my-5">
                    <div className="text-2xl text-center text-purple-900 font-bold">
                        Informations de l'expéditeur
                    </div>
                </div>
                <div className="py-5">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Prénom</div> 
                            <div className="text-md font-semibold capitalize text-purple-900">
                                oumar
                            </div>
                        </div>
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Nom</div>    
                            <div className="text-md font-semibold text-purple-900 capitalize">
                                diallo
                            </div> 
                        </div> 
                    </div>
                </div>

                {/* <div className="border border-gray-200 border-opacity-25"></div> */}
                
                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Adresse</div> 
                            <div className="text-md font-semibold capitalize text-purple-900">
                                    dakar
                            </div>
                        </div>      
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">N. Téléphone</div>    
                            <div className="text-md font-semibold capitalize text-purple-900">
                                  +221 77 456 12 45
                            </div> 
                        </div> 
                    </div>   
                </div>     

                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Type de pièce</div> 
                            <div className="text-md font-semibold capitalize text-purple-900">
                                    Carte d'identité nationale
                            </div>
                        </div>      
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">N. de pièce</div>    
                            <div className="text-md font-semibold capitalize text-purple-900">
                                  1231233412323
                            </div> 
                        </div> 
                    </div>   
                </div>     

                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Date de délivrance</div> 
                            <div className="text-md font-semibold capitalize text-purple-900">
                                    25/05/2001
                            </div>
                        </div>      
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Date d'expiration</div>    
                            <div className="text-md font-semibold capitalize text-purple-900">
                                  24/01/2021
                            </div> 
                        </div> 
                    </div>   
                </div> 

                <div className="py-3">
                    <div className="w-full flex flex-row items-center">
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-xl font-thin">Raison du transfert</div> 
                            <div className="text-md font-semibold capitalize text-purple-900">
                                    Pour habitation
                            </div>
                        </div>      
                        
                        <div className="text-center lg:w-1/2 sm:w-1/2">
                            <div className="text-purple-900 mb-2 text-lg font-thin">Date d'expiration</div>    
                            <div className="text-md font-semibold capitalize text-purple-900">
                                  24/01/2021
                            </div> 
                        </div> 
                    </div>   
                </div>     

               {/*  <div className="py-5">
                    <div className="w-full flex flex-row items-center ">
                        <div className="w-full flex items-center justify-between border-2 border-purple-500 rounded-lg p-4 ">
                            <div className="text-2xl font-medium text-purple-900">Montant envoyé :</div> 
                            <div className="text-3xl font-bold text-purple-900">
                                  100 000 xof
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>


            <div className="my-5">
                <div className="text-2xl text-center text-purple-900 font-bold">
                    Mes dernières retraits
                </div>
            </div>
           
        </div>
    );
}


