import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './components/main'
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
    <Actions />
  </StrictMode>,
)
