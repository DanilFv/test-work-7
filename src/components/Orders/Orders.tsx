import * as React from 'react';
import Label from '../Label/Label.tsx';


interface Props extends React.PropsWithChildren{
    title: string;
    className?: string;
    text: string;
}

const Orders: React.FC<Props> = ({title, className, children, text}) => {
    return (
        <div className='order-details'>
                <h3>{title}</h3>
                <div className={className}>
                    {children}
                </div>

            <Label className='total' text={text}/>
        </div>
    );
};

export default Orders;