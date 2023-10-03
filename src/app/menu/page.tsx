'use client'
import { Button } from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout"
import { useEffect, useState } from "react";

const Menu = () => {
  const [orderValue, setOrderValue] = useState<string>('');
  const [menu, setMenu] = useState<Array<any>>([])
  
  useEffect(() => {
    const localStorage = window.localStorage.getItem('menu')
    const parsed = JSON.parse(localStorage)
    if (parsed) setMenu(parsed)
  },[])


  const addMenu = () => {
    const id = new Date().getUTCMilliseconds();
    const newMenu = {
      id,
      name: orderValue
    }
    const data = [newMenu, ...menu]
    window.localStorage.setItem('menu', JSON.stringify(data))
    setMenu(prevState => [newMenu, ...prevState])
    setOrderValue('')
  }
  
  const deleteMenu = (id: number) => {
    const filtered = menu.filter(item => item.id !== id)
    window.localStorage.setItem('menu', JSON.stringify(filtered))
    setMenu(filtered)
  }

  const listItems = menu.map(item => 
    <li key={item.id}>
      <div className="flex justify-between p-4 border-t border-gray-300">
        <div className="flex">
          <p className="w-24">{item.id}</p>
          <p>{item.name}</p>
        </div>
        <Button disabled={false} onClick={() => deleteMenu(item.id)}>Hapus</Button>
      </div>
    </li> 
  )
    return (
      <Layout>
        <div className="flex items-center">
          <Input
            label="Menu Makanan"
            placeholder="Tambahkan di sini..."
            type="text"
            value={orderValue}
            onChange={(event) => setOrderValue(event.target.value)}
          />
          <Button className="h-10 mt-2 ml-4" disabled={!orderValue.length} onClick={addMenu}>Tambah</Button>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex">
            <p className="w-24">ID</p>
            <p>Menu</p>
          </div>
          <span className="px-3">Hapus?</span>
        </div>
        <ul>{listItems}</ul>
      </Layout>
    )
  };
  
export default Menu;
  