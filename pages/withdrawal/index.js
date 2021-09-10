import {useState} from "react"
import { useForm, Controller } from 'react-hook-form';
import OTPInput from "otp-input-react";
import { isEmpty } from "../../configs/tools";
import RecapWithDrawal from "../../components/displayBar/RecapWithDrawal"
import Button from '../../components/Elements/Button';
import {customSelectSingle} from '../../components/utils/selectCustoms'
import Select from 'react-select'
import DatePicker from "react-datepicker"

function withdrawal() {

    const [OTP, setOTP] = useState("");
    let [valid, setValid] = useState(false)

    const handleClickOtp = () => {
        let otpIntoArray = [...OTP]
        if (isEmpty(OTP) || otpIntoArray.length != 6){
               alert("Le code saisi n'est pas valide")
               return; 
        }
        console.log("Let's GO", otpIntoArray)
    }

    const { register, control,  handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
            console.log(data)
    }

    const selectOptions = 
    [
        { value: "cin", label: "Carte d'identité natinale" },
        { value: "passeport", label: "passeport" }
    ]

  return (
    <div className="w-full">
        <div className="flex h-screen">
                <div className="flex flex-row items-center lg:w-2/3 justify-center max-w-3xl  mx-auto">
                    { valid && (<div className="w-full m-3">
                        <div className="w-full bg-purple-900 shadow-md rounded-lg p-5 my-4 flex justify-between">
                            <span className="text-3xl text-purple-100">Montant à retirer : </span>
                            <span className="text-3xl tracking-wider text-purple-100">
                                    999000000 xof
                             </span>
                        </div>

                        <div className="py-5">
                            <div className="flex flex-row items-center">
                                <div className="text-left lg:w-1/2 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        Prénom :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        Abdoulaye Djibril
                                    </div>
                                </div>
                                <div className="text-left lg:w-1/2 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        Nom :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        diallo diouf
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="py-5">
                            <div className="flex flex-row items-center">
                                <div className="text-left lg:w-1/2 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        N. de Téléphone :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        +33 44 56 34 34
                                    </div>
                                </div>
                                <div className="text-left lg:w-1/2 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        Adresse :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        thiaroye sur mer quatier ibra ndao, Rue 23 X 12
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-5">
                            <div className="flex flex-row items-center">
                                <div className="text-left lg:w-1/3 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        Pays du bénéficiaire :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        Sénégal
                                    </div>
                                </div>
                                <div className="text-left lg:w-1/3 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        Etat (Région) :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        Dakar
                                    </div>
                                </div>
                                <div className="text-left lg:w-1/3 sm:w-1/2">
                                    <div className="text-purple-900 mb-2 text-lg font-thin">
                                        Pays emetteur :
                                    </div>
                                    <div className="text-md font-semibold capitalize text-purple-900">
                                        Sénégal
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                                <div class="form-element mb-6 grid grid-cols-1">
                                    <label className="form-label mb-1 text-lg text-gray-400">Type de pièce</label>
                                    <Controller
                                        name="typenci"
                                        id="typenci"
                                        render={({field}) => (
                                            <Select
                                                styles={customSelectSingle}
                                                {...field}
                                                options={selectOptions}
                                                isClearable
                                                placeholder="Choisir le type"
                                            />
                                        )}
                                        control={control}
                                        rules={{required: true}}
                                        defaultValue=""
                                    />
                                    <div
                                        className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.typenci?.type === 'required' && "La devise est requis"} </div>
                                </div>

                                <div class="form-element mb-6 grid grid-cols-1">
                                    <label htmlFor="nci" className="form-label mb-1 text-lg text-gray-400">Numéro de
                                        pièce</label>
                                    <input
                                        name="nci"
                                        id="nci"
                                        type="text"
                                        className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `}

                                        {...register("nci", {required: true})}
                                    />
                                    <div
                                        className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.nci?.type === 'required' && "Le montant est requis"} </div>
                                </div>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                                <div class="form-element mb-6 grid grid-cols-1">
                                    <label className="form-label mb-1 text-lg text-gray-400">Date de délivrance</label>
                                    <Controller
                                        name="datedeliv"
                                        id="datedeliv"
                                        render={({field}) => (
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                                selected={field.value}
                                                placeholderText="Selectionner la date"
                                                shouldCloseOnSelect
                                                onChange={(date) => field.onChange(date)}
                                            />
                                        )}
                                        control={control}
                                        rules={{required: true}}
                                    />
                                    <div
                                        className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.datedeliv?.type === 'required' && "La date est requise"} </div>
                                </div>

                                <div class="form-element mb-6 grid grid-cols-1">
                                    <label htmlFor="datedeliv" className="form-label mb-1 text-lg text-gray-400">Date
                                        d'expiration</label>
                                    <Controller
                                        name="dateexpir"
                                        id="dateexpir"
                                        render={({field}) => (
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                                selected={field.value}
                                                placeholderText="Selectionner la date"
                                                shouldCloseOnSelect
                                                onChange={(date) => field.onChange(date)}
                                            />
                                        )}
                                        control={control}
                                        rules={{required: true}}
                                    />
                                    <div
                                        className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.dateexpir?.type === 'required' && "La date est requise"} </div>

                                </div>

                            </div>

                            <Button
                                buttonClass="flex items-center justify-center space-x-2 w-full bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50"
                            >
                                Valider
                            </Button>
                        </form>

                    </div>)}


                     <div className="bg-white shadow-xl rounded-lg border-gray-100 p-5">
                        <label className="form-label mb-1 text-lg text-gray-400">Saisir le code :</label>
                        <div className="">
                            <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={6}
                                otpType="alphanumeric"
                                disabled={false}
                                inputStyles={{fontSize : 25, padding : 10, border : '2px solid #e4e7eb', borderRadius : '4px', width : 57, height : 57, marginRight : 10}}
                                style={{margin : "10px 0"}}
                            />
                        </div>
                        <Button 
                            className="flex items-center hover:shadow-2xl focus:outline-none  justify-center w-full space-x-2 bg-purple-900 text-white p-5 my-5 rounded-md font-bold text-lg disabled:opacity-50"
                            loading={false}
                            onClick={()=> handleClickOtp()}  
                        >
                            Vérifier
                        </Button>
                    </div>


                </div> 

            <RecapWithDrawal />  
        </div>
      </div>
      
      
  );
}
export default withdrawal;

