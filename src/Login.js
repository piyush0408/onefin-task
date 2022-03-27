import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

const Login = () => {
  let token;
  // const [to, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [buttonStatus, setButtonStatus] = useState(false);
  //   if (username && password) {
  //     setButtonStatus(true);
  //   }

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(inputs);
  //     alert(inputs);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginData = { ...inputs };
    console.log(loginData);
    setButtonStatus(true);

    fetch("https://demo.credy.in/api/v1/usermodule/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        setButtonStatus(false);
        // setButtonStatus(true);
        if (data.is_success) {
          token = data.data.token;
          console.log(token);
          Cookies.set("token", token);
          navigate("/movie");
          toast.success("login Successfull");
        } else {
          toast.error("Invalid username and password");
          //   navigate("/movies");
        }
        console.log(data.is_success);
      })
      .catch((error) => alert(error));

    // console.log(username, password);
  };

  return (
    <div className="loginBackground">
      <Toaster />
      <div className="loginContainer">
        <div className="loginLeftSide">
          <div className="loginLeftHeading1">MovieBiz</div>

          <div className="loginLeftHeading2">
            what is MovieBiz?
            <BsFillArrowRightCircleFill className="arrow" />
          </div>
        </div>

        <div className="loginRightSide">
          <p className="loginRightHeading1">Log In</p>

          <div className="googleAuthentication">
            <FcGoogle className="googleIcon" /> google authentication
          </div>

          <p className="or">
            <span>or</span>
          </p>

          <form onSubmit={handleSubmit} className="loginForm">
            <p>Enter your name:</p>
            <input
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
              placeholder="username"
              required
            />

            <p>Enter your password:</p>
            <input
              type="text"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
              placeholder="password"
              required
            />

            <button type="submit" disabled={buttonStatus}>
              Submit
            </button>
          </form>

          <p className="forgotPassword">forgot password?</p>
          <div className="LoginRightSideFooter">
            <p>
              Don't have account? <span style={{ color: "blue" }}>SignUp</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
