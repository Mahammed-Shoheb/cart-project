import { useEffect } from 'react';
import { Navbar, CartContainer, Modal } from './components';
import { calculateTotal, getCartItems } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='w-20 h-20 border-4 border-solid border-sky-500 rounded-[50%] border-s-sky-800 animate-spin mx-auto mt-8'></div>
    );
  }
  return (
    <main>
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </main>
  );
};
export default App;
