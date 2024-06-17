import React, { useState } from "react";
// import emailIcon from "../../assets/img/email.svg";
// import passwordIcon from "../../assets/img/password.svg";
import styles from "./SignUp.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast.js";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});
  const [itsFine, setItsFine] = useState(false);

  const navigate = useNavigate();

  const chaeckData = (obj) => {
    const { email, password } = obj;
    const emailAddress = 'radu.ceaca@gmail.com';
    const passwordText = 'aaa';
    const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
    // const api = axios
    //   .get(urlApi)
    //   .then((response) => response.data)
    //   .then((data) => (!data.ok ? notify("You login to your account successfully", "success") : notify("Your password or your email is wrong", "error")));
    
    if (email.toLowerCase === emailAddress.toLowerCase && password === passwordText)
       {
            notify("You login to your account successfully", "success")
            console.log(email.toLowerCase === emailAddress)
            setItsFine(true)
            
        }
    else
        {
            console.log(passwordText)
            console.log(email.toLowerCase === emailAddress.toLowerCase)
            notify("Your password or your email is wrong", "error")
        }

  };

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    chaeckData(data);
    if (itsFine === true) {
        navigate("/comment")
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formLogin} onSubmit={submitHandler} autoComplete="off">
        <h2>Sign In</h2>
        <div>
          <div>
            <input type="text" name="email" value={data.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            <img src={""} alt="" />
          </div>
        </div>
        <div>
          <div>
            <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            <img src={""} alt="" />
          </div>
        </div>

        <div>
          <button type="submit">Login</button>
          <span style={{ color: "#fff", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have a account? <Link to="/signup">Create account</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;