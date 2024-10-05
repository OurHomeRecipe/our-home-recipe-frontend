import prf from '../../../css/pages/profilepage.module.css'
import {MdEdit} from "react-icons/md";
import {NickName, ProfileImg, UserInfo} from './ProfilePage.style';



export default function ProfileUI({
    preview,
    nickname, nicknameEdit,
    name, nameEdit,
    email, emailEdit,
    phonNumber,
    handleIconClick,
    handleImageChange,
    fileInputRef,phonNumberEdit,
    setNickname, setNickNameEdit,
    setName, setNameEdit,
    setEmail, setEmailEdit,
    setPhonNumber, setPhonNumberEdit,
    handleUpdateProfile
}) {


    return (
        <div className={prf.frame}>

            <div>
                <ProfileImg preview={preview}>
                    <MdEdit className={prf.profileImageEdit} onClick={handleIconClick}/>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange}
                           style={{display: 'none'}}/>
                </ProfileImg>

                <div className={prf.row}>
                    <NickName value={nickname} isReadOnly={nicknameEdit} onChange={(e) => setNickname(e.target.value)}/>
                    <MdEdit onClick={() => setNickNameEdit((edit) => !edit)}/>
                </div>
            </div>

            <div>
                <div className={prf.row}>
                    <p>이름</p>
                    <UserInfo value={name} isReadOnly={nameEdit} onChange={(e) => setName(e.target.value)}/>
                    <MdEdit onClick={() => setNameEdit((edit) => !edit)}/>
                </div>

                <div className={prf.row}>
                    <p>이메일</p>
                    <UserInfo value={email} isReadOnly={emailEdit} onChange={(e) => setEmail(e.target.value)}/>
                    <MdEdit onClick={() => setEmailEdit((edit) => !edit)}/>
                </div>

                <div className={prf.row}>
                    <p>전화번호</p>
                    <UserInfo value={phonNumber} isReadOnly={phonNumberEdit}
                              onChange={(e) => setPhonNumber(e.target.value)}/>
                    <MdEdit onClick={() => setPhonNumberEdit((edit) => !edit)}/>
                </div>

                <div className={prf.row}>


                    <textarea placeholder='자기소개를 입력할 수 있습니다.'/>
                    <MdEdit/>
                </div>
            </div>

            <button className={prf.saveButton} onClick={handleUpdateProfile} type='button'>저장</button>

        </div>
    );
}
