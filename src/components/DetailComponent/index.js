import React, { useEffect, useState } from 'react';
import { Card, TodayInfo, TodayTemp, TodayLabel, Icon } from '../styledComponent.styles';
import { celciusConverter, findIcon } from '../../helpers/general';
import './styles.scss'
import moment from 'moment'
import {connect} from 'react-redux';
const DetailComponent = (props) => {
    const { detaildata, className ,today} = props;
    const date = new Date();
    console.log(date.toString().split('T')[0]);
    return (
        <div className={className} {...props}>
            <TodayInfo>
                <TodayLabel fontWeight="bold" letterSpacing="2px" fontSize="32px">{today?.name}</TodayLabel>
                <TodayLabel fontWeight="bold" fontSize="16px">{moment(detaildata?.dt_txt).format("dddd, MMMM Do YYYY")}</TodayLabel>
                <Icon src={findIcon(detaildata?.weather? detaildata?.weather[0]?.icon : null)} />
                <TodayLabel fontWeight="bold" fontSize="30px">{detaildata?.weather ? detaildata?.weather[0]?.description : null}</TodayLabel>
            </TodayInfo>
            <TodayTemp>
                <TodayLabel fontWeight="light" fontSize="72px">{celciusConverter(detaildata?.main?.temp)}&#8451;</TodayLabel>
                <TodayInfo className="temp-container">
                    <TodayLabel className="max_temp" fontWeight="lighter" fontSize="32px">{celciusConverter(detaildata?.main?.temp_max)}&#8451;</TodayLabel>
                    <TodayLabel className="max_temp" fontWeight="lighter" fontSize="32px">/</TodayLabel>
                    <TodayLabel className="min_temp" fontWeight="lighter" fontSize="32px">{celciusConverter(detaildata?.main?.temp_min)}&#8451;</TodayLabel>
                </TodayInfo>
            </TodayTemp>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        today: state.generalReducer.todays,
        detaildata : state.generalReducer.details.data,
    }
}

export default connect(mapStateToProps)(DetailComponent);
