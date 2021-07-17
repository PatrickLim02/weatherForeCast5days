import React, { useEffect, useState } from 'react';
import LoadingIcon from '../../assets/gif/weatherLoading.gif'
import { Icon} from '..//styledComponent.styles'
import './styles.scss'
const TodayComponent = (props) => {
    return (
        <Icon className="icon" src={LoadingIcon} />
    );
}

export default TodayComponent;
