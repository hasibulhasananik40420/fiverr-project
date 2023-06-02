import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

const App = () => {
  return (
    <div className='font-Poppins pt-16'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App