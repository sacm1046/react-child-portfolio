import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/main'
import Actions from './components/actions'
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    <Actions />
  </StrictMode>,
)
