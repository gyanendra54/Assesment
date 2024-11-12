import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Assesment-Test</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hover:text-green-600'>Home</li>
          </Link>
          
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li className='hover:text-green-600'>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}