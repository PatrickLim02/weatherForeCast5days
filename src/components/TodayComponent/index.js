import React, { useEffect, useState } from 'react';
import { Card, TodayInfo, TodayTemp, TodayLabel, Icon } from '../styledComponent.styles';
import { celciusConverter, findIcon } from '../../helpers/general';
import './styles.scss'
import moment from 'moment'
import {connect} from 'react-redux';
const TodayComponent = (props) => {
    const { todaydata, className } = props;
    const date = new Date();
    console.log(date.toString().split('T')[0]);
    return (
        <div className={className} {...props}>
            <TodayInfo>
                <TodayLabel fontWeight="bold" letterSpacing="2px" fontSize="32px">{todaydata?.name}</TodayLabel>
                <TodayLabel fontWeight="bold" fontSize="16px">{moment(date).format("dddd, MMMM Do YYYY")}</TodayLabel>
                <Icon src={findIcon(todaydata?.weather? todaydata?.weather[0]?.icon : null)} />
                <TodayLabel fontWeight="bold" fontSize="30px">{todaydata?.weather ? todaydata?.weather[0]?.description : null}</TodayLabel>
            </TodayInfo>
            <TodayTemp>
                <TodayLabel fontWeight="light" fontSize="72px">{celciusConverter(todaydata?.main?.temp)}&#8451;</TodayLabel>
                <TodayInfo className="temp-container">
                    <TodayLabel className="max_temp" fontWeight="lighter" fontSize="32px">{celciusConverter(todaydata?.main?.temp_max)}&#8451;</TodayLabel>
                    <TodayLabel className="max_temp" fontWeight="lighter" fontSize="32px">/</TodayLabel>
                    <TodayLabel className="min_temp" fontWeight="lighter" fontSize="32px">{celciusConverter(todaydata?.main?.temp_min)}&#8451;</TodayLabel>
                </TodayInfo>
            </TodayTemp>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        todaydata : state.generalReducer.todays,
    }
}

export default connect(mapStateToProps)(TodayComponent);
