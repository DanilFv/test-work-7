import type {IMenu} from '../../types';
import * as React from 'react';
import MenuItem from './MenuItem/MenuItem.tsx';


interface Props {
    menu: IMenu[];
    addProduct: (name: string) => void;
}

const MenuList: React.FC<Props> = ({menu, addProduct}) => {
    return (
         <div className='add-items'>
             <h3>Add items</h3>
             <div className='items-grid'>
                 {menu.map((item) => {
                     return (
                         <MenuItem
                             key={item.name}
                             item={item}
                             onClickItem={addProduct}
                         />
                     )
                 })}
             </div>
         </div>
    );
};

export default MenuList;