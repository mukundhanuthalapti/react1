import React, { useState } from "react";

const Register = () => {
  const [logindata, setLoginData] = useState({
    username: "",
    mobileno: "",
    emailid: "",
  });
  const inputChangeHandler = (e) => {
    //setLoginData({ ...logindata, [e.target.name]: e.target.value });
    if (e.target.name === "username") {
      if (e.target.value.length > 9) {
        alert("Your Reached 9 Characters");

        return;
      }
    }
    if (e.target.name === "mobileno") {
      if (e.target.value.length > 10) {
        alert("Mobile No Not to Excced 10 No's");

        return;
      }
    }
    setLoginData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const submitHandler = () => {};
  return (
    <div className="register-container">
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          value={logindata.username}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobileno">MobileNo</label>
        <input
          type="text"
          name="mobileno"
          value={logindata.mobileno}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="emailid">Email Id</label>
        <input type="text" name="emailid" onChange={inputChangeHandler} />
      </div>
      <div className="form-group">
        <button onClick={submitHandler}>Save</button>
      </div>
    </div>
  );
};

export default Register;
