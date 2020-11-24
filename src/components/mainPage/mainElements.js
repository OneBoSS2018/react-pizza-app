import styled from 'styled-components'
import ImgBg from '../../assets/images/pizza-main.jpg'

export const MainPContainer = styled.div`
  background: linear-gradient(
   to right,
   rgb(0,0,0,0.7),
   rgb(0,0,0,0.1))
  ,  url(${ImgBg});
  height: 100vh;
  background-size: cover;
  background-position: center;
  
`

export const  MainPContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) /2);
  
`

export const MainPItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const MainPH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`

export const MainPP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`

export const MainPButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  
  &:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
  }
`