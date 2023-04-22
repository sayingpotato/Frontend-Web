import styled from "styled-components";

const UserInfo = styled.div`
    background-color : #28469C;
    height : 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const UserName = styled.p`
    font-size : 30px;
    font-weight : 800;
    color : white;

`

const DiscountDiv = styled.div`
    display:block;
`

const MoneyTitle = styled.p`
    font-size : 10px;
    color : white;
    font-weight : 800;
    margin-left : 30px;
    margin-bottom : 0px;
`

const MoneyDiv = styled.div`
    display : flex;
    align-items: center;
    margin-top : 0px;
`

const Money = styled.p`
    font-size : 10px;
    color : white;
    font-weight : 800;
`

const BackDiv = styled.div`
    background-color : #EFEFEF;
    padding : 20px 30px 20px 30px;
    height : 80vh;
`

const DiscountInfo = styled.div`
    border : 1px solid #999999;
    border-radius : 10px;
    height : 20vh;
`

const DiscountTitle = styled.p`
    font-size : 15px;
    font-weight : 800;
    text-align : center;
    text-decoration: underline;
    text-decoration-color : #999999;
    text-underline-offset : 5px;
    margin-top : 5px;
`

const ButtonWholeDiv = styled.div`
    height : 8vh;
    border : 1px solid #999999;
    border-radius : 10px;

    link {
        text-decoration: none;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonTitle = styled.p`
    font-size : 15px;
    font-weight : 800;
`

export {UserInfo, UserName, DiscountDiv, MoneyTitle, MoneyDiv, Money, BackDiv, DiscountInfo, DiscountTitle, ButtonWholeDiv, ButtonDiv, ButtonTitle}