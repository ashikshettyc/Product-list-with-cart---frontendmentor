/* eslint-disable react/prop-types */
import cartIcon from '../assets/images/icon-add-to-cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/reducers/cartReducer';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
function CounterBtn({ id }) {
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  );
  const count = item ? item.count : 0;
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement(id));
  };

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  return (
    <div>
      {count === 0 ? (
        <button
          onClick={handleIncrement}
          className="flex items-center text-rose-600"
        >
          <img src={cartIcon} alt="Add to cart" className="lg:w-4 lg:h-4" />
          <p className="text-sm pl-2">Add to Cart</p>
        </button>
      ) : (
        <div className="flex items-center justify-between bg-rose-600 text-white rounded-full">
          <button
            onClick={handleDecrement}
            className="flex items-center justify-center w-4 h-4 text-lg"
          >
            <span><CiCircleMinus /></span>
          </button>
          <span>{count}</span>
          <button
            onClick={handleIncrement}
            className="flex items-center justify-center w-4 h-4 text-lg"
          >
            <span><CiCirclePlus /></span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CounterBtn;
