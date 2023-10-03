'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-inherit flex-grow p-4">
      <ul className="bg-slate-100 dark:bg-gray-800 rounded flex">
        <li className='flex-grow text-center flex'>
          <Link href="/menu" className={`link ${pathname === '/menu' ? 'bg-white text-black dark:bg-gray-700 dark:text-white' : ''} flex-grow m-1 py-2 text-slate-500 rounded`}>
            Menu
          </Link>
        </li>
        <li className='flex-grow text-center flex'>
          <Link href="/order" className={`link ${pathname === '/order' ? 'bg-white text-black dark:bg-gray-700 dark:text-white' : ''} flex-grow m-1 py-2 text-slate-500 rounded`}>
            {/* <a className="text-white hover:text-gray-300">Order</a> */}
            Order
          </Link>
        </li>
        <li className='flex-grow text-center flex'>
          <Link href="/kitchen" className={`link ${pathname === '/kitchen' ? 'bg-white text-black dark:bg-gray-700 dark:text-white' : ''} flex-grow m-1 py-2 text-slate-500 rounded`}>
            {/* <a className="text-white hover:text-gray-300">Kitchen</a> */}
            Kitchen
          </Link>
        </li>
        <li className='flex-grow text-center flex'>
          <Link href="/cashier" className={`link ${pathname === '/cashier' ? 'bg-white text-black dark:bg-gray-700 dark:text-white' : ''} flex-grow m-1 py-2 text-slate-500 rounded`}>
            {/* <a className="text-white hover:text-gray-300">Cashier</a> */}
            Cashier
          </Link>
        </li>
      </ul>
    </nav>
  );
};
