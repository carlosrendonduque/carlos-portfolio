import React from 'react';
import { StyledButton, ButtonContent, ButtonIcon } from './Button.styles';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <ButtonContent>
        {icon && iconPosition === 'left' && (
          <ButtonIcon $position="left">
            {icon}
          </ButtonIcon>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <ButtonIcon $position="right">
            {icon}
          </ButtonIcon>
        )}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;