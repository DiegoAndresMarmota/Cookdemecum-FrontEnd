import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { useNavigate } from "react-router";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    const navigate = useNavigate();
    const path = "/";
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    
        useEffect(() => {
            if (userInfo) {
                navigate(path);
            }
        }, [userInfo]);
    }