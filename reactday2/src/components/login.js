import { useState, useEffect } from "react";

function Login() {
    const [loginForm, setLoginForm] = useState({
        emailField: "",
        password: ""
    });

    const [loginFormErr, setloginFormErr] = useState({
        emailFieldErr : "",
        passwordErr : ""
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    useEffect(() => {
        console.log(loginForm);
    }, [loginForm])

    const formHandler = (e)=>{

        let pattern;

        if (e.target.name === "emailField"){
            pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            setLoginForm({...loginForm, emailField: e.target.value});
            setloginFormErr({...loginFormErr, emailFieldErr: !e.target.value.length 
                ? "This field is required..." 
                : pattern.test(e.target.value) 
                ? null
                : "Enter a valid email"});
        } else {
            pattern = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

            setLoginForm({...loginForm, password: e.target.value});
            setloginFormErr({...loginFormErr, passwordErr: !e.target.value.length 
                ? "This field is required..." 
                : pattern.test(e.target.value) 
                ? "Enter a valid password" 
                : null});
        }
    }

    return (
        <div className="card d-flex border-0 text-start justify-content-center align-items-center h-100 w-100">
            <form className="card-body m-5 w-50">
                <p className="display-4 mb-5 card-header text-center">Login Form</p>
                <div className="my-4">
                    <label htmlFor="exampleInputEmail1" className="form-label text-start">Email address</label>
                    <input type="text" name="emailField" onChange={(e) => formHandler(e)} value={loginForm.emailField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div className="text-danger">
                        <small>
                            {loginFormErr.emailFieldErr}
                        </small>
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="exampleInputPassword1" className="form-label text-start">Password</label>
                    <input type={passwordShown ? "text" : "password"} name="passwordField" onChange={(e) => formHandler(e)} value={loginForm.password} className="form-control" id="exampleInputPassword1" required />
                    <div className="btn btn-secondary btn-sm my-2" onClick={()=> togglePassword()}>Show Password</div>
                    <div className="text-danger">
                        <small>
                            {loginFormErr.passwordErr}
                        </small>
                    </div>
                </div>
                <button type="submit" type="submit" disabled={loginFormErr.emailFieldErr || loginFormErr.passwordErr}  className="btn btn-primary mt-5" > Submit</button >
            </form >

        </div>
    )
}

export default Login;