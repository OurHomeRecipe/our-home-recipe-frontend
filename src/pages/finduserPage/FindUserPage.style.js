import styled from "styled-components";

export const InputBox = styled.input.attrs((props) => ({type: 'text', placeholder: props.placeholder}))`
    font-size: 15px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #ffe191;
`;