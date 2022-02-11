import styled from 'styled-components'

export const VinogradContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const HeaderMain = styled.h1`
  font-size: 33px;
`
export const VinogradList = styled.ul`
  overflow-y: scroll;
  height: 100vh;
  min-width: 800px;
  padding: 50px 50px;
  background: #fcfcfc;
`

export const VinogradorWrap = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
  list-style: none;
  font-size: 22px;
  color: #454545;    
  & > div, a {
    display: inline-block;
  }
  & > a {
    text-decoration: none;
  }
  & > button {
    width: 20px;
    height: 20px;
    margin-right: 30px;
  }  
  & > button > svg {
    visibility: hidden;
    transform: rotate(180deg);
    cursor: pointer;
    &:hover {
      fill: #810000;
    }
  }
  &:hover {
    & > button > svg {
      visibility: visible;
    }
  }
`

export const Number = styled.div`
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;    
  text-align: center;
  margin-right: 40px;
  color: #d9fffd;
  background: #6fdeee;
  ${VinogradorWrap}:hover & {
    color: #006c67;
  }
`