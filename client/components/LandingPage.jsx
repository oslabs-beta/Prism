import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      LandingPage
      {/* <a href='/login'>link</a> */}
      <NavLink to='/login'> login</NavLink>
    </div>
    
  )
}
