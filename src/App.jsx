import './App.css'
import Items from "./components/Items"

import Cart from "./components/cart"
function App() {


  return (
    
     <div className='relative w-11/12 mx-auto'>
      <div className='lg:flex'>
      <Items/>
      <Cart />
      </div>
     
   
        
     </div>
    
  )
}

export default App
