import { React, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Styles/login.scss";
import $ from "jquery";
import axios from "axios";

const Login = () => {
  let location = useLocation();
  const navi = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "id" ? setId(value) : setPassword(value);
  };

  const login = (e) => {
    e.preventDefault();
    const ids = ["#id", "#pw"];
    let btn = $("#btn");

    for (let id of ids) {
      $(btn).on("click", function () {
        if ($(id).val() == "") {
          $(id).next("label").addClass("warning");
          setTimeout(function () {
            $("label").removeClass("warning");
          }, 1500);
        }
      });
    }
    if (id !== "" && password !== "") {
      axios({
        url: "/member/login",
        method: "post",
        data: { user_id: id, user_pwd: password },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        const datas = response.data;
        if (datas.user_login == "false") {
          alert(
            `아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.`
          );
        } else if (datas.user_login == "overlap") {
          alert(`이미 접속된 아이디 입니다.`);
        } else {
          alert("로그인 성공");
          sessionStorage.setItem("session_key", response.data.user_session);
          navi("/");
          window.location.reload();
        }
      });
    }
  };

  if (sessionStorage.getItem("session_key") != null) {
    axios({
      url: "/member/state",
      method: "post",
      data: sessionStorage.getItem("session_key"),
      baseURL: "http://localhost:8088",
    }).then((response) => {
      const stat = response.data;
      if (stat) {
        navi("/");
      }
    });
  }

  return (
    <div className="login-box">
      <Link to="/">
        <button className="logo">Arzt</button>
      </Link>

      <h1>LOGIN</h1>

      <form>
        <div className="int-area">
          <input
            type="text"
            name="id"
            id="id"
            autoComplete="off"
            value={id}
            onChange={handleChange}
            required
          />
          <label htmlFor="id">USER ID</label>
        </div>

        <div className="int-area">
          <input
            type="password"
            name="pw"
            id="pw"
            autoComplete="off"
            value={password}
            onChange={handleChange}
            required
          />
          <label htmlFor="pw">PASSWORD</label>
        </div>

        <div className="btn-area">
          <button id="btn" onClick={login}>
            LOGIN
          </button>
        </div>
      </form>

      <div className="caption">
        <Link to="/ForgetPassword">
          <button className="forgetPassword">Forgot Password?</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
