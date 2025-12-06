import cheeseburgerImg from './assets/cheeseburger.png';
import hotdogImg from './assets/hotdog.png';
import friesImg from './assets/fries.png';
import colaImg from './assets/cola.png';
import coffeeImg from './assets/coffee.png';
import teaImg from './assets/tea.png';
import './App.css';
import {useState} from 'react';
import type {IMenu} from './types';
import Orders from './components/Orders/Orders.tsx';
import MenuList from './components/Menu/MenuList.tsx';

const App = () => {

  const [menu, setMenu] = useState<IMenu[]>([
      {name: 'Cheeseburger', image: cheeseburgerImg, price: 100, count: 0},
      {name: 'Hotdog', image: hotdogImg, price: 80, count: 0},
      {name: 'Fries', image: friesImg, price: 60, count: 0},
      {name: 'Cola', image: colaImg, price: 40, count: 0},
      {name: 'Coffee', image: coffeeImg, price: 40, count: 0},
      {name: 'Tea', image: teaImg, price: 20, count: 0},
  ]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addProduct = () => {
      console.log('Продукт добавлен!');
  };


  return (
    <>
        <div className="container">
            <Orders
                className='order-details'
                title='Order Details'
                text={`${totalPrice} KGS`}
            >
            </Orders>

            <MenuList
                menu={menu}
                addProduct={addProduct}
            />
        </div>
    </>
  )
};

export default App
