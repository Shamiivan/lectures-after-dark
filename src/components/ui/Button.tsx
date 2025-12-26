import { type ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
        const baseClasses = 'flex items-center justify-center font-headline font-semibold uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border tracking-[0.1em] min-h-[48px]'

        const variantClasses = {
            primary: 'bg-gold text-midnight border-gold hover:bg-transparent hover:text-gold hover:shadow-[0_0_20px_rgba(245,240,232,0.2)]',
            secondary: 'bg-transparent text-cream border-gold hover:bg-gold/10 hover:border-gold hover:text-gold',
            outline: 'bg-transparent text-cream border-gold hover:bg-gold/10',
        }

        const sizeClasses = {
            sm: 'px-4 py-2',
            md: 'px-8 py-3',
            lg: 'px-12 py-4',
        }

        return (
            <button
                ref={ref}
                className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        )
    }
)

Button.displayName = 'Button'

export default Button
