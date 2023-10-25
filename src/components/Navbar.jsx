import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className='bg-sky-200 mb-6'>
      <div className='mx-auto px-4 md:px-8 max-w-6xl  flex justify-between py-3 items-center'>
        <h1 className='capitalize text-5xl text-sky-600 font-semibold'>
          cart project
        </h1>
        <div className='relative py-1'>
          <BsBag className='text-3xl ' />
          <p className='absolute -top-2 -right-2  bg-sky-500 rounded-[50%] w-6 h-6 grid place-items-center text-slate-100'>
            {amount}
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
