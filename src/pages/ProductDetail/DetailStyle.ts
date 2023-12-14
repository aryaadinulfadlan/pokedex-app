import styled from 'styled-components'
import { FontSize5 } from '../../GlobalStyles';

type ImgProps = {
    selected: boolean
}
export const DetailContainer = styled.div`
    background-color: #fafafa;
    border-radius: 1rem;
    max-width: 350px;
    width: 100%;
    margin: 3rem auto 0;
    padding: 1rem;
    /* padding: 3rem 4px 2vw; */
    display: grid;
    grid-template-rows: 300px auto;
    gap: 2rem;
    /* 
    min-height: calc(100vh - 3rem);
    @media (min-width: 600px) {
        max-width: 550px;
        grid-template-rows: 1fr 1fr;
    }
    @media (min-width: 900px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        max-width: 1100px;
    } */
`
export const ImageWrap = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1rem;
  /* 
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  padding: 5px;
  @media (min-width: 900px) {
    height: 400px;
  } */
`
export const ImgOverlay = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 500ms ease, opacity 500ms ease;
    & > div {
        background-color: white;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        svg {
            font-size: 2rem;
            color: darkblue;
        }
    }
`
export const SelectedImage = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background-color: #eee;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    &:hover > ${ImgOverlay} {
        visibility: visible;
        opacity: 1;
    }
    /* align-items: center; */
    /* padding: 1rem; */
`
export const ImgSelected = styled.div`
    height: 100%;
    position: relative;
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const SelectImage = styled.div`
    /* background-color: blue; */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
    gap: 10px;
`
export const Img = styled.div<ImgProps>`
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    border: ${({ selected }) => selected ? '2px solid #a28fbe' : '2px solid white'};
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Description = styled.div`
  background-color: lime;
  /* display: flex;
  flex-direction: column;
  gap: 10px;
  & > .price {
    font-weight: bold;
  } */
`
export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 2rem;
`
export const ModalContent = styled.div`
  background-color: #ced1e7;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
`
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  position: absolute;
  top: -1rem;
  right: -1rem;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  @media (min-width: 700px) {
    width: 2.3rem;
    height: 2.3rem;
  }
  svg {
    font-size: ${FontSize5};
  }
`