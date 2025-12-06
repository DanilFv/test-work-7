import React from 'react';
import Label from '../../Label/Label.tsx';
import Button from '../../Button/Button.tsx';
import type {IMenu} from '../../../types';

interface Props {
    menu: IMenu[];
    clickDeleteProduct: (name: string) => void;
}


const OrderItems:React.FC<Props> = ({menu, clickDeleteProduct}) => {

    const selectedProduct = menu.filter(item => item.count > 0);

    return (
        <>
            {selectedProduct.length === 0
                ? <Label className='none-items' text='No products yet'/>
                : selectedProduct.map(item => (
                    <div className='order-items' key={item.name}>
                        <Label className='item-name-order' text={item.name}/>
                        <Label className='item-count-order' text={`x ${item.count}`}/>
                        <Label className='item-price-order' text={`${item.price} KGS`}/>
                        <Button className='delete-btn' type='button' onClick={() => clickDeleteProduct(item.name)}>X</Button>
                    </div>
                ))
            }
        </>
    )
};

export default OrderItems;
