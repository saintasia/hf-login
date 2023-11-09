import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

const Button = ({ variant = 'primary', children, icon, ...rest }: ButtonProps) => {
  const baseClasses =
    'px-4 py-3 text-xl font-medium rounded-full ring-3 focus:ring-indigo-500 border-2 border-black flex justify-center items-center gap-2 transition-all';
  const variantClasses = {
    primary: 'bg-violet-400 text-black hover:bg-violet-300',
    secondary: 'text-gray-700 hover:text-gray-800 hover:border-violet-400 hover:text-violet-500',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={classes} {...rest}>
      {icon && icon}{children}
    </button>
  );
};

export default Button;
