import React, { useEffect, useState } from 'react';
import { Card, TodayInfo, TodayTemp, TodayLabel, Icon , Content } from '../styledComponent.styles';
import { celciusConverter, findIcon } from '../../helpers/general';
import './styles.scss'
import moment from 'moment'
import {connect} from 'react-redux';
const DetailList = (props) => {
    const { detaildata, className ,today,forecast} = props;
    const convertDate = detaildata?.dt_txt.split(' ')[0]
    return (
        <div className={className} {...props}>
            {forecast?.list?.map((item,index)=>{
                console.log(item)
                if(item.dt_txt.includes(convertDate)){
                   return(
                    <Content className="conten-container">
                        <TodayLabel fontWeight="bolder" fontSize="22px">{moment(item.dt_txt).format("hh:mm a")}</TodayLabel>
                        <TodayLabel fontWeight="bolder" fontSize="22px">{item.weather[0].description}</TodayLabel>
                        <TodayLabel fontWeight="light" fontSize="22px">{celciusConverter(item.main.temp_max)}&#8451; / {celciusConverter(item.main.temp_min)}&#8451;</TodayLabel>
                        <Icon className="icon-list" src={findIcon(item.weather[0].icon)} />
                    </Content>
                   )
                }
            })}
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        today: state.generalReducer.todays,
        detaildata : state.generalReducer.details.data,
        forecast : state.generalReducer.fiveDaysList

    }
}

export default connect(mapStateToProps)(DetailList);
