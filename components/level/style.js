import styled from "styled-components";

const LevelComponent = styled.div`
    display: flex;
    align-items: center;
    padding: 24px 16px 8px 16px;
    gap: 8px;
`;

const LevelOne = styled.div`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    text-align: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    padding: 16px 16px 16px 16px;
    background-color: #28469C;
    color: white;
`;

const LevelTwo = styled(LevelOne)`
`;

const LevelThree = styled(LevelOne)`
`;

const DetailLevelBlue = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #28469C;
`;

const DetailLevelGray = styled(DetailLevelBlue)`
    background-color: #D9D9D9;
`;

export {LevelComponent, LevelOne, LevelTwo, LevelThree, DetailLevelBlue, DetailLevelGray};