import { ButtonHTMLAttributes } from 'react';
import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'neutral';

interface Button2ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

export const Button2Container = styled.button<Button2ContainerProps>`
  width: 100px;
  height: 40px;
  margin: 0 4px 0 4px;

  ${(props) => {
    return css`background-color: ${props.theme[props.variant]}`
  }}
`;