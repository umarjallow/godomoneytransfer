import { useForm, Controller } from 'react-hook-form';
import Button from '../../components/Elements/Button';
import {customSelectSingle} from '../../components/utils/selectCustoms'
import {useDispatch, useSelector} from 'react-redux'
import Select from 'react-select'
import {useEffect, useState} from 'react'
import {saveSecondStep} from '../../redux/actions/send'
import DatePicker from "react-datepicker"

function Step2({index, setNext, next,  goToNextStep}) {

const selectOptions = 
    [
        { value: "cin", label: "Carte d'identité natinale" },
        { value: "passeport", label: "passeport" }
    ]

    const goToPreviousStep = () => {
       setNext( next => next - 1)
    }

    const dispatch = useDispatch()
    const datasStep2 = useSelector(
        state => state.formStepSend.step2
    )

    const { register, control,  handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const values = {
            ...data,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            phonenumber : data.phonenumber,
            typenci : data.typenci.value,
            datedeliv : data.datedeliv.value,
            dateexpir : data.dateexpir.value,
            reasonTransfer : data.reasonTransfer
        }
        dispatch(saveSecondStep(values))
        goToNextStep()
    }

    const {dateexpir, datedeliv} =  watch([dateexpir, datedeliv])

    console.log(dateexpir, datedeliv)

    useEffect(() => {
            setValue('firstname', datasStep2?.firstname)
            setValue('lastname', datasStep2?.lastname)
            setValue('address', datasStep2?.address)
            setValue('phonenumber', datasStep2?.phonenumber)
            setValue('typenci', datasStep2?.typenci)
            setValue('datedeliv', datasStep2?.datedeliv)
            setValue('dateexpir', datasStep2?.dateexpir)
            setValue('nci', datasStep2?.nci)
            setValue('reasonTransfer', datasStep2?.reasonTransfer)
    }, [setValue])

    return (
             <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                        <div class="form-element mb-6 grid grid-cols-1">
                            <label htmlFor="firstname" className="form-label mb-1 text-lg text-gray-400">Prénom</label>
                            <input 
                                name="firstname"
                                id="firstname"
                                type="text" 
                                className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                                
                                {...register("firstname", {required: true, maxLength: 80})}
                            />
                            <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.firstname?.type === 'required' && "Le montant est requis"} </div>
                        </div>

                        <div class="form-element mb-6 grid grid-cols-1">
                            <label htmlFor="lastname" className="form-label mb-1 text-lg text-gray-400">Nom</label>
                            <input 
                                name="lastname"
                                id="lastname"
                                type="text" 
                                className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                                
                                {...register("lastname", {required: true, maxLength: 80})}
                            />
                            <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.lastname?.type === 'required' && "Le montant est requis"} </div>
                        </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                    <div class="form-element mb-6 grid grid-cols-1">
                        <label htmlFor="address" className="form-label mb-1 text-lg text-gray-400">Adresse</label>
                        <input 
                            id="address"
                            name="address"
                            type="text" 
                            className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                            
                            {...register("address", {required: true, maxLength: 80})}
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.address?.type === 'required' && "Le montant est requis"} </div>
                    </div>

                    <div class="form-element mb-6 grid grid-cols-1">
                        <label htmlFor="phonenumber" className="form-label mb-1 text-lg text-gray-400">Numéro de téléphone</label>
                        <input 
                            id="phonenumber"
                            name="phonenumber"
                            type="text" 
                            className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                            
                            {...register("phonenumber", {required: true})}
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.phonenumber?.type === 'required' && "Le montant est requis"} </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                    <div className="form-element mb-6 grid grid-cols-1">
                        <label className="form-label mb-1 text-lg text-gray-400">Type de pièce</label>
                        <Controller
                            name="typenci"
                            id="typenci"
                            render={({ field }) => (
                            <Select
                                styles={customSelectSingle}
                                {...field}
                                options={selectOptions}
                                isClearable
                                placeholder="Choisir le type"
                            />
                            )}
                            control={control}
                            rules={{ required: true }}
                            defaultValue=""
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.typenci?.type === 'required' && "La devise est requis"} </div>
                    </div>  

                    <div className="form-element mb-6 grid grid-cols-1">
                        <label htmlFor="nci" className="form-label mb-1 text-lg text-gray-400">Numéro de pièce</label>
                        <input 
                            name="nci"
                            id="nci"
                            type="text" 
                            className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                            
                            {...register("nci", {required: true})}
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.nci?.type === 'required' && "Le montant est requis"} </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                    <div className="form-element mb-6 grid grid-cols-1">
                        <label className="form-label mb-1 text-lg text-gray-400">Date de délivrance</label>
                        <Controller
                            name="datedeliv"
                            id="datedeliv"
                            render={({ field }) => (
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
                            rules={{ required: true }}
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.datedeliv?.type === 'required' && "La date est requise"} </div>
                    </div>  

                    <div className="form-element mb-6 grid grid-cols-1">
                        <label htmlFor="datedeliv" className="form-label mb-1 text-lg text-gray-400">Date d'expiration</label>
                        <Controller
                            name="dateexpir"
                            id="dateexpir"
                            render={({ field }) => (
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
                            rules={{ required: true }}
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.dateexpir?.type === 'required' && "La date est requise"} </div>
                    </div>  

                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-8">
                        <div className="form-element mb-6 grid grid-cols-1">
                                <label htmlFor="reasonTransfer" className="form-label mb-1 text-lg text-gray-400">Raison du transfert</label>
                                <textarea
                                    id="reasonTransfer"
                                    name="reasonTransfer"
                                    type="text"
                                    className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `}
                                    {...register("reasonTransfer", {required: true, maxLength: 80})}
                                />
                                <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.reasonTransfer?.type === 'required' && "Le montant est requis"} </div>
                        </div>
                    </div>    

                <div className="flex md:flex-row flex-col md:justify-between">

                    <Button
                        className="flex items-center justify-center border-2 border-purple-500 hover:bg-purple-200 space-x-2  w-auto bg-white text-purple-600 p-5 rounded-md font-bold text-lg disabled:opacity-50"
                        type="button"
                        onClick={() => goToPreviousStep()}
                    >
                        Précédent
                    </Button>

                    <Button  className="flex items-center justify-center space-x-2 w-auto bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50">
                        Suivant
                    </Button>
                </div>

            </form>
    );
}

export default Step2;