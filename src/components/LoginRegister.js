import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

const LoginRegister = () => {
    const [loginRegisterController, setLoginRegisterController] = useState(true);
    return(
        <div>
            {loginRegisterController === true && <Login setLoginRegisterController={setLoginRegisterController}/>}
            {loginRegisterController === false && <Register setLoginRegisterController={setLoginRegisterController}/>}
        </div>
    )
}

export default LoginRegister;