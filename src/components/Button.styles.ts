
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral';

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 0 4px 0 4px;

  ${props => {
    console.log(props);
    return css`background-color: ${props.theme[props.variant]}`
  }}
`;