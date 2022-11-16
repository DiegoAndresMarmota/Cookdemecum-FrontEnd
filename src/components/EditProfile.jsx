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

}

return (

)