import { Component, React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/register.scss";
import $ from "jquery";
import Modal from "./Modal";
import axios from "axios";

const Registers = () => {
  const navi = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [names, setNames] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [open, setOpen] = useState("");
  const [isFocused, setIsFocused] = useState("");
  const [isChecked, setIsChecked] = useState({ male: false, female: false });

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setIsFocused(false);
    setOpen(false);
  };
  const handleChange = (e) => {
    if (!isFocused) {
      const { name, value } = e.target;
      if (name === "sex") {
        setSex(value);
      }
      switch (name) {
        case "id":
          setId(value);
          break;
        case "pw":
          setPw(value);
          break;
        case "cpw":
          setCpw(value);
          break;
        case "names":
          setNames(value);
          break;
        case "sex":
          setSex(value);
          break;
        case "mail":
          setMail(value);
          break;
      }
    }
  };
  const create = (e) => {
    const ids = ["#id", "#pw", "#cpw", "#names", "#sex", "#phone", "#mail"];
    let success = true;
    if (pw != "" && cpw != "") {
      if (pw !== cpw) {
        alert("입력한 비밀번호가 일치하지 않습니다!");
        success = false;
      }
    }
    if (success) {
      success = checkName();
    }

    if (phone.length < 10 && success) {
      alert("전화번호 형식이 올바르지 않습니다.");
      success = false;
    }
    if (success) {
      success = checkMail();
    }
    if (success) {
      e.preventDefault();
      axios({
        url: "/member/reg",
        method: "post",
        data: {
          user_id: id,
          user_pwd: pw,
          user_name: names,
          user_sex: sex,
          user_phone: phone,
          user_mail: mail,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        const datas = response.data;
        const datas_name = ["user_id", "user_phone", "user_mail"];
        const datas_name_kr = ["아이디", "전화번호", "이 메일"];
        let reg = true;
        for (let i in datas_name) {
          if (datas[datas_name[i]] != null) {
            alert(
              `회원 가입 실패하셨습니다. \n중복된 ${datas_name_kr[i]}가 존재합니다.`
            );
            reg = false;
            break;
          }
        }
        if (reg) {
          alert("회원가입 성공하셨습니다.");
          navi("/Module/Login");
        }
      });
    } else {
      e.preventDefault();
      let btn = $("#btn");
      for (let id of ids) {
        $(btn).on("click", function () {
          if ($(id).val() == "") {
            $(id).next("label").addClass("warning");
            setTimeout(function () {
              $("label").removeClass("warning");
            }, 2000);
          }
        });
      }
    }
  };

  const checkName = () => {
    const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (!reg.test(names)) {
      alert("한국어로 된 이름 작성해주세요.");
      return false;
    }
    return true;
  };

  const checkMail = () => {
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!reg.test(mail)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    return true;
  };
  const setgender = () => {
    if (isChecked.male == true && isChecked.female == false) {
      setSex("Male");
    } else {
      setSex("Female");
    }
    closeModal();
  };
  const setCheck = (e) => {
    const gender = e.target.name;
    if (gender === "male") {
      setIsChecked({ male: true, female: false });
    } else {
      setIsChecked({ male: false, female: true });
    }
  };
  const isNummer = (e) => {
    const { name, value } = e.target;
    if (value.length > 13) {
      alert("더 이상 입력이 불가능합니다.");
    } else if (
      isNaN(
        value
          .split("")
          .filter((e) => e != "-")
          .join("")
      )
    ) {
      alert("숫자만 입력해주세요.");
    } else {
      setPhone(phoneNumber(value));
    }
  };
  const phoneNumber = (phone) => {
    const text = [];
    for (let i = 0; i < phone.length; i++) {
      if (i == 3 && phone[3] != "-" && !phone.includes("-")) {
        text.push("-");
      }
      if (
        i == 8 &&
        phone[8] != "-" &&
        phone.match(/-/g).filter((e) => e !== "").length != 2
      ) {
        text.push("-");
      }
      text.push(phone[i]);
    }
    return text.join("");
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
    <div className="register-box" style={{ marginTop: "50px" }}>
      <Link to="/">
        <button className="logo">Arzt</button>
      </Link>
      <h1>Sign Up</h1>
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
          <label htmlFor="id">ID</label>
        </div>
        <div className="int-area">
          <input
            type="password"
            name="pw"
            id="pw"
            autoComplete="off"
            value={pw}
            onChange={handleChange}
            required
          />
          <label htmlFor="pw">PASSWORD</label>
        </div>
        <div className="int-area">
          <input
            type="password"
            name="cpw"
            id="cpw"
            autoComplete="off"
            value={cpw}
            onChange={handleChange}
            required
          />
          <label htmlFor="cpw">CHECK PASSWORD</label>
        </div>
        <div className="int-area">
          <input
            type="text"
            name="names"
            id="names"
            autoComplete="off"
            value={names}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">NAME</label>
        </div>
        <div className="int-area">
          <input
            type="text"
            name="sex"
            id="sex"
            autoComplete="off"
            value={sex}
            onFocus={(ex) => {
              openModal();
              setIsFocused(true);
            }}
            onChange={handleChange}
            required
          />
          <label htmlFor="sex">SEX</label>
        </div>
        <div className="int-area">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="off"
            value={phone}
            onChange={isNummer}
            required
          />
          <label htmlFor="phone">PHONE</label>
        </div>
        <div className="int-area">
          <input
            type="text"
            name="mail"
            id="mail"
            autoComplete="off"
            value={mail}
            onChange={handleChange}
            required
          />
          <label htmlFor="mail">E-MAIL</label>
        </div>
        <div className="btn-area">
          <button id="btn" onClick={create} style={{ marginBottom: "50px" }}>
            CREATE
          </button>
        </div>
      </form>
      <Modal open={open}>
        <div className="Modal-header">What is your gender?</div>
        <div className="Modal-body">
          <input
            type="checkbox"
            name="male"
            checked={isChecked["male"]}
            onChange={setCheck}
          />
          <label>Male</label>
          <input
            type="checkbox"
            name="female"
            checked={isChecked["female"]}
            onChange={setCheck}
          />
          <label>Female</label>
        </div>
        <div className="Modal-footer">
          <button className="Modal-btn" size="small" onClick={setgender}>
            Add
          </button>
          <button className="Modal-btn" size="small" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Registers;
