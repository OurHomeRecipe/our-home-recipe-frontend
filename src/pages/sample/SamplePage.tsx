import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../appmain/RootStore";
import { sampleInit, changeSampleData } from '../../features/sample/sampleSlice';

const SamplePage: React.FC = () => {
    const dispatch = useAppDispatch(); // 디스패치 사용
    const sampleData = useAppSelector((state) => state.sample.sampleData); // sample 상태 조회
    const [newData, setNewData] = useState("");

    // sampleInit 액션을 디스패치하는 함수
    const handleSampleInit = () => {
        dispatch(sampleInit());
    };

    // changeSampleData 액션을 디스패치하는 함수
    const handleChangeSampleData = () => {
        dispatch(changeSampleData(newData));
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    const inputStyle = {
        padding: '10px',
        marginTop: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '300px'
    };

    const pStyle = {
        marginBottom: '20px'
    };

    const buttonWrapperStyle = {
        display: 'flex',
        gap: '10px', // 버튼 사이의 간격
        marginTop: '20px'
    };

    const containerStyle:any = {
        margin: 'auto',
        padding: '20px',
        width: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1>Sample Page</h1>
            <p style={pStyle}>현재 데이터: {sampleData}</p>

            <input
                type="text"
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
                placeholder="새로운 데이터 입력"
                style={inputStyle}
            />

            <div style={buttonWrapperStyle}>
                <button style={buttonStyle} onClick={handleSampleInit}>데이터 초기화</button>
                <button style={buttonStyle} onClick={handleChangeSampleData}>데이터 변경</button>
            </div>
        </div>
    );
};

export default SamplePage;