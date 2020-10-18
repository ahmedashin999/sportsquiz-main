import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';

 
export const Nav =styled.nav`
 
 
font-family: 'Times New Roman', Times, serif;
   height: 80px;
    margin-top: -80px;
  
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:1rem;
   position:sticky;
   top:0;
   z-index:10;

   @media screen and(max-width:960px){
       transition:0.8s all ease
   }

`;

 
export const NavbarContainer =styled.div`

display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding:24px;
 max-width:1200px;

`;
export const NavLogo = styled.div `
 
justify-self:flex-start;
cursor:pointer;
 
display:flex;
align-items:center;
margin-left:0px;
 



`;
export const Logoimage=styled.img`
 width:200px;
 height:20px;
 

 @media screen and(max-width:520px){
     
 }

`

 
 

 

export const NavMenu=styled.ul`
 display:flex;
 align-items:center;
 list-style:none;
 text-align:center;
 margin-right:-22px;
width:400px;
`;
export const NavItem =styled.li`
height:80px;

`;

export const NavLinks =styled(LinkR)`
 
 color:gray;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
&:hover {
    color:  #ee4e14;
}
 
@media screen and(max-width:520px){
   
}
`;