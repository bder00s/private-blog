import React from "react";
import {useHistory} from "react-router-dom";


function LoginPage() {
    const history = useHistory()
    function handleClick() {
        history.push("/blogposts/")
    }
    return (
        <button
            onClick={handleClick}
                type="button">
            Login
        </button>



    )
}

export default LoginPage