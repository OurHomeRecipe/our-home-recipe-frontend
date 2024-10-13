import styled from "styled-components";

export const PageNumber = styled.p`
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 50%;
    color: ${props => props.isSelect ? 'white' : 'black'};
    background-color: ${props => props.isSelect ? 'orange' : 'none'};
    margin: 0px 15px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    
`