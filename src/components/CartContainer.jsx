import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../features/modal/modalSlice';
import { useDispatch } from 'react-redux';

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className=' min-h-[calc(100vh-5rem)] py-8 '>
        <header className='text-center px-4  md:px-8 mx-auto max-w-md'>
          <h2 className='text-4xl mb-4 capitalize '>your bag</h2>
          <p className='text-xl'>is currently empty...</p>
        </header>
      </section>
    );
  }

  return (
    <section className=' min-h-[calc(100vh-4rem)] py-8 '>
      <div className='px-4 md:px-8 mx-auto max-w-2xl'>
        <header>
          <h2 className='text-4xl text-center mb-4 capitalize'>your bag</h2>
        </header>
        <div className='mb-14'>
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} {...cartItem} />;
          })}
        </div>
        <footer>
          <hr className='border-dashed border-2 mb-2' />
          <div className='flex justify-between capitalize'>
            total
            <span className='bg-sky-500 text-slate-100 rounded px-2'>
              ${total.toFixed(2)}
            </span>
          </div>
          <div className='text-center'>
            <button
              className='mx-auto inline-block  px-2 rounded text-lg capitalize delay-100 font-semibold border border-solid border-sky-800 text-sky-800 hover:text-sky-500 '
              onClick={() => dispatch(openModal())}
            >
              clear items
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};
export default CartContainer;
