import React, { useState } from 'react'
import styled from 'styled-components'

export const myStyledcomp1  = styled.p`
font-size : 32px;
font-weight: 2em;


`;

export const myStyledcomp2  = styled.p`
font-size : 11.2px;
font-weight: 0.67em;
color:red;

`;





const Menu = () => {
const [myStyle , setMyStyle] = useState(false)

const pageTitle = (e) =>{

setMyStyle(true);

   
    }

const Heading = () =>{
        setMyStyle(false);

    }
  return (
    <>
    <nav className="main-nav">
          <ul>
           <a href='#'>
            <li onClick={pageTitle}>PageTitle</li> </a> 
           <a href='#'> 
           <li onClick= {Heading}>Title</li>
            </a>
          </ul>
        </nav>
        <div>
       {
        myStyle ? (
            
        <myStyledcomp1>hiii</myStyledcomp1> ): (
        <myStyledcomp2>hii</myStyledcomp2>
        )
       }
  </div>
        
      
        
        </>
  )
}

export default Menu