import React, { useEffect, useState } from 'react';
import { Button } from '../styledComponent.styles';
import './styles.scss'
import stylesVar from '../../shared/stylesVar'
const FlatList = (props) => {
    const { className, filtercallback } = props;
    const [type , setType] = useState('hour');
    const data = [
        {name : 'Today', value : 'hour'},
        {name : '5 Forecast Days', value: 'days'}
    ]
    const filter = async (item) =>{
        await filtercallback(item.value)
        setType(item.value)
    }
    return (
        <div className={className} {...props}>
            {data.map((item,index)=>(
                <Button borderBottom={type === item.value ? '1px solid white' : null} color={type === item.value ? 'white' : stylesVar.theme.blue1} className="btn-filter" key={index} onClick={()=> filter(item)}>{item.name}</Button>
            ))}
        </div>
    );
}

export default FlatList;
