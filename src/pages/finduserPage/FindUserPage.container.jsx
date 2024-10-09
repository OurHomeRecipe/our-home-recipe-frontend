import React, {useState} from 'react'
import FindUserUI from './FindUserPage.presenter'
import {useFindUserResetPassword} from "../../api/queries/findUserQuery";

export default function FindUserPage() {
    const {handleResetPassword} = useFindUserResetPassword();
    const [data, setData] = useState({
        email: '',
        name: '',
        phoneNumber: ''
    });


    // 유효성 검사 메서드
    const validateResetPasswordInputs = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(data.email)) {
            alert("유효한 이메일을 입력해주세요.");
            return false;
        }

        const nameRegex = /^[가-힣a-zA-Z]{2,20}$/;
        if (!nameRegex.test(data.name)) {
            alert("유효한 이름을 입력해주세요.");
            return false;
        }

        const phonNumberRegex = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
        if (!phonNumberRegex.test(data.phoneNumber)) {
            alert("유효한 핸드폰 번호를 입력해주세요.");
            return false;
        }

        return true;
    }

    // 비밀번호 찾기 버튼 클릭 시 실행되는 함수
    const resetPassword = () => {
        if (validateResetPasswordInputs()) {
            handleResetPassword(data);
        }
    }

    return (
        <FindUserUI
            data={data}
            setData={setData}
            resetPassword={resetPassword}
        />
    )
}
