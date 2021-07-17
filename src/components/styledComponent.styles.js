import styled from 'styled-components'
import stylesVar from '../shared/stylesVar';
import TodayContainer from './TodayComponent';
import DetailContainer from './DetailComponent';
import FlatList from './FlatList';
import SlideItems from './SlideItems';
import DetailList from './DetailListComponent';
//IMPORT COMPONENT
export const TodayContainerStyled = styled(TodayContainer)`
    display:flex;
    justify-content:space-between;
`
export const DetailContainerStyled = styled(DetailContainer)`
    display:flex;
    justify-content:space-between;
`
export const FlatListStyled = styled(FlatList)`
    border-bottom: 1px solid ${stylesVar.theme.whiteGrey};
    margin-top: 5%;
`
export const SlideItemsStyled = styled(SlideItems)``

export const DetailListStyled = styled(DetailList)`
    margin-top: 10px;
    border-top: 1px solid ${stylesVar.theme.whiteGrey}
`

//SINGLE TAG COMPONENT
export const FlexContent = styled.div`
    display: flex;
    justify-content:space-between;
    overflow: scroll;
    width: 100%
`
export const Content = styled.div`
    background-color: rgba(100,200,225,0.4);
    padding: ${(props)=>props.padding};
    padding-top: ${(props) => props.paddingTop};
    padding-bottom:  ${(props) => props.paddingBottom};
    margin-top: 20px;
`
export const Button = styled.button`
    background-color: unset;
    border: unset;
    font-weight: bold;
    color : ${(props) => props.color};
    border-bottom : ${(props) => props.borderBottom};
    cursor:pointer
`
export const Container = styled.div`
    background-image: linear-gradient(to bottom, ${stylesVar.theme.blue2}, ${stylesVar.theme.light2});
    height: 100vh;
`
export const Card = styled.div`
    width: 60%;
    opacity: 0.5;
    margin-left: 15%;
    margin-top: 10%;
    position: absolute;
    overflow:scroll;
    border-radius: 20px;
    padding : 50px;
    padding-left: 80px;
    padding-right: 80px;
    height: 60%;
`
export const TodayInfo = styled.div``

export const TodayLabel = styled.div`
        color: white;
       font-weight: ${(props) => props.fontWeight};
        font-size: ${(props) => props.fontSize};
        letter-spacing: ${(props) => props.letterSpacing};
    
`
export const TodayTemp = styled.div``

export const Icon = styled.img`
    width: 80px;
`


