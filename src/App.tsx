
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FrontPage } from './FrontPage/FrontPage'

import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css"


const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FrontPage></FrontPage>
      </QueryClientProvider>
    </>
  )
}

export default App
