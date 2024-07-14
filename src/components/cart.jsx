import { useDispatch, useSelector } from 'react-redux';
import emptyCart from '../assets/images/illustration-empty-cart.svg';
import {removecart } from "../slices/reducers/cartReducer"
import OrderConfirm from './OrderConfirm';
import { useState } from 'react';
const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const [popup, setPopup] = useState(false)
  const dispatch = useDispatch()
  const filtercount = items.filter((item) => item.count > 0);
  const alltotal = filtercount.reduce(
    (total, acc) => (total += acc.price * acc.count),
    0
  );
  const totalCount = filtercount.reduce((total,acc) => (total += acc.count),0)
  const removeHandler = (id) => {
    dispatch(removecart(id))
  }

  const handleClick = () => {
    return (
      setPopup(prev => !prev)
    )
  }
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full h-fit max-w-sm mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
      {filtercount && totalCount > 0 ? (
        <div>
          <h2 className="text-xl font-bold text-orange-700 mb-4">
            Your Cart ({totalCount})
          </h2>
          {filtercount.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  <span className="text-rose-600 ">{item.count}x</span>
                  <span className='px-2'>@ ${item.price.toFixed(2)}</span>
                  
                  <span className="font-semibold px-2">
                    ${(item.count * item.price).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <button onClick={()=>removeHandler(item.id)} className="ml-2 text-gray-400 hover:text-gray-600">
                  ✕
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-2 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Order Total</span>
              <span className="font-bold text-xl">${alltotal.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">
            🍃 This is a carbon-neutral delivery
          </p>
          <button onClick={handleClick} className="w-full mt-4 bg-orange-700 text-white py-2 rounded-full hover:bg-orange-800">
            Confirm Order
          </button>
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-xl text-rose-700 mb-4">
            Your Cart (0)
          </h2>
          <img src={emptyCart} alt="Empty cart" className="w-24 h-24 mb-4" />
          <p className="text-slate-500">Your added items will appear here</p>
        </div>
      )}
      {
      
        popup ? <OrderConfirm filterItem={filtercount} total={alltotal} setPopup={setPopup} /> : ""
      }
    
    </div>
  );
};

export default Cart;
{
  /* <div>
     {
      items.map(item=>
       <div key={item.id}>{item.name}</div> 
     
      
    )
     }
     </div> */
}

{
  /* <div>
      <h2 className='font-bold text-xl text-rose-700 mb-4'>Your Cart (0)</h2>
      <img src={emptyCart} alt="Empty cart" className='w-24 h-24 mb-4' />
      <p className='text-slate-500'>Your added items will appear here</p>
      </div> */
}
