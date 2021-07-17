import React, { useEffect, useState } from 'react';
import './styles.scss'
import { Container, Card, DetailContainerStyled, DetailListStyled } from '../../components/styledComponent.styles'
import { connect } from 'react-redux';
import LoadingCover from '../../components/LoadingCover';
import { fetchForeCast, fetchToday } from '../../redux';
const Details = (props) => {

    return (
        <Container>
            <Card className="card-container">
                <DetailContainerStyled />
                <DetailListStyled />
            </Card>
      
        </Container>
    );
}


const mapStateToProps = state => {
    return {
        today: state.generalReducer.todays,
        forecast: state.generalReducer.fiveDaysList

    }
}

export default connect(mapStateToProps, { fetchForeCast, fetchToday })(Details);