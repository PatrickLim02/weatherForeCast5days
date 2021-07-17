import React, { useEffect, useState } from 'react';
import { FlexContent ,Content, TodayLabel, Icon} from '../../../styledComponent.styles'
import { celciusConverter, findIcon } from '../../../../helpers/general';
import moment from 'moment';
import '../../styles.scss'
import { connect } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import {setDetails} from '../../../../redux';
const DaysList = (props) => {
    const history = useHistory();
    const { fiveDaysList } = props;
    const date = new Date();
    const convertDate = date.toISOString().split('T')[0];
    const directDetailScreen = (item) =>{
        props.setDetails({data : item})
        history.push('details')
    }
    return (
        <FlexContent>
           {fiveDaysList?.list?.map((item,index) => {
               if(item.dt_txt.includes('12:00:00')){
                   console.log(item);
                    return(
                        <Content onClick={()=> directDetailScreen(item)} paddingBottom="4%" paddingTop="4%" padding="2%" className="content-container">
                          <TodayLabel fontSize="30px">{moment(item.dt_txt).format("dddd")}</TodayLabel>
                            <Icon src={findIcon(item.weather[0].icon)} />
                            <TodayLabel fontSize="22px">{celciusConverter(item.main.temp)} &#8451;</TodayLabel>
                        </Content>
                        
                    )
                }
           })}
           
        </FlexContent>
    );
}

const mapStateToProps = (state) => {
    return {
        fiveDaysList: state.generalReducer.fiveDaysList,
    }
}

export default connect(mapStateToProps,{setDetails})(DaysList);
