import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TheHeader from "./layouts/Header/Header"
import Banner from './layouts/Banner/Banner'
import TheFooter from './layouts/Footer/Footer'
import Main from './layouts/Main/Main'
import '@fortawesome/fontawesome-free/css/all.min.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TheHeader />
    <Banner />
    <Main />
    <TheFooter />
  </React.StrictMode>,
)
