import styled from "styled-components";

export const ProfileImg = styled.div`
    background: url(${(props) => props.preview}) no-repeat;
    background-size: 100%;
    width: 250px;
    height: 250px;
    background-color: lightgray;
    border-radius: 50%;
    position: relative;
`;

export const NickName = styled.input.attrs((props) => ({readOnly: props.isReadOnly, type:'text' }))`
    font-size: 18px;
    border: none;
    background-color: ${(props) => props.isReadOnly ? '#ffe191' : 'white'} ;
    border-radius: 10px;
    border: ${(props) => props.isReadOnly ? 'none' : '1px solid #ffe191'};
`;

export const UserInfo = styled.input.attrs((props) => ({readOnly: props.isReadOnly, type:'text' }))`
    font-size: 15px;
    border: none;

    background-color: ${(props) => props.isReadOnly ? '#ffe191' : 'white'} ;
    border-radius: 10px;
    border: ${(props) => props.isReadOnly ? 'none' : '1px solid #ffe191'};
`;