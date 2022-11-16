import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";
import Messages from "./Messages";
import Loader from "./Loader";
import { getSoloUser, editUser } from "../actions/userActions";
import { USER_EDIT_RESET } from "../constants/userConstants";

export default function EditProfile() {

    const [user_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();
    const path = '/miPerfil';
    const dispatch = useDispatch();
    
    const userSolo = useSelector(state => state.userSolo);
    const { error, loading, user } = userSolo;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const userEdit = useSelector(state => state.userEdit);
    const { success } = userEdit;

    useEffect(() => {
        if (userInfo.id !== user.id) {
            dispatch({ type: USER_EDIT_RESET });
            dispatch(getSoloUser('SoloUser'));
        } else {
            setUserName(user.user_name);
            setEmail(user.email);
            setBio(user.bio);
            setImage(user.image);
        }
    }, [dispatch, user, success, userInfo])


    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords must match ')
        } else {
            dispatch(editUser({
                'id': user.id,
                'user_name': user_name,
                'email': email,
                'bio': bio,
                'image': image,
                'password': password,
            }))
            navigate(path);

        }
    }
}

const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    formData.append('user_id', user.id)

    setUploading(true)

    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('http://127.0.0.1:8000/users/image/', formData, config)

        setImage(data)
        setUploading(false)

    } catch (error) {
        setUploading(false)
    }
}
  
return (

)