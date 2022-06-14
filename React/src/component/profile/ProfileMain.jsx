import React from 'react';
import { useSelector } from 'react-redux';
import ProfileBody from './ProfileBody';
import AddPaperForm from './AddPaperForm';
import SelectUption from './SelectUption';

const ProfileMain = () => {
    const selectedUser = useSelector((state) => state.paper.selectedUser);
    const me = useSelector((state) => state.user.me);
    return <>{selectedUser?.uid === me?.uid ? <ProfileBody /> : <SelectUption />}</>;
};

export default ProfileMain;
