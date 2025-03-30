import { cva as Cva, cx as clsx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: (string | undefined)[]): string {
  return twMerge(clsx(inputs))
}

export const cva: typeof Cva = (base, configuration) => {
  const variants = Cva(base, configuration)
  return props => cn(variants(props))
}