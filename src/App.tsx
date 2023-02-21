import { ThemeProvider } from 'styled-components'
import './App.css'
import { ButtonModule } from "./components/ButtonModule"
import { Button } from './components/Button'
import { Button2 } from './components/Button2'
import { defaultTheme } from './styles/theme/default'
import { optionalTheme } from './styles/theme/optional'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

    <div>
      <Button2 variant='primary' />
      <Button2 variant='secondary'/>
      <Button2 variant='danger'/>
      <Button2 variant='neutral'/>
      <Button2  disabled/>
    </div>

    <div>
      <Button variant='primary' />
      <Button variant='secondary'/>
      <Button variant='danger'/>
      <Button variant='neutral'/>
      <Button  disabled/>
    </div>

    <div>
      <ButtonModule variant='primary' />
      <ButtonModule variant='secondary'/>
      <ButtonModule variant='danger'/>
      <ButtonModule variant='neutral'/>
      <ButtonModule  disabled/>
    </div>
    </ThemeProvider>
  )
}


