'use client'
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { tables } from "../order/page";

const Kitchen = () => {

  const [tableOrder, setTableOrder] = useState<Array<any>>(tables)

  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem('order'))
    if (localStorage) setTableOrder(localStorage)
  },[])

  const listItems = tableOrder.map(table => 
    <li key={table.id} className="py-4 px-6 flex-grow h-full">
      <p className='text-black dark:text-white font-semibold text-lg'>{table.name}</p>
        {table?.order && table?.order?.map((item: any, index: number) => 
          <div key={index} className="flex">
            <p className='text-slate-500 dark:text-gray-400 mr-4'>{item.qty}x</p>
            <p className='text-slate-500 dark:text-gray-400'>{item.menu}</p>
          </div>
        )}
    </li>   
  )

  return (
    <Layout>
      <ul className="md:flex bg-slate-100 dark:bg-gray-800 rounded-sm h-64">{listItems}</ul>
    </Layout>
  )
  };
  
export default Kitchen;
  