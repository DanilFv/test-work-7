import cheeseburgerImg from '../../assets/cheeseburger.png';
import hotdogImg from '../../assets/hotdog.png';
import friesImg from '../../assets/fries.png';
import colaImg from '../../assets/cola.png';
import coffeeImg from '../../assets/coffee.png';
import teaImg from '../../assets/tea.png';
import '../../App.css';
import '../../components/Orders/Orders.css';
import '../../components/Orders/OrderItems/OrderItems.css';
import '../../components/Menu/MenuList.css';
import '../../components/Menu/MenuItem/MenuItem.css';
import {useState} from 'react';
import type {IMenu} from '../../types';
import Orders from '../../components/Orders/Orders.tsx';
import OrderItems from '../../components/Orders/OrderItems/OrderItems.tsx';
import MenuList from '../../components/Menu/MenuList.tsx';

const MenuPage = () => {

    const [menu, setMenu] = useState<IMenu[]>([
      {name: 'Cheeseburger', image: cheeseburgerImg, price: 100, count: 0},
      {name: 'Hotdog', image: hotdogImg, price: 80, count: 0},
      {name: 'Fries', image: friesImg, price: 60, count: 0},
      {name: 'Cola', image: colaImg, price: 40, count: 0},
      {name: 'Coffee', image: coffeeImg, price: 40, count: 0},
      {name: 'Tea', image: teaImg, price: 20, count: 0},
  ]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addProduct = (name: string) => {
      setMenu(prevState => {
          const newProduct = prevState.map(item =>
              item.name === name ? {...item, count: item.count + 1}: item
          );

          const newTotal: number = newProduct.reduce((acc, item) => {
              return acc + item.price * item.count;},0);

          setTotalPrice(newTotal)
          return newProduct;
      });
  };

    const deleteProduct = (name: string) => {
        setMenu(prevState => {
            const newProduct = prevState.map(item =>
                item.name === name ? {...item, count: Math.max(item.count - 1, 0)}: item
            );

            const newTotal: number = newProduct.reduce((acc, item)=> {
                return acc + item.price * item.count;
                }, 0)

            setTotalPrice(newTotal);
            return newProduct;
        });
    };

    return (
        <>
            <div className="container">
                <Orders
                    className='orders'
                    title='Order Details'
                    text={`${totalPrice} KGS`}
                > <OrderItems menu={menu} clickDeleteProduct={deleteProduct} />
                </Orders>

                <MenuList
                    menu={menu}
                    addProduct={addProduct}
                />
            </div>
        </>
    );
};

export default MenuPage;