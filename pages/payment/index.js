import RecapSideBarPayment from "../../components/displayBar/RecapSideBarPayment";
import {DocumentTextIcon, HomeIcon, AcademicCapIcon, ShoppingCartIcon, SearchIcon} from '@heroicons/react/solid'
import {useForm} from "react-hook-form";
import Image from 'next/image'



function payment() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="w-full">
            <div className="flex h-screen">
                <div className="lg:w-2/3 max-w-5xl my-15 px-4 py-5 mx-auto">
                    <div className=" ">
                        <div className="p-10">

                            <div className="text-left mb-12">
                                <div className="text-purple-900 text-xl font-bold">
                                    Paiement de facture
                                </div>
                                <div className="text-base text-gray-400 font-thin">
                                    Choisir un service pour effectuer un paiement
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-md h-20 px-5 py-2 mb-10 flex flex-row items-center justify-evenly cursor-pointer">

                                    <div className="flex flex-col items-center hover:text-purple-900 px-3 text-gray-400">
                                        <DocumentTextIcon className="h-10 w-10" />
                                        <div className="text-base font-medium">
                                            Factures
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center hover:text-purple-900 px-3 text-gray-400">
                                        <HomeIcon className="h-10 w-10"/>
                                        <div className="text-base font-medium">
                                            Immobilier
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center hover:text-purple-900 px-3 text-gray-400">
                                        <AcademicCapIcon className="h-10 w-10 " />
                                        <div className="text-base font-medium">
                                            Education
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center hover:text-purple-900 px-3 text-gray-400">
                                        <ShoppingCartIcon className="h-10 w-10 " />
                                        <div className="text-base font-medium">
                                            Shopping
                                        </div>
                                    </div>
                            </div>

                            <div className="max-w-md mx-auto">
                                <form className="flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-element mb-10 text-center w-full">
                                        <label htmlFor="amount"
                                               className="text-2xl font-semibold text-purple-900">Senelec</label>
                                        <div className="relative">
                                            <input
                                                name="amount"
                                                id="amount"
                                                type="text"
                                                placeholder="Numéro de reférence"
                                                className={`border-2 border-gray-200 px-5 pr-10 placeholder-gray-500 placeholder-opacity-50 mt-4 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-15 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `}
                                                {...register("amount", {required: true, maxLength: 80})}
                                            />
                                            <button type="submit" className="absolute right-0 top-0 mt-7 mr-4">
                                                <SearchIcon className="h-8 w-8 fill-current text-gray-400" />
                                            </button>
                                        </div>


                                        <div className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.amount?.type === 'required' && "Le montant est requis"}</div>
                                    </div>
                                </form>
                            </div>



                            <form className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                                    <div>
                                        <input className="hidden" id="radio_1" type="radio" name="radio_1" checked={true} />
                                        <div for="radio_1" className="px-4 py-4 rounded-lg w-40 h-35 hover:shadow-xl cursor-pointer border border-gray-200">
                                            <Image width={50} height={45} className="" layout="responsive" src="/senelec.png" />
                                        </div>
                                    </div>

                                    <div>
                                        <input className="hidden" id="radio_2" type="radio" name="radio_2" />
                                        <div for="radio_2" className="px-4 py-4 rounded-lg w-40 h-35 hover:shadow-xl cursor-pointer border border-gray-200">
                                            <Image width={50} height={45} className="" layout="responsive" src="/orange.png" />
                                        </div>
                                    </div>


                                    <div className="px-4 py-4 rounded-lg w-40 h-35 hover:shadow-xl cursor-pointer border border-gray-200">
                                        <Image width={50} height={45} className="" layout="responsive" src="/woyofal.png" />
                                    </div>

                                    <div className="px-4 py-4 rounded-lg w-40 h-35 hover:shadow-xl cursor-pointer border border-gray-200">
                                        <Image width={50} height={45} className="" layout="responsive" src="/rapido.png" />
                                    </div>

                            </form>

                        </div>
                    </div>
                </div>

                <RecapSideBarPayment />

            </div>
        </div>
    );
}

export default payment;