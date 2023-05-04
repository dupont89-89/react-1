import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Auth extends Component {

  render() {
    return (
      <div>
        <h1>Привет, придётся войти в учётку.....</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(Auth)
