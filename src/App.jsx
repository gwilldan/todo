import { useState } from 'react'

import {Home, Todo} from "./ComponentExport"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' bg-white-BG text-black-BG font-monserrati h-screen'>

     {/* <Home /> */}
     <Todo />

    </div>
  )
}

export default App
