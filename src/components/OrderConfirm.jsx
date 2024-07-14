import { useDispatch } from "react-redux";
import data from '../data.json';
import { addItems } from "../slices/reducers/cartReducer";
/* eslint-disable react/prop-types */
function OrderConfirm({ filterItem, total, setPopup }) {

    const dispatch = useDispatch()
    const handleClick = () => {
       dispatch(addItems({items: data}))
       setPopup(false)
    }
    return (
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <div className="text-center">
            <svg
              className="w-10 h-10 mx-auto mb-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Order Confirmed</h2>
            <p className="text-gray-600">We hope you enjoy your food!</p>
          </div>
  
          <div className="mt-6">
            {filterItem.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-gray-900">{item.name}</p>
                    <p className="text-gray-600 text-sm">
                      {item.count}x @ ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-900">${(item.count * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
  
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <p className="text-lg font-bold text-gray-900">Order Total</p>
            <p className="text-lg font-bold text-gray-900">${total.toFixed(2)}</p>
          </div>
  
          <button onClick={handleClick} className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none">
            Start New Order
          </button>
        </div>
      </div>
    );
  }
  
  export default OrderConfirm;
  