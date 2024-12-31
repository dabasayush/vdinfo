import React from 'react'
import Top from './Top';
import Mobile from './Mobile';
import HeaderComp from './HeaderComp';

export default function Header() {
  return (
    <header style={{width:"100%"}}>
      <Top />
      <Mobile />
      <HeaderComp />
    </header>
  )
}