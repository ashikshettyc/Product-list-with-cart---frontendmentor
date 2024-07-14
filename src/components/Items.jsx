import { useEffect } from 'react';
import data from '../data.json'; // Import JSON file
import {addItems} from "../slices/reducers/cartReducer"
import CounterBtn from './CounterBtn';
import { useDispatch, useSelector } from 'react-redux';

const DataDisplay = () => {
  // const [items, setItems] = useState([]);
  const dispatch = useDispatch()
  const {items} = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(addItems({items: data})); // Set the data directly
  }, [dispatch]);

  return (
    <div className='lg:flex flex-col items-start gap-y-3 px-4 md:px-8 lg:px-8 lg:w-[80%]'>
      <h1 className='font-bold text-4xl mb-4'>Desserts</h1>
     
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {items?.map((item) => (
          <div key={item.id} className='relative text-start bg-white p-4 rounded-lg shadow-md'>
            <img src={item.image.desktop} alt={item.name} className={`rounded-md w-full h-auto mb-4 ${item.count > 0 && "border-2 border-rose-700"} `} />
            <div className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 w-32  rounded-full py-1 px-2 border-2 border-rose-600/60 ${item.count > 0 ? "bg-rose-600" : "bg-white"} `}>
              <CounterBtn id={item.id}/>
            </div>
            <p className='pt-4 text-xs text-slate-500 font-semibold'>{item.category}</p>
            <p className='text-sm font-semibold'>{item.name}</p>
            <p className='text-rose-800 text-md'>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
