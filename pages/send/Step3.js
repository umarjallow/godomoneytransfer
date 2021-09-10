import { useForm, Controller } from 'react-hook-form';
import Button from '../../components/Elements/Button';
import {customSelectSingle} from '../../components/utils/selectCustoms'
import Select from 'react-select'
import {saveThirdStep} from '../../redux/actions/send'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
function Step3({index, setNext, goToNextStep}) {


    const goToPreviousStep = () => {
        setNext( next => next - 1)
     }
 

    const selectOptions = 
        [
            { value: "cin", label: "Carte d'identité natinale" },
            { value: "passeport", label: "passeport" }
        ]
    const dispatch = useDispatch()
    const { register, control,  handleSubmit,setValue, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const values = {
            ...data,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            phonenumber : data.phonenumber
        }
        dispatch(saveThirdStep(values))
        goToNextStep()
    }
    console.log(errors);

    const datasStep3 = useSelector(
        state => state.formStepSend.step3
    )

    useEffect(() => {
        setValue('firstname', datasStep3?.firstname)
        setValue('lastname', datasStep3?.lastname)
        setValue('address', datasStep3?.address)
        setValue('phonenumber', datasStep3?.phonenumber)
    } , [setValue])

    return (
        <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                        <div className="form-element mb-6 grid grid-cols-1">
                            <label htmlFor="firstname" className="form-label mb-1 text-lg text-gray-400">Prénom</label>
                            <input 
                                id="firstname"
                                name="firstname"
                                type="text" 
                                className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                                {...register("firstname", {required: true, maxLength: 80})}
                            />
                            <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.firstname?.type === 'required' && "Le montant est requis"} </div>
                        </div>

                        <div className="form-element mb-6 grid grid-cols-1">
                            <label htmlFor="lastname" className="form-label mb-1 text-lg text-gray-400">Nom</label>
                            <input
                                id="lastname" 
                                name="lastname"
                                type="text" 
                                className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                                
                                {...register("lastname", {required: true, maxLength: 80})}
                            />
                            <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.lastname?.type === 'required' && "Le montant est requis"} </div>
                        </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                    <div className="form-element mb-6 grid grid-cols-1">
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

                    <div className="form-element mb-6 grid grid-cols-1">
                        <label htmlFor="phonenumber" className="form-label mb-1 text-lg text-gray-400">Numéro de téléphone</label>
                        <input 
                            name="phonenumber"
                            id="phonenumber"
                            type="text" 
                            className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                            
                            {...register("phonenumber", {required: true})}
                        />
                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.phonenumber?.type === 'required' && "Le montant est requis"} </div>
                    </div>

                </div>

                

                <div className="flex md:flex-row flex-col md:justify-between">
                    <Button
                        className="flex items-center justify-center border-2 border-purple-500 hover:bg-purple-200 space-x-2  w-auto bg-white text-purple-600 p-5 rounded-md font-bold text-lg disabled:opacity-50"
                        type="button"
                        onClick={() => goToPreviousStep()}
                    >Précèdent</Button>

                    <Button
                        className="flex items-center justify-center space-x-2 w-auto bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50"
                    >
                        Suivant
                    </Button>
                    
                </div>
        </form>
    );
}

export default Step3;