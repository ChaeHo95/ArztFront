import { Container } from "react-bootstrap";
import Footer from "../Layout/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import DaumPostCode from "react-daum-postcode";
import axios from "axios";

const Info = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const [names, setNames] = useState("");
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [adress, setAdress] = useState("");
  const [open, setOpen] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [adressModal, setAdressModal] = useState(false);
  const [isFocused, setIsFocused] = useState("");
  const navi = useNavigate();

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isFocused) {
      switch (name) {
        case "password":
          setPw(value);
          break;
        case "check password":
          setCpw(value);
          break;
        case "mail":
          setMail(value);
          break;
      }
    }
  };
  const change = (e) => {
    let success = true;
    if (pw != "" && cpw != "") {
      if (pw !== cpw) {
        alert("입력한 비밀번호가 일치하지 않습니다!");
        success = false;
      }
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
        url: "/member/update",
        method: "post",
        data: {
          user_id: id,
          user_pwd: pw,
          user_name: names,
          user_sex: sex,
          user_phone: phone,
          user_mail: mail,
          user_adress: adress,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        const datas = response.data;
        const datas_name = ["user_phone", "user_mail"];
        const datas_name_kr = ["전화번호", "이 메일"];
        let reg = true;
        for (let i in datas_name) {
          if (datas[datas_name[i]] != null) {
            alert(
              `회원 수정 실패하셨습니다. \n중복된 ${datas_name_kr[i]}가 존재합니다.`
            );
            reg = false;
            break;
          }
        }
        if (reg) {
          alert("회원수정 성공하셨습니다.");
          window.location.reload();
        }
      });
    }
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

  useEffect(() => {
    if (sessionStorage.getItem("session_key") != null) {
      axios({
        url: "/member/state",
        method: "post",
        data: {
          id: null,
          user_session: sessionStorage.getItem("session_key"),
          user_login: false,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        console.log(response.data);
        setIsLogin(response.data);
        if (!response.data) {
          alert("로그인 안됨");
          navi("/Module/Login");
        }
      });
    } else {
      alert("로그인 안됨");
      navi("/Module/Login");
    }
  });
  useEffect(() => {
    if (isLogin && !isInfo) {
      axios({
        url: "/member/infos",
        method: "post",
        data: {
          id: null,
          user_session: sessionStorage.getItem("session_key"),
          user_login: false,
        },
        baseURL: "http://localhost:8088",
      }).then((response) => {
        const user = response.data;
        setId(user.user_id);
        setPw(user.user_pwd);
        setCpw(user.user_pwd);
        setSex(user.user_sex);
        setMail(user.user_mail);
        setPhone(user.user_phone);
        setAdress(user.user_adress == null ? "정보 없음" : user.user_adress);
        setNames(user.user_name);
        setIsInfo(true);
      });
    }
  });
  const home = () => {
    navi("/");
  };
  const delet = () => {
    axios({
      url: "/member/delete",
      method: "post",
      data: {
        id: null,
        user_session: sessionStorage.getItem("session_key"),
        user_login: false,
      },
      baseURL: "http://localhost:8088",
    }).then((response) => {
      if (response.data) {
        alert("회원탈퇴를 성공적으로 끝내었습니다.");
        sessionStorage.removeItem("session_key");
        setIsLogin(false);
        window.location.reload();
        navi("/");
      } else {
        alert("회원탈퇴 도중 오류가 발생하여 회원탈퇴를 실패 하였습니다.");
      }
    });
  };
  const address = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress +=
        extraAddress !== "" ? ` (${extraAddress})` + `[${data.zonecode}]` : "";
    }
    setAdress(fullAddress);
    addressclose();
  };
  const addressOpen = () => {
    setAdressModal(true);
  };
  const addressclose = () => {
    setAdressModal(false);
    setIsFocused(false);
  };

  const login_logout = () => {
    if (isLogin) {
      return (
        <>
          <Container>
            <div className="title">My Information</div>

            <main className="pa4 black-80">
              <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <div className="mt3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="id"
                      style={{ fontSize: "1.2rem" }}
                    >
                      ID
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="id"
                      id="id"
                      value={id}
                      style={{
                        cursor: "default",
                        outline: "0px",
                        border: "0px",
                      }}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="confirm"
                      style={{ fontSize: "1.2rem" }}
                    >
                      PASSWORD
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="password"
                      name="password"
                      id="confirm"
                      value={pw}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="confirm"
                      style={{ fontSize: "1.2rem" }}
                    >
                      CHECK PASSWORD
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="password"
                      name="check password"
                      id="confirm"
                      value={cpw}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="name"
                      style={{ fontSize: "1.2rem" }}
                    >
                      NAME
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="text"
                      name="name"
                      id="name"
                      value={names}
                      style={{
                        cursor: "default",
                        outline: "0px",
                        border: "0px",
                      }}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="sex"
                      style={{ fontSize: "1.2rem" }}
                    >
                      SEX
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="text"
                      name="sex"
                      id="sex"
                      value={sex}
                      style={{
                        cursor: "default",
                        outline: "0px",
                        border: "0px",
                      }}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="phone"
                      style={{ fontSize: "1.2rem" }}
                    >
                      PHONE
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="text"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={isNummer}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="mail"
                      style={{ fontSize: "1.2rem" }}
                    >
                      E-MAIL
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="text"
                      name="mail"
                      id="mail"
                      value={mail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mv3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="address"
                      style={{ fontSize: "1.2rem" }}
                    >
                      ADRESS
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      type="text"
                      name="adress"
                      id="adress"
                      value={adress}
                      onFocus={(ex) => {
                        addressOpen();
                        setIsFocused(true);
                      }}
                    />
                  </div>
                </fieldset>
              </form>
            </main>
            <div className="ph3">
              <button
                style={{ border: "0px", outline: "0px" }}
                className="f6 link dim ph3 pv2 mb2 dib white bg-light-red"
                onFocus={(ex) => {
                  openModal();
                }}
              >
                WITHDRAWAL
              </button>
            </div>

            <div className="ph3">
              <button
                style={{ border: "0px", outline: "0px" }}
                className="f6 link dim ph3 pv2 mb2 dib white bg-light-purple"
                onClick={change}
              >
                Change
              </button>
            </div>
            <div className="ph3">
              <button
                style={{ border: "0px", outline: "0px" }}
                className="f6 link dim ph3 pv2 mb2 dib white bg-dark-green"
                onClick={home}
              >
                Close
              </button>
            </div>
          </Container>
          <Footer />
          <Modal open={open}>
            <div className="Modal-header">WITHDRAWAL</div>
            <div className="Modal-body">
              Are you sure you want to cancel your membership?
            </div>
            <div className="Modal-footer">
              <button className="Modal-btn" size="small" onClick={delet}>
                Yes
              </button>
              <button className="Modal-btn" size="small" onClick={closeModal}>
                No
              </button>
            </div>
          </Modal>
          <Modal open={adressModal}>
            <div className="Modal-header">ADRESS</div>
            <div className="Modal-body">Where's your place?</div>
            <DaumPostCode className="post-code" onComplete={address} />
            <div className="Modal-footer">
              <button className="Modal-btn" size="small" onClick={addressclose}>
                Close
              </button>
            </div>
          </Modal>
        </>
      );
    }
  };
  return <>{login_logout()}</>;
};

export default Info;
