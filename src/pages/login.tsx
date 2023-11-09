import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import './lazy-image-overrides.css'
import Input from "../components/Input";
import Button from "../components/Button";
import useMousePosition from "../hooks/useMousePosition";
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

  const imageWidth = window?.innerWidth > 1600 && 900 || window?.innerWidth > 1400 && 660 || 520

  const mousePosition = useMousePosition();

  const translateStyles = {
    translate: `${mousePosition.x / 100}px ${mousePosition.y / 100}px`
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
  };

  return (
    <div
      className={`
        bg-white
        bg-gradient-to-b
        from-white
        to-slate-100
        text-slate-800
        p-2
        sm:p-6
        md:p-10
        min-h-screen
        grid
        gap-x-5
        gap-y-16
        grid-cols-1
        lg:grid-cols-[1fr_minmax(auto,520px)]
        2xl:grid-cols-[1fr_minmax(auto,660px)]
      `}
    >
      <div className="flex justify-center content-center min-h-[90vh]">
        <div className="grid grid-cols-[2rem,1fr,2rem] sm:grid-cols-[2.5rem,1fr,2.5rem] sm:grid-rows-[2.5rem,1fr,2.5rem] gap-2 sm:gap-4 w-full sm:w-[80%] max-w-[520px] m-auto">
          <div />
          <div />
          <img src={IconYellow} className="w-full" style={translateStyles} alt="yellow shapes" />
          <div />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="whitespace-normal gap-2">
                <h1 className="inline-block float-left mr-3 text-3xl font-medium relative whitespace-nowrap before:content-squiggle before:absolute before:-top-9">Log Into</h1>
                <img className="h-9 float-left" src={LogoPuple} alt="Humanfore" />
              </div>
              <span>
                Choose one of the following options to log in
              </span>
            </div>
            <form className="contents" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <Input label="Email" name="email" id="email" autoComplete="email" register={register} required={true} error={errors.email?.message} />
                <Input label="Password" name="password" type="password" id="password" autoComplete="off" aria-autocomplete="none" register={register} required={true} error={errors.password?.message} />
              </div>
              <Button type="submit">Log in</Button>
              <div className="w-full justify-start items-center gap-3 inline-flex">
                <hr className="w-full" />
                <div className="text-slate-500 text-sm font-normal">OR</div>
                <hr className="w-full" />
              </div>
              <Button variant="secondary" type="button" icon={<img src={GoogleIcon} alt="Google" />}>Log in with Google</Button>
              
              <div className="text-center">
                <span className="text-neutral-700 text-base">Don’t have an account? </span>
                <a href="/" className="text-indigo-800 text-base font-medium underline">Sign up</a>
              </div>
            </form>
          </div>
          <div />
          <img src={IconPurple} style={translateStyles} className="w-full" alt="purple shapes"/>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <div
          className={`
            h-[90vh]
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
            width={imageWidth}
            alt="Woman working"
            className="aspect-[6/8] h-full w-full object-cover"
          />
        </div>
        <img
          src={LogoWhite}
          style={translateStyles}
          alt="Humanforce Logo"
          className={`absolute bottom-10 left-6 h-8`}
        />
      </div>
    </div>
  )
}

export default Login
