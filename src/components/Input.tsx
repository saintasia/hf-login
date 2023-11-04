import type { HTMLAttributes } from 'react';

type InputType = 'email' | 'password'

interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'label' | 'register'> {
  label: string;
  register: (name: InputType, options?: object) => { ref: any } | any;
  required?: boolean;
  name: InputType;
  error?: string;
  type?: InputType
}

const Input = ({ label, register, required, name, error, ...rest }: InputProps) => (
  <div className="flex flex-col gap-1">
    <label className="block font-medium text-slate-900" htmlFor={rest.id}>
      {label}
    </label>
    <input
      className="block w-full px-4 py-3 text-slate-900 border border-slate-300 rounded-lg bg-slate-50 sm:text-md focus:ring-indigo-500 focus:border-indigo-500"
      {...register(name, { required })}
      {...rest}
    />
    {error && <span className='text-xs font-medium text-red-700'>{error}</span>}
  </div>
)

export default Input;
