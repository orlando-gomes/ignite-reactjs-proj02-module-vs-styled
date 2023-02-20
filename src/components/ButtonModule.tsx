import { ButtonHTMLAttributes } from 'react'
import styles from './ButtonModule.module.css'

interface ButtonModuleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'neutral';
}

export function ButtonModule({variant = 'primary', ...rest}: ButtonModuleProps) {
  return (
    <button {...rest} className={`${styles['button']} ${styles[variant]}`}>Enviar</button>
  )
}

// Utilizando css module, css dependente de propriedade será criado através de 
// criação de classes para cada propriedade. O styled-components procura resolver 
// este problema.