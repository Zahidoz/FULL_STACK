import React from 'react'
import './styles.scss'

import Nav from '../../../Components/Nav'

import LoginImg from "../../../assets/img/team_work.svg";


const UserLogin = () => {
  return (
    <>
      <Nav />
      <section className="form-s">
        <img src={LoginImg} alt="" />
        <form action="">
          <h1>Giris</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Parol" />
          <button>Daxil olun</button>
        </form>
      </section>
    </>
  );
}

export default UserLogin