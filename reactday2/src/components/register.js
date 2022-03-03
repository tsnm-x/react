import { useState, useEffect } from "react";

function Register() {
    const [registerForm, setRegisterForm] = useState({
        name: "",
        emailField: "",
        userName: "",
        password: "",
        confirmPassword: "",
    });

    const [registerFormErr, setRegisterFormErr] = useState({
        namErr: "",
        emailFieldErr: "",
        userNameErr: "",
        passwordErr: "",
        confirmPasswordErr: ""
    });

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    useEffect(() => {
        console.log(registerForm);
    }, [registerForm])

    const formHandler = (e) => {

        let pattern;

        switch (e.target.name) {
            case "nameField":

                setRegisterForm({ ...registerForm, name: e.target.value });
                setRegisterFormErr({
                    ...registerFormErr, namErr: !e.target.value.length
                        ? "This field is required..."
                        : null
                });

            break;
            case "emailField":

                pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


                setRegisterForm({ ...registerForm, emailField: e.target.value });
                setRegisterFormErr({
                    ...registerFormErr, emailFieldErr: !e.target.value.length
                        ? "This field is required..."
                        : pattern.test(e.target.value)
                            ? null
                            : "Enter a valid email"
                });
            break;
            case "userNameField":

                pattern = /^[A-Za-z]+$/;

                setRegisterForm({ ...registerForm, userName: e.target.value });
                setRegisterFormErr({
                    ...registerFormErr, userNameErr: !e.target.value.length
                        ? "This field is required..."
                        : pattern.test(e.target.value)
                            ? null
                            : "Enter a valid username"
                });

            break;
            case "passwordField":

                pattern = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;

                setRegisterForm({ ...registerForm, password: e.target.value });
                setRegisterFormErr({
                    ...registerFormErr, passwordErr: !e.target.value.length
                        ? "This field is required..."
                        : pattern.test(e.target.value)
                            ? "Enter a valid password"
                            : null
                });
            break;
            case "confirmPasswordField":

                setRegisterForm({ ...registerForm, confirmPassword: e.target.value });
                setRegisterFormErr({
                    ...registerFormErr, confirmPasswordErr: !e.target.value.length
                        ? "This field is required..."
                        : registerForm.password === e.target.value
                            ? null
                            : "Invalid"
                });

            break;
        }
    }

    return (
        <div className="card d-flex border-0 text-start justify-content-center align-items-center h-100 w-100">
            <form className="card-body m-5 w-50">
                <p className="display-4 mb-5 card-header text-center">Registration Form</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" name="nameField" onChange={(e) => formHandler(e)} value={registerForm.name} className="form-control" id="exampleInputName" />
                    <div className="text-danger">
                        <small>
                            {registerFormErr.namErr}
                        </small>
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="exampleInputEmail1" className="form-label text-start">Email address</label>
                    <input type="text" name="emailField" onChange={(e) => formHandler(e)} value={registerForm.emailField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div className="text-danger">
                        <small>
                            {registerFormErr.emailFieldErr}
                        </small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputUserName" className="form-label">User Name</label>
                    <input type="text" name="userNameField" onChange={(e) => formHandler(e)} value={registerForm.userName} className="form-control" id="exampleInputUserName" />
                    <div className="text-danger">
                        <small>
                            {registerFormErr.userNameErr}
                        </small>
                    </div>
                </div>
                <div className="my-4">
                    <label htmlFor="exampleInputPassword1" className="form-label text-start">Password</label>
                    <input type="password" name="passwordField" onChange={(e) => formHandler(e)} value={registerForm.password} className="form-control" id="exampleInputPassword1" required />
                    <div className="btn btn-secondary btn-sm my-2" onClick={()=> togglePassword()}>Show Password</div>
                    <div className="text-danger">
                        <small>
                            {registerFormErr.passwordErr}
                        </small>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                    <input type="text" name="confirmPasswordField" onChange={(e) => formHandler(e)} value={registerForm.confirmPassword} className="form-control" id="exampleInputPassword2" />
                    <div className="text-danger">
                        <small>
                            {registerFormErr.confirmPasswordErr}
                        </small>
                    </div>
                </div>
                <button 
                type="submit" disabled={registerFormErr.userNameErr 
                || registerFormErr.namErr 
                || registerFormErr.emailFieldErr 
                || registerFormErr.passwordErr 
                || registerFormErr.confirmPasswordErr} 
                className="btn btn-primary mt-5">
                    Submit
                </button >
            </form >

        </div>
    )
}

export default Register;