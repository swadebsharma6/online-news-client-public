import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx'
import { router } from './components/Routes/router.jsx'
import './index.css'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <AuthProvider>
   <div className='max-w-screen-2xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </AuthProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
