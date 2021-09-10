import { useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Button from '../../components/Elements/Button';
import {TitleCard} from '../../components/section-title'
import Modal from "../../components/Modal"




function Step4({setNext}) {

    const {step1, step2, step3} = useSelector(
        state => state.formStepSend
    )

    const goToPreviousStep = () => {
        setNext( next => next - 1)
     }

    const dispatch = useDispatch()

    let [isOpen, setIsOpen] = useState(true)

    const onSubmitFinal = (data) => {
            () => setIsOpen(!isOpen)
        /* const values = {
            additional : {...data}, 
            reveiver : {...step3},
            sender : {...step2},
            transfer : {...step1}
        }
        console.log(values) */
    }


    return (
        <>
        
        <div className="mt-6 w-full">
{/* 
                     <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Test">
                         <p>
                             Test Modal
                         </p>
                    </Modal>
                     */}
                    <div className="h-full lg:pr-2 bg-white shadow-lg rounded-md border-gray-50 p-5 lg:m-2">
                            <TitleCard title="Transfert" />
                            <div className="w-full flex flex-row">
                                
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">Devise :</div> 
                                    <div className="text-sm text-purple-900">{step1?.currencyIn || ''}</div>
                                </div>

                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">Montant à envoyer :</div> 
                                    <div className="text-sm text-purple-900">{step1?.amount  || ''}</div>
                                </div>
                            </div>
                    </div>
                    
                    
                    <div className="h-full lg:pr-2 bg-white shadow-lg rounded-md border-gray-50 p-5 lg:m-2">
                            <TitleCard title="Expéditeur" />
                            <div className="w-full flex flex-row">
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                   <div className="h-3 mb-1 text-base font-medium text-gray-400">Prénom : </div> 
                                    <div className="text-sm text-purple-900">{step2?.firstname || ''}</div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                   <div className="h-3 mb-1 text-base font-medium text-gray-400">Nom : </div> 
                                   <div className="text-sm text-purple-900">{step2?.lastname  || ''}</div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-3 mb-1 text-base font-medium text-gray-400"> Adresse :</div> 
                                    <div className="text-sm text-purple-900">{step2?.address || ''}</div>
                                </div>  
                            </div>  
                            <div className="w-full flex flex-row">    
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400"> N. Téléphone :</div> 
                                    <div className="text-sm text-purple-900">{step2?.phonenumber || ''}</div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">Type de pièce :</div> 
                                    <div className="text-sm text-purple-900">{step2?.typenci || ''}</div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">N. de pièce :</div> 
                                    <div className="text-sm text-purple-900">{step2?.nci || ''}</div>
                                </div>
                            </div>    
                            <div className="w-full flex flex-row"> 
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">Raison du transfert :</div> 
                                    <div className="text-sm text-purple-900">{step2?.reasonTransfer || ''}</div>
                                </div>
                            </div>  
                    </div>
                    
                    <div className="h-full lg:pr-2 bg-white shadow-lg rounded-md border-gray-50 p-5 lg:m-2">
                            <TitleCard title="Destinataire" />
                            <div className="w-full flex flex-row"> 
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">Prénom : </div> 
                                    <div className="text-sm text-purple-900">{step3?.firstname || ''}</div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400">Nom : </div> 
                                    <div className="text-sm text-purple-900">{step3?.lastname  || ''}</div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400"> Adresse :</div> 
                                    <div className="text-sm text-purple-900">{step3?.address || ''}</div>
                                </div>    
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="lg:w-1/3 sm:w-1/2 p-1">
                                    <div className="h-4 mb-1 text-base font-medium text-gray-400"> N. Téléphone :</div> 
                                    <div className="text-sm text-purple-900">{step3?.phonenumber || ''}</div>
                                </div>
                            </div> 
                    </div>
                    

                    <div className="flex md:flex-row flex-col md:justify-between">

                        <Button
                            className="flex items-center justify-center border-2 border-purple-500 hover:bg-purple-200 space-x-2  w-auto bg-white text-purple-600 p-5 rounded-md font-bold text-lg disabled:opacity-50"
                            type="button"
                            loading={false}  
                            onClick={() => goToPreviousStep()}
                        >Précédent
                        </Button>

                        <Button
                            className="flex items-center justify-center space-x-2 w-auto bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50"
                            loading={false}  
                            onClick={() => onSubmitFinal()}
                        >
                            Valider
                        </Button>

                    </div>
            
        </div>
        </>
    );
}

export default Step4;