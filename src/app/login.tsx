import { useForm } from "react-hook-form";
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import Input from "../components/Input";
import Button from "../components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from "../utils";

import MainImage from "../assets/main.jpg";
import LogoPuple from '../assets/logo-purple.svg'
import LogoWhite from '../assets/logo-white.svg'
import IconPurple from '../assets/icon-purple.svg'
import IconYellow from '../assets/icon-yellow.svg'
import GoogleIcon from '../assets/google-icon.svg'

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data)
  };

  return (
    <div
      className={`
        bg-white
        bg-gradient-to-b
        from-whit
        to-slate-100
        text-slate-800
        p-2
        sm:p-6
        md:p-10
        min-h-screen
        grid
        grid-cols-1
        gap-x-5
        gap-y-16
        lg:grid-cols-[1fr_max(520px)]
      `}
    >
      <div className="flex justify-center content-center min-h-[90vh]">
        <div className="grid grid-cols-[2rem,1fr,2rem] sm:grid-cols-[2.5rem,1fr,2.5rem] sm:grid-rows-[2.5rem,1fr,2.5rem] gap-2 sm:gap-4 w-full sm:w-[80%] max-w-[520px] m-auto">
          <div />
          <div />
          <img src={IconYellow} className="w-full" alt="yellow shapes" />
          <div />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="whitespace-normal gap-2">
                <h1 className="inline-block float-left mr-2 text-3xl font-medium relative whitespace-nowrap before:content-squiggle before:absolute before:-top-9">Log Into</h1>
                <img className="h-9 float-left" src={LogoPuple} alt="Humanfore" />
              </div>
              <span>
                Choose one of the following options to log in
              </span>
            </div>
            <form className="contents" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <Input label="Email" name="email" id="email" register={register} required={true} error={errors.email?.message} />
                <Input label="Password" name="password" type="password" id="password" register={register} required={true} error={errors.password?.message} />
              </div>
              <Button type="submit">Log in</Button>
              <div className="w-full justify-start items-center gap-3 inline-flex">
                <hr className="w-full" />
                <div className="text-slate-500 text-sm font-normal">OR</div>
                <hr className="w-full" />
              </div>
              <Button variant="secondary" type="button" icon={<img src={GoogleIcon} alt="Google" />}>Log in with Google</Button>
            </form>
          </div>
          <div />
          <img src={IconPurple} className="w-full" alt="purple shapes"/>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <div
          className={`
            h-full
            w-full
            aspect-[6/8]
            overflow-hidden
            rounded-tl-[100px]
            rounded-br-[100px]
          `}
        >
          <LazyLoadImage
            src={MainImage}
            effect="blur"
            width={520}
            alt="Woman working"
            className="aspect-[6/8] h-full w-full object-cover"
          />
        </div>
        <img
          src={LogoWhite}
          alt="Humanforce Logo"
          className={`absolute top-[82vh] left-6 h-8`}
        />
      </div>
    </div>
  )
}

export default Login
