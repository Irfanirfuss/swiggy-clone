import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";

function Login() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [showNumber, setShowNumber] = useState(true);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    const [number, setNumber] = useState("");
    const [count, setCount] = useState(60);

    const formValadation = (event) => {
        event.preventDefault();

        if (number.length === 10) {
            let otp = "";
            for (let i = 1; i <= 4; i++) {
                otp += Math.ceil(Math.random() * 9);
            }

            setOtp(otp);
            setShowNumber(false);
            alert(`Your OTP is ${otp}`);
            let count = 60;
            let timer = setInterval(() => {
                count -= 1;
                setCount(count);
                if (count === 0) {
                    clearInterval(timer);

                    setShowNumber(true);
                }
            }, 1000);
        } else {
            alert("Please Valid Number");
        }
    };

    const inputValue = (event) => {
        setValue1(event.target.value);
    };

    const inputValue2 = (event) => {
        setValue2(event.target.value);
    };
    const inputValue3 = (event) => {
        setValue3(event.target.value);
    };
    const inputValue4 = (event) => {
        setValue4(event.target.value);
    };

    const validate = (event) => {
        event.preventDefault();

        const values = value1 + value2 + value3 + value4;
        if (otp === values) {
            Cookies.set("jwt", "jwt_token", { expires: 30 });
            navigate("/");
        } else {
            alert("Invalid Otp Please Try Again ?");

            setShowNumber(true);
        }
    };

    const phoneNumber = (event) => {
        setNumber(event.target.value);
    };

    return (
        <div className="login-container">
            <div className="form-container">
                {showNumber ? (
                    <form onSubmit={formValadation}>
                        <h3>Login</h3>
                        <p>Enter Your Phone Number</p>
                        <label>+91</label>
                        <input maxLength={10} onChange={phoneNumber} />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                ) : (
                    <div className="otp-container">
                        <p>Enter OTP</p>
                        <input maxLength={1} onChange={inputValue} />
                        <input maxLength={1} onChange={inputValue2} />
                        <input maxLength={1} onChange={inputValue3} />
                        <input maxLength={1} onChange={inputValue4} />
                        <br />
                        <br />
                        <p className="count">
                            Didn't receive the otp ? retry :{" "}
                            <span>{count}</span>
                        </p>
                        <button type="button" onClick={validate}>
                            {" "}
                            Verify and Proceed
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
