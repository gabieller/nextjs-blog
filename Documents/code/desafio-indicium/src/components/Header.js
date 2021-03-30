import React, { Component } from "react"
import Image from "next/image"
import styles from "../styles/Header.module.css"

class Header extends Component {
  // state = [{ navbar: false }]

  // handleScroll = (prevState) => {
  //   if (window.pageYOffset > 20) {
  //     this.setState({ navbar: prevState.navbar })
  //   }
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll)
  // }
  render() {
    return (
      <nav className={`${styles.header}`}>
        <div>
          <Image
            src="/images/menu.svg"
            width={30}
            height={30}
            alt="Hamburger Menu"
          />
        </div>
        {/* ISSO é UMA NAVBAR */}
      </nav>
    )
  }
}

export default Header
