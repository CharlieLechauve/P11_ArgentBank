import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute ({element}) {

    const token = useSelector ((state) => state.auth.token)

    if (token) {
        return element;
    } else {
        return <Navigate to ="/NotFound" replace/>;
    }
}

export default PrivateRoute