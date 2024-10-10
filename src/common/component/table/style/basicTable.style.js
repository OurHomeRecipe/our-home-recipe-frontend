import styled from "styled-components";

export const PreviewImg = styled.div`
    background: url(${(props) => props.preview}) no-repeat;
    background-size: 100%;
    display: flex;
    width: 178px;
    height: 159px;
    border-radius: 10px;
    background-color: #f1f1f1;
    align-items: center;
    justify-content: center;
`;