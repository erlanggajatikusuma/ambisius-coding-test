'use client'
import { Button } from "@/components/button";
import Dropdown from "@/components/dropdown";
import Layout from "@/components/layout";
import { useEffect, useMemo, useState } from "react";

const Cashier = () => {
  const [options, setOptions] = useState<Array<any>>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [receipt, setReceipt] = useState<any>(null);
  const [isPrinted, setIsPrinted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);


  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem('order'))
    if (localStorage) {
      const opt = localStorage.filter(option => option.order.length !== 0)
      setOptions(opt)
    }
  },[isRefresh])

  const handleSelect = (event) => {
    if (event.target.value !== 'Nomor meja') {
      setSelectedOption(event.target.value)
      const struck = options.find(item => item.id === Number(event.target.value))
      setReceipt(struck)
      setIsVisible(true)
    } else {
      setIsPrinted(false)
      setIsVisible(false)
      setSelectedOption('')
    }
  }

  const handlePrint = () => setIsPrinted(true);

  const handleRemove = () => {
    const localStorage = JSON.parse(window.localStorage.getItem('order'))
    if (localStorage && receipt) {
      const data = localStorage.map(table => table.id === receipt.id ? {...table, order: []} : table)
      window.localStorage.setItem('order', JSON.stringify(data))
      setIsRefresh(!isRefresh)
      setIsPrinted(false)
      setIsVisible(false)
      setSelectedOption('')
    }
  }

  const listItems = (receipt !== null ? receipt.order : []).map((item, index) => 
    <li key={index} className="py-4 px-6 flex-grow h-full">
          <div className="flex">
            <p className='text-slate-500 dark:text-gray-400 w-20'>{item.qty}</p>
            <p className='text-slate-500 dark:text-gray-400 flex-grow mx-4'>{item.menu}</p>
            <p className='text-slate-500 dark:text-gray-400 w-28'>Gratis</p>
          </div>
    </li>   
  )

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Dropdown
            label="Meja"
            className='w-60'
            options={options}
            defaultValue={'Nomor meja'}
            id="id"
            value={selectedOption}
            onChange={handleSelect}
            disabled={false}
            required={true}
          />
          <Button className="h-10 mt-2 ml-4" disabled={selectedOption.length === 0} onClick={handlePrint}>Print Struk</Button>
        </div>
        {isVisible &&<Button className="bg-red-500 text-white h-10 mt-2 ml-4" disabled={false} onClick={handleRemove}>Kosongkan Meja</Button>}
      </div>
      {isPrinted && (
        <ul>
          <div className="flex py-4 px-6">
              <p className='text-slate-500 dark:text-gray-400 w-20'>Jumlah</p>
              <p className='text-slate-500 dark:text-gray-400 flex-grow mx-4'>Menu</p>
              <p className='text-slate-500 dark:text-gray-400 w-28'>Harga</p>
          </div>
          {listItems}
        </ul>
      )}
    </Layout>
  )
  };
  
export default Cashier;
  