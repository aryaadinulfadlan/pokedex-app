import styled, { keyframes } from 'styled-components'
import { FontSize3, FontSize9 } from '../GlobalStyles'

export const Loader = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem auto 0;
    h3 {
        font-size: ${FontSize3};
        text-align: center;
    }
`
const BounceAnimation = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.2); 
  }
`
export const Ball = styled.div`
  width: ${FontSize9};
  height: ${FontSize9};
  border-radius: 50%;
  background-color: #2d0763;
  animation: ${BounceAnimation} 0.7s linear infinite alternate; 
  margin-bottom: 10px;
`
export default function CustomLoaderAnimation() {
  return (
    <Loader>
        <Ball/>
        <h3>Please Wait..</h3>
    </Loader>
  )
}
