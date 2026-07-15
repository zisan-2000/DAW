import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type ContainerProps = ComponentProps<'div'> & {
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({
  className,
  size = 'default',
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'narrow' && 'max-w-3xl',
        size === 'default' && 'max-w-7xl',
        size === 'wide' && 'max-w-[1440px]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
