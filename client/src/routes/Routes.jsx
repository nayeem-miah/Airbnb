import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Stays from '../Pages/Stays'
import ErrorPage from '../Pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Stays />,
      },

    ],
  },

])
