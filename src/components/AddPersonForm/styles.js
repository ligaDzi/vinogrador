import styled from 'styled-components'

export const FormBlock = styled.div`
  min-width: 300px;
  & > form {
    display: flex;
    flex-direction: column;
  }
`

export const InputFormBlock = styled.div`
  padding: 20px 0;
  height: 100px;
  & > input {
    width: 100%;
    height: 30px;
    padding-top: 10px;
    border-bottom: 1px solid gray;
  }
`

export const AddPersonBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;
  cursor: pointer;
  border: 3px solid #92d18f;
  border-radius: 10px;
  font-weight: 700;
  transition: all .5s;
  &:hover {
    background: #d0ebcf;
    color: #7a7a7a;
    & > svg {
      fill: #7a7a7a;
    }
  }
  & > svg {
    width: 20px;
    margin-right: 20px;
    transition: all .5s;
    & > path {
      fill: #010002;
    }
  }
`