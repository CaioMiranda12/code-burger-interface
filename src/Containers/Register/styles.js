import styled from 'styled-components'

import Background from '../../assets/Background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImg = styled.img`
  height: 90%;
`

export const ContainerItens = styled.div`
  border-radius: 0px 10px 10px 0px;
  background: #373737;
  box-shadow: 0px 4px 15px 0px rgba(74, 144, 226, 0.24);
  height: 90%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
    text-align: center;
  }

  img {
    height: 100px;
  }
`

export const Label = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${props => (props.error ? '12px' : '26px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  border-radius: 5px;
  background: #fff;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
  width: 391.416px;
  height: 38.319px;
  flex-shrink: 0;
  padding-left: 10px;
`

export const SignInLink = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const ErrorMessage = styled.p`
  color: #cc1717;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2px;
`
