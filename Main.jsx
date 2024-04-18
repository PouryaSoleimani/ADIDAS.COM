// ^ MAIN _________________________________________________________________________________________________________
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { RecoilRoot } from 'recoil'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
)
