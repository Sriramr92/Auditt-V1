import React from 'react';
import { Button, ButtonProps } from './button';
import { cn } from '@/lib/utils';

interface ButtonWithIconProps extends ButtonProps {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function ButtonWithIcon({
  children,
  icon,
  iconPosition = 'left',
  className,
  ...props
}: ButtonWithIconProps) {
  return (
    <Button
      className={cn(
        'flex items-center gap-2',
        iconPosition === 'right' && 'flex-row-reverse',
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </Button>
  );
}
