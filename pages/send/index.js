import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect, createContext} from 'react'
import {setConfig} from '../../redux/actions/settings'
import RecapSideBar from "../../components/displayBar/RecapSideBar"


export const sendContext = createContext("")

    export default function send() {

        const dispatch = useDispatch()
        const [next, setNext] = useState(1)

        const goToNextStep = () => {
            setNext(current => current + 1)
        }

        //const [val, setVal] = useState(null)

        useEffect(() => {
            dispatch(setConfig())
        }, [dispatch])


        const datas = useSelector(
            state => state.formStepSend.step1
        )

       // let datas = {}

        const  handleChangeWatchValues = (currency, amount) =>{
            console.log(currency, amount)
            /*setVal({
                ...val,
                currency : currency,
                amount : amount
            })*/
        }

       // console.log(val?.currency, val?.amount)

        return (
            <div className="w-full">
                <div className="flex h-screen">
                    <div className="lg:w-2/3 max-w-3xl my-24 px-4 py-5 mx-auto">
                        <div className=" ">
                           <div className="mb-7 text-center">
                               <div className="text-xl font-extrabold text-purple-900">Envoi</div>
                               <div className="text-2xl font-thin text-gray-400">Envoyer de l'argent très sur</div>
                           </div>
                            <div className="mb-3 flex flex-col md:flex-row md:justify-between">
                                <div>
                                    <div className="text-base font-extrabold text-purple-400 mb-1">
                                        {` Etape ${next}/4 `}
                                    </div>
                                    <div className="text-2xl font-bold text-gray-500">
                                        {
                                            next == 1 ?
                                            "Transfert" :
                                            next == 2 ?
                                            "Expéditeur" :
                                            next == 3 ?
                                            "Destinataire" :
                                            next == 4 ?
                                            "Recapitulatifs" :
                                            ""
                                        }
                                    </div>
                                </div>
                                <div className="flex items-center md:w-64">
                                    <div className="w-full bg-gray-200 rounded-full mr-2">
                                        <div className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white" style={{width: parseInt(next / 4 * 100) + '%'}}/>
                                    </div>
                                    <div className="text-xs w-10 text-gray-600">{parseInt(next / 4 * 100)}%</div>
                                </div>
                            </div>

                            {next === 1 && <>
                                <Step1
                                    goToNextStep={goToNextStep}
                                    handleChangeWatchValues = {handleChangeWatchValues}
                                />
                            </>
                            }
                            
                            {next === 2 && <>
                                <Step2
                                    index={2}
                                    setNext = {setNext}
                                    next={next}
                                    goToNextStep={goToNextStep}
                                />
                            </>}
                            
                            {next === 3 && <>
                                <Step3
                                    index={3}
                                    setNext = {setNext}
                                    next={next}
                                    goToNextStep={goToNextStep}
                                />
                            </>}

                            {next === 4 && <>
                                <Step4
                                    index={4}
                                    setNext = {setNext}
                                    next={next}
                                    goToNextStep={goToNextStep}
                                />
                            </>}
                            
                            
                            
                        </div>
                    </div>

                   {/* <sendContext.Provider value={val}>*/}
                        <RecapSideBar datas={datas} />
                   {/* </sendContext.Provider>*/}

                </div>

            

            </div>


        );
    }
