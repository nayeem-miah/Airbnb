import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { HelmetProvider } from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { router } from './routes/Routes'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(


  <HelmetProvider>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router} />
      <Toaster />

    </QueryClientProvider>
  </HelmetProvider>

)
