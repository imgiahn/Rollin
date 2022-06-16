import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
const Profile2 = () => {
    const dispatch = useDispatch();

    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const getProfile = async () => {
        try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url: '/v2/user/me',
            });
            // 사용자 정보 변수에 저장
            setUserId(data.id);
            setNickName(data.properties.nickname);
            setProfileImage(data.properties.profile_image);

            await axios({
                method: 'post',
                url: 'http://localhost:8000/user',
                data: {
                    userId: data.id,
                    name: data.properties.nickname,
                    img: data.properties.profile_image,
                },
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProfile();
    }, []);
    return (
        <div>
            <h2>{user_id}</h2>
            <h2>{nickName}</h2>
            <img src={profileImage}></img>
        </div>
    );
};
export default Profile2;
