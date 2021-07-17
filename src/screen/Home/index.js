import React, { useEffect, useState } from 'react';
import './styles.scss'
import { Container, Card , TodayContainerStyled, FlatListStyled, SlideItemsStyled} from '../../components/styledComponent.styles'
import {connect} from 'react-redux';
import LoadingCover from '../../components/LoadingCover';
import {fetchForeCast,fetchToday} from '../../redux';
const Home = (props) => {
    const {today, forecast} = props;
    const [filter, setFilter] = useState('');
    const [buffer, setBuffer] = useState(true);

    const filtercallback = (value) =>{
        console.log('callback value : ', value)
        setFilter(value);
    }

    useEffect(() => {
        props.fetchForeCast();
        props.fetchToday();
        setBuffer(false)
    }, [])
if(buffer){
    return <LoadingCover />
}
    return (
        <Container>
            <Card className="card-container">
               <TodayContainerStyled/>
               <FlatListStyled filtercallback={filtercallback} />
               <SlideItemsStyled type={filter} />
            </Card>
        </Container>
    );
}


const mapStateToProps = state =>{
    return {
        today: state.generalReducer.todays,
        forecast : state.generalReducer.fiveDaysList

    }
}

export default connect(mapStateToProps, {fetchForeCast,fetchToday})(Home);