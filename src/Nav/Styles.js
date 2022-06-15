
import styled from "styled-components";

export const Nav = styled.div`
display: flex;
background-color: black;

width: 100%;
height:120px;
overflow: hidden;
top: 0;
width: 100%;

/* FIX */
z-index:300;
top: 0;
justify-content: center;
align-items: center;

/* Logo-8 */
.logo-8 h3 {
    color: orange;
    font-family: 'Cinzel', serif;
    font-weight: 200;
    font-size: 40px;
    line-height:1.3;
}
.logo-8 h3 span {
    color: white;
    display: inline-block;
    line-height: 1.8;
    padding: 0px;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    opacity:0.5;
    margin-left:-34px;
}

`

