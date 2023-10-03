'use client'
import { Button } from '@/components/button';
import Dropdown from '@/components/dropdown';
import Layout from '@/components/layout';
import { useEffect, useMemo, useState } from 'react';

const quantities = [1, 2, 3]
export const tables = [{id: 1, name: 'Meja 1'}, {id: 2, name: 'Meja 2'}, {id: 3, name: 'Meja 3'}]

const Order = () => {

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedQty, setSelectedQty] = useState<number>(0);
  const [selectedTableId, setSelectedTableId] = useState<number|null>(null)
  const [menu, setMenu] = useState<Array<any>>([])


  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem('menu'))
    if (localStorage) setMenu(localStorage)
  },[])

  const disabled = useMemo(() => {
    const disable = selectedOption === "" || selectedQty === 0 || selectedTableId === null;
    return disable;
  },[selectedOption, selectedQty, selectedTableId])

  const handleSelect = (event) => {
    if (event.target.value !== "Pilih menu") setSelectedOption(event.target.value)
    else setSelectedOption("")
  }

  const handleSelectQty = (event) => {
    if (event.target.value !== "Kuantitas") setSelectedQty(event.target.value);
    else setSelectedQty(0)
  }

  const handleOrder = () => {
    const data = JSON.parse(window.localStorage.getItem('order'))
    const menuOrdered = {menu: selectedOption, qty: selectedQty}

    if (data) {
      const update = data.map(table => table.id === selectedTableId ? {...table, order: [...table.order, menuOrdered]} : table)
      window.localStorage.setItem('order', JSON.stringify(update))
    } else {
      const init = tables.map(table => table.id === selectedTableId ? {...table, order: [menuOrdered]} : {...table, order: []})
      window.localStorage.setItem('order', JSON.stringify(init))
    }
    setSelectedOption('');
    setSelectedTableId(null);
    setSelectedQty(0);
  }


  const listItems = tables.map(table => 
    <li key={table.id} aria-label='button' onClick={() => setSelectedTableId(table.id)} className={`flex-grow hover:cursor-pointer p-4 ${selectedTableId === table.id ? 'dark:bg-white dark:hover:bg-white dark:text-black' : 'dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white'}`}>
        <div className="flex justify-center">
            <p className=''>{table.name}</p>
        </div>
    </li> 
  )


  return (
    <Layout>
      <ul className='flex'>{listItems}</ul>
      <div className='flex'>
        <Dropdown
          label="Menu"
          className='flex-grow'
          options={menu}
          defaultValue={'Pilih menu'}
          value={selectedOption}
          onChange={handleSelect}
          disabled={false}
          required={true}
        />
        <Dropdown
          label="Jumlah"
          defaultValue={'Kuantitas'}
          value={selectedQty}
          options={quantities}
          className='w-34 ml-4'
          onChange={handleSelectQty}
          disabled={false}
          required={true}
        />
      </div>
      <Button onClick={handleOrder} disabled={disabled}>
        Tambah
      </Button>

    </Layout>
  )
};

export default Order;
