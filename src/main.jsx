import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componets/header/Header.jsx'
import Body from './componets/body/body.jsx'
import Footer from './componets/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body/>
    <Footer/>
  </StrictMode>,
)
