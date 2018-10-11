import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {
  state = {
    open: false
  }
  render() {
    return (
      <header>
        <div className={`menu ${this.state.open ? 'active' : ''}`}>
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </div>
        <Grid className="header-grid">
          <div className={`container ${this.state.open ? 'change' : ''}`} onClick={this.handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }
}

export default Header
