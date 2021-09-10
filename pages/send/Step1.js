import { useForm, Controller } from 'react-hook-form';
import Button from '../../components/Elements/Button';
import {customSelectSingle} from '../../components/utils/selectCustoms'
import {useDispatch, useSelector} from 'react-redux'
import {useState, useEffect, createContext} from 'react'
import Select from 'react-select'
import {saveFirstStep} from '../../redux/actions/send'


//export const sendContext = createContext()

function Step1 ({goToNextStep, handleChangeWatchValues}) {

        const dispatch = useDispatch()


        const selectOptions = 
            [
                { value: "france", label: "France" },
                { value: "etats-unis", label: "Etats-Unis" },
                { value: "allemagne", label: "Allemagne" }
            ]
        const datasStep1 = useSelector(
            state => state.formStepSend.step1
        )    


        const { register, control, watch, handleSubmit, setValue, formState: { errors } } = useForm();
        const watchAmount = watch('amount')
        const watchCurrency = watch('currencyIn')
        const onSubmit = (data) => {
            const values = {
                ...data,
                currencyIn : data.currencyIn.value,
                amount : data.amount,
            }
            dispatch(saveFirstStep(values))
            goToNextStep()
        }

        handleChangeWatchValues(watchCurrency?.value, watchAmount)

        //console.log(watchCurrency, watchAmount)

        useEffect(() => {
                setValue('amount', datasStep1?.amount)
                setValue('currencyIn', datasStep1?.currencyIn)
        }, [setValue])


    return (
            <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-element mb-6">
                    <label htmlFor="currencyIn" className="form-label mb-1 text-lg text-gray-400">Pays destinaire</label>
                    <Controller
                        id="currencyIn"
                        name="currencyIn"
                        render={({ field }) => (
                        <Select
                            styles={customSelectSingle}
                            {...field}
                            options={selectOptions}
                            isClearable
                            placeholder="Choisir la devise"
                        />
                        )}
                        control={control}
                        rules={{ required: true }}
                    />
                    <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.currencyIn?.type === 'required' && "La devise est requis"} </div>
                </div>  

                <div className="form-element mb-6">
                    <label htmlFor="amount" className="form-label mb-1 text-lg text-gray-400">Montant</label>
                    <input 
                        name="amount"
                        id="amount"
                        type="number" 
                        className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                        {...register("amount", {required: true, maxLength: 80})}
                    />
                    <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.amount?.type === 'required' && "Le montant est requis"} </div>
                </div>

                <Button className="flex items-center justify-center space-x-2 w-full bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50" >
                      Suivant
                </Button>
        </form>
    );
}

export default Step1;