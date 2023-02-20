
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral';

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'blue',
  danger: 'red',
  neutral: 'gray',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 0 4px 0 4px;

  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }}
`;