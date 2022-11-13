import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSoloUser } from "../actions/userActions";

import Messages from "./Messages";
import Loader from "./Loader";

export default function UserProfile() {
    
    const { id } = useParams();

    const dispatch = useDispatch()

    const userSolo = useSelector(state => state.userSolo)
    const { loading, error, user } = userSolo

    useEffect(() => {
        dispatch(getSoloUser(id));
        dispatch(listBlogs());
    }, [dispatch])



    
}
