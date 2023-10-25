import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className='fixed inset-0 grid place-items-center min-h-screen bg-black bg-opacity-20 '>
      <div className='bg-white px-4 py-4 rounded-lg h-32 flex flex-col justify-between'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='flex justify-between'>
          <button
            type='button'
            className='text-lg text-red-600 border-solid  px-2 border rounded-md capitalize hover:text-red-400 font-bold border-red-500 delay-100'
            onClick={() => {
              dispatch(closeModal());
              dispatch(clearCart());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='text-lg text-green-600 border-solid  px-2 border rounded-md capitalize hover:text-green-400  font-bold border-green-500 delay-100'
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
