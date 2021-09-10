import {useForm} from 'react-hook-form'
import {useRouter} from 'next/router'
import {
  UserIcon,
  KeyIcon

} from "@heroicons/react/outline";
import {Field} from '../components/Elements/Field'
import Button from '../components/Elements/Button'
import OtherSide from "../components/OtherSide"

export default function Login() {

  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onLogin = data => {
    router.push('/dashboard')
    console.log(data)
  };

  return (
    <div className=" h-screen overflow-hidden">
      <div className="w-full  h-screen flex flex-wrap">
        <div className="w-1/2 shadow-xl flex">
          <OtherSide />
        </div>

        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32 mx-auto container">
            <div className="text-2xl font-normal text-godo-gray pb-2">
              Connexion
            </div>
            <p className="text-3xl font-semibold">La simplicité avant tout</p>
            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(onLogin)}>
              <div className="flex flex-col pt-4">
                <Field
                    {...register("username", {required: "Le champs est requis"})}
                    type="text"
                    label="Nom d'utilisateur"
                    name="username"
                    error={errors?.username?.message}
                    icon={<UserIcon />}
                />
              </div>

              <div className="flex flex-col pt-4">
                <Field
                    {...register("password", {required: "Le champs est requis"})}
                    type="password"
                    label="Mot de passe"
                    name="password"
                    error={errors?.password?.message}
                    icon={<KeyIcon />}
                />
              </div>

              <Button type="submit" className="w-full bg-purple-900 text-white p-5 rounded-md font-bold text-lg">
                  Se connecter
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
