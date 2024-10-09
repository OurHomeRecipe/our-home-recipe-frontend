import prf from '../../../css/pages/profilepage.module.css'
import {MdEdit} from "react-icons/md";
import {NickName, ProfileImg, UserInfo} from './ProfilePage.style';


export default function ProfileUI({
    preview,
    newProfile, setNewProfile,
    editState, setEditState,
    fileInputRef,
    handleIconClick,
    handleImageChange,
    handleUpdateProfile
}) {
    return (
        <div className={prf.frame}>
            <ProfileImg preview={preview === null ? newProfile.profileImage : preview} >
                <MdEdit className={prf.profileImageEdit} onClick={handleIconClick}/>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}/>
            </ProfileImg>

            <div>
                <div className={prf.row}>
                    <p>닉네임</p>
                    <NickName
                        value={newProfile.nickname}
                        isReadOnly={editState.nickname}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            nickname: e.target.value
                        }))}
                    />
                    <MdEdit onClick={() => setEditState(prev => ({...prev, nickname: !prev.nickname}))}/>
                </div>

                <div className={prf.row}>
                    <p>이름</p>
                    <UserInfo
                        value={newProfile.name}
                        isReadOnly={editState.name}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            name: e.target.value
                        }))}
                    />
                </div>

                <div className={prf.row}>
                    <p>이메일</p>
                    <UserInfo
                        value={newProfile.email}
                        isReadOnly={editState.email}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            email: e.target.value
                        }))}
                    />
                </div>

                <div className={prf.row}>
                    <p>전화번호</p>
                    <UserInfo
                        value={newProfile.phoneNumber}
                        isReadOnly={editState.phoneNumber}
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            phoneNumber: e.target.value
                        }))}
                    />
                </div>

                <div className={prf.row}>
                    <p>자기소개</p>
                    <UserInfo
                        value={newProfile.introduce}
                        isReadOnly={editState.introduce}
                        as="textarea"
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            introduce: e.target.value
                        }))}
                    />
                    <MdEdit onClick={() => setEditState(prev => ({...prev, introduce: !prev.introduce}))}/>
                </div>
            </div>

            <button className={prf.saveButton} type='button' onClick={handleUpdateProfile}>저장</button>
        </div>
    );
}
