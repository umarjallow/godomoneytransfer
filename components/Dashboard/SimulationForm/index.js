import { useForm, Controller } from 'react-hook-form';
import Button from '../../Elements/Button';
import {customSelectSingle} from '../../utils/selectCustoms'

import Select from 'react-select'


function SimulationForm() {


    const selectOptions = 
        [
            { value: "euro", label: "Euro" },
            { value: "dollar", label: "Dollar" },
            { value: "fcfa", label: "Fcfa" }
        ]

    const { register, control,  handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const values = {
            ...data,
            currencyIn : data.currencyIn.value,
            currencyOut : data.currencyOut.value,
        }
        console.log(values)
    }
    console.log(errors);


    return (
        <>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>

                <div class="form-element mb-6">
                    <div className="form-label mb-1 text-lg text-gray-400">Devise entrée</div>
                    <Controller
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
                        defaultValue=""
                    />
                    <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.currencyIn?.type === 'required' && "La devise est requis"} </div>
                </div>

                <div class="form-element mb-6">
                    <label htmlFor="currencyOut" className="form-label mb-1 text-lg text-gray-400">Devise retour</label>
                    <Controller
                        id="currencyOut"
                        name="currencyOut"
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
                        defaultValue=""
                    />
                    
                    <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.currencyOut?.type === 'required' && "La devise est requis"} </div>
                </div>
               
                <div class="form-element mb-6">
                    <label htmlFor="amount" className="form-label mb-1 text-lg text-gray-400">Montant</label>
                    <input 
                        id="amount"
                        type="number" 
                        className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `} 
                        
                        {...register("amount", {required: true, maxLength: 80})}
                     />
                    <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.amount?.type === 'required' && "Le montant est requis"} </div>
                </div>

                <div className="flex flex-row items-center justify-between lg:p-2 mb-4">
                    <div>
                        <div className="text-base text-gray-500 font-normal">Montant converti :</div>
                        <div className="text-lg text-purple-900 font-bold">111 233 XOF</div>
                    </div>

                    <div>
                        <div className="text-base text-gray-500 font-normal">Frais :</div>
                        <div className="text-lg text-gray-900 font-bold">2 333 XOF</div>
                    </div>
                </div>

                <Button buttonClass="flex items-center justify-center space-x-2 w-full bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50" loading={false}>
                    Envoyer
                </Button>

                </form>
        </>
    );
}

export default SimulationForm;