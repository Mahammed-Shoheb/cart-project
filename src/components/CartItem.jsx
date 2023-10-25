import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className='flex justify-between mb-8 items-center align-middle md:px-1'>
      <div className='flex'>
        <img src={img} alt={title} className='w-16 md:w-24' />
        <div className='md:ms-4'>
          <h3>{title}</h3>
          <h4>${price}</h4>
          <button
            type='button'
            className='text-red-600 hover:text-red-400 delay-100'
            onClick={() => dispatch(removeItem(id))}
          >
            remove
          </button>
        </div>
      </div>
      <div className='pe-2 flex flex-col justify-center items-center'>
        <button
          type='button'
          onClick={() => dispatch(increase({ id }))}
          className='text-sky-800 font-extrabold text-xl hover:text-sky-400 delay-100'
        >
          <BsChevronUp />
        </button>
        <p className='text-lg'>{amount}</p>
        <button
          type='button'
          className='text-sky-800 font-extrabold text-xl hover:text-sky-400 delay-100'
          onClick={() => {
            if (amount === 1) dispatch(removeItem(id));
            dispatch(decrease({ id }));
          }}
        >
          <BsChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
