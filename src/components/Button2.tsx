import { ButtonHTMLAttributes } from "react";
import { Button2Container, ButtonVariant } from "./Button2.styles";

interface Button2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button2({variant = 'primary', ...rest} :Button2Props) {
  return (
    <Button2Container {...rest} variant={variant}>Enviar</Button2Container>
  )
}