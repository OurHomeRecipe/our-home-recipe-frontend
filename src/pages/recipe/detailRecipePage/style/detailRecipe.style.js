import styled from "styled-components";

export const RecipeImage = styled.div`
    background: url(${(props) => props.image}) no-repeat;
    background-size: 100%;
    background-position: center;
    width: 900px;
    height: 550px;
    position: relative;
    border-radius: 30px;
`

export const ProfileImg = styled.div`
    background: url(${(props) => props.image}) no-repeat;
    background-size: 100%;
    background-position: center;
    background-color: lightgray;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 10px solid white;
    position: absolute;
    bottom: -16%;
    right: 39%;
`