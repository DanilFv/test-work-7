import cheeseburgerImg from './assets/cheeseburger.png';
import hotdogImg from './assets/hotdog.png';
import friesImg from './assets/fries.png';
import colaImg from './assets/cola.png';
import coffeeImg from './assets/coffee.png';
import teaImg from './assets/tea.png';
import './App.css';
import {useState} from 'react';
import type {IMenu} from './types';
import Label from './components/Label/Label.tsx';
import Button from './components/Button/Button.tsx';

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

  return (
    <>
        <div className="container">

            <div className='order-details'>
                <h3>Order Details</h3>
                <div className='orders'>
                    <Label className='item-name-order' text={menu[0].name}/>
                    <Label className='item-count-order' text={`${menu[0].count}`}/>
                    <Label className='item-price-order' text={`${menu[0].price}`}/>
                </div>
            </div>

            <div className='add-items'>
                <h3>Add items</h3>
                <div className='items-grid'>
                    {menu.map((item) => {
                        return (
                            <Button
                                className='item-card'
                                type='button'

                            >
                                <img
                                    width='100px'
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="item-text-content">
                                    <span className='item-name'>{item.name}</span>
                                    <span className='item-price'>{item.price}</span>
                                </div>
                            </Button>
                        )
                    })}
                </div>
            </div>

        </div>
    </>
  )
};

export default App
