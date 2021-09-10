import React, {useMemo, useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import Button from "../../components/Elements/Button";
import Modal from '../../components/Modal'
import Select from "react-select";
import {customSelectSingle} from "../../components/utils/selectCustoms";
import {Table} from "../../components/Elements/Table";
import MOCK_DATA from '../../MockDatas/MOCK_DATA.json'
import {EyeIcon, PencilIcon, TrashIcon} from "@heroicons/react/solid";

function account() {

    const { register, control,  handleSubmit, formState: { errors } } = useForm();

    let [open, setIsOpen] = useState(false)
    let [lines, setLines] = useState([])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(()=> {
        setTimeout(()=>{
            setLines(MOCK_DATA)
        }, 3000)

    }, [])

    console.log("data", lines.length===0 ? null : lines)

    const onSubmit = (data) => {
        console.log(data)
    }

    const editLine = (nacc) => {
        console.log(lines.filter(line => line.account_number === nacc))
    }


    const selectOptions =
        [
            { value: "epargne", label: "Epargne" },
            { value: "courant", label: "Courant" }
        ]

    const selectDevise =
        [
            { value: "fcfa", label: "Fcfa" },
            { value: "euro", label: "Euro" }
        ]

    const AccountHeaders = [
        {
            Header : 'Numéro de compte',
            accessor : 'number_account'
        },
        {
            Header : 'Balance',
            accessor : 'balance'
        },
        {
            Header : 'Type de compte',
            accessor : 'account_type'
        },
        {
            Header : 'Devise',
            accessor : 'currency'
        },
        {
            Header: "Actions",
            accessor: "actions",
            Cell: ({row : {values}}) => {
                console.log(values)
               return (
                    <div className="flex p-2">
                        <div className="px-2" onClick={()=> editLine(values.number_account) }>
                            <PencilIcon className="text-gray-800 h-5 w-5 cursor-pointer hover:text-gray-500"/>
                        </div>
                        <div className="px-2" onClick={()=> console.log("View")}>
                            <EyeIcon className="text-gray-800 h-5 w-5 cursor-pointer hover:text-gray-500" />
                        </div>
                        <div className="px-2" onClick={()=> console.log("Del")}>
                            <TrashIcon className="text-gray-800 h-5 w-5 cursor-pointer hover:text-gray-500" />
                        </div>
                    </div>
               )
            }

        }
    ]



    return (
            <>
                <Modal isOpen={open} closeModal={closeModal} title="Nouveau compte" description="Création d'un nouveau compte">

                    <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                            <div className="form-element mb-6 grid grid-cols-1">
                                <label htmlFor="firstname"
                                       className="form-label mb-1 text-lg text-gray-400">Numéro</label>
                                <input
                                    name="firstname"
                                    id="firstname"
                                    type="text"
                                    className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `}

                                    {...register("firstname", {required: true, maxLength: 80})}
                                />
                                <div
                                    className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.firstname?.type === 'required' && "Le montant est requis"} </div>
                            </div>

                            <div className="form-element mb-6 grid grid-cols-1">
                                <label htmlFor="lastname" className="form-label mb-1 text-lg text-gray-400">Solde</label>
                                <input
                                    name="lastname"
                                    id="lastname"
                                    type="text"
                                    className={`border-2 border-gray-200 focus:outline-none rounded-md w-full focus:ring-2 focus:ring-purple-600 focus:border-transparent p-3 h-16 text-lg mb-1 ${errors.amount && 'focus:ring-red-600'} `}

                                    {...register("lastname", {required: true, maxLength: 80})}
                                />
                                <div
                                    className="text-red-500 font-medium tracking-wide text-red-500 text-sm mt-1"> {errors.lastname?.type === 'required' && "Le montant est requis"} </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">

                            <div className="form-element mb-6 grid grid-cols-1">
                                <label className="form-label mb-1 text-lg text-gray-400">Type de compte</label>
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
                                <label className="form-label mb-1 text-lg text-gray-400">Devise</label>
                                <Controller
                                    name="typenci"
                                    id="typenci"
                                    render={({ field }) => (
                                        <Select
                                            styles={customSelectSingle}
                                            {...field}
                                            options={selectDevise}
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
                        </div>

                        <div className="flex md:flex-row flex-col md:justify-between ">

                            <Button buttonClass="flex items-center justify-center space-x-2 w-auto text-purple-600 p-5 rounded-md font-bold focus:ring-none text-lg disabled:opacity-50" type="button"  onClick={closeModal}>
                                Annuler
                            </Button>

                            <Button buttonClass="flex items-center justify-center space-x-2 w-auto bg-purple-900 text-white p-5 rounded-md font-bold text-lg disabled:opacity-50">
                                Valider
                            </Button>
                        </div>

                    </form>
                </Modal>
                <div className="w-full">
                    <div className="flex h-screen">
                        <div className="lg:w-2/3 max-w-5xl my-15 px-4 py-5 mx-auto">
                            <div className="p-10">
                                <div className="flex flex-flex-row justify-between">
                                    <div className="text-left mb-12">
                                        <div className="text-purple-900 text-xl font-bold">
                                            Compte
                                        </div>

                                        <div className="text-base text-gray-400 font-thin">
                                            Créer un compte
                                        </div>
                                    </div>
                                    <div>
                                        <Button onClick={openModal} buttonClass="flex items-center justify-center space-x-2 w-full bg-purple-900 text-white p-3 rounded-md font-semi-bold text-lg">
                                            Nouveau compte
                                        </Button>
                                    </div>
                                </div>

                                <Table columns={AccountHeaders} data={lines} />

                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default account;