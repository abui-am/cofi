import clsx from 'clsx';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const TextField: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    variant?: 'outlined' | 'contained';
    hasError?: boolean;
    Icon?: JSX.Element;
  }
> = ({ className, hasError, Icon, variant = 'outlined', ...props }) => {
  const variation = variant === 'outlined' ? 'border-gray-300 border' : 'bg-blueGray-100';
  const errorStyle = hasError ? 'ring-red-500 ring-inset border-transparent outline-none ring-2' : '';
  return (
    <div className="relative">
      {Icon && <div className="absolute flex items-center left-3 top-0 bottom-0 m-auto text-blueGray-400">{Icon}</div>}

      <input
        {...props}
        className={clsx(
          Icon ? 'pl-11' : '',
          errorStyle,
          variation,
          'h-11 w-full rounded-md px-3 outline-none',
          'focus:ring-blue-600 focus:ring-inset focus:border-transparent focus:outline-none focus:ring-2',
          'transition-all duration-150 ease-in',
          className
        )}
      />
    </div>
  );
};
