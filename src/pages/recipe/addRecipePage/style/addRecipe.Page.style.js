import styled from "styled-components";

export const FoodImg = styled.div`
    background: url(${(props) => props.preview}) no-repeat;
    background-size: 100%;
    display: flex;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    background-color: #f1f1f1;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    cursor: pointer;
`