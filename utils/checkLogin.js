export default function checkLogin() {
  if (sessionStorage.getItem("session_key") != null) {
    axios({
      url: "/member/state",
      method: "post",
      data: sessionStorage.getItem("session_key"),
      baseURL: "http://localhost:8088",
    }).then((response) => {
      setIsLogin(response.data);
    });
  }
}
