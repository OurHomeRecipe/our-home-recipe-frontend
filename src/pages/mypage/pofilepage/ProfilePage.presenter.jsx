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

            <div>
                <ProfileImg preview={preview === null ? newProfile.profileImage : preview} >
                    <MdEdit className={prf.profileImageEdit} onClick={handleIconClick}/>
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{display: 'none'}}/>
                </ProfileImg>

                <div className={prf.row}>
                    <NickName 
                        value={newProfile.nickname} 
                        isReadOnly={editState.nickname} 
                        onChange={(e) => setNewProfile(prev => ({
                            ...prev,
                            nickname: e.target.value
                        }))} 
                    />
                    <MdEdit onClick={() => setEditState(prev => ({...prev, nickname: !prev.nickname})) }/>
                </div>
            </div>

            <div>
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
                    <MdEdit onClick={() => setEditState(prev => ({...prev, name: !prev.name})) }/>
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
                    <MdEdit onClick={() => setEditState(prev => ({...prev, email: !prev.email})) }/>
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
                    <MdEdit onClick={() => setEditState(prev => ({...prev, phoneNumber: !prev.phoneNumber})) }/>
                </div>

                <div className={prf.row}>


                    <textarea placeholder='자기소개를 입력할 수 있습니다.'/>
                    <MdEdit/>
                </div>
            </div>

            <button className={prf.saveButton} type='button' onClick={handleUpdateProfile}>저장</button>

        </div>
    );
}
