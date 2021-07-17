import React, { useEffect, useState } from 'react';
import './styles.scss'
import HourList from './partials/HourlyList';
import DaysList from './partials/5DaysList';
const SlideItem = (props) => {
    const {fiveDaysList, type} = props;

   const renderItems = () =>{
    if(type === 'hour'){
        return <HourList />
    }
    if(type === 'days'){
        return <DaysList />
    }
    return <HourList />
   }
    return (
        <div {...props}>
            {renderItems()}
        </div>
    )
}

export default SlideItem;
