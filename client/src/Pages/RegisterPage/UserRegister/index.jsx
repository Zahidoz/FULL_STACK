import React from "react";
// Copy LoginPage design
import "../../LoginPage/UserLogin/styles.scss";
import Nav from "../../../Components/Nav";
import RegisterImg from "../../../assets/img/work_alone.svg";

const RegisterLogin = () => {
  return (
    <>
      <Nav />
      <section className="form-s">
        <img src={RegisterImg} alt="" />
        <form action="">
          <h1>Qeydiyyat</h1>
          <input type="text" placeholder="Ad" />
          <input type="text" placeholder="Soyad" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Parol" />
          <button>Qeydiyyatdan keç</button>
        </form>
      </section>
    </>
  );
};

export default RegisterLogin;
