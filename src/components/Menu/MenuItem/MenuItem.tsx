import Label from '../../Label/Label.tsx';
import Button from '../../Button/Button.tsx';
import type {IMenu} from '../../../types';
import * as React from 'react';

interface Props {
    item: IMenu;
    onClickItem: (name: string) => void;
}


const MenuItem: React.FC<Props> = ({item, onClickItem}) => {
    return (
        <Button
            className='item-card'
            type='button'
            onClick={() => onClickItem(item.name)}

        >
            <img
                width='100px'
                src={item.image}
                alt={item.name}
            />
            <div className="item-text-content">
                <Label className='item-name' text={item.name}/>
                <Label className='item-price' text={`${item.price} KGS`}/>
            </div>
        </Button>
    );
};

export default MenuItem;