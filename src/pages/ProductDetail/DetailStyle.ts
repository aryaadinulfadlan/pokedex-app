import styled from 'styled-components'
import { FontSize4, FontSize5, TextFontSize } from '../../GlobalStyles';

type ImgProps = {
    selected: boolean
}
export const DetailContainer = styled.div`
    background-color: #fafafa;
    border-radius: 1rem;
    max-width: 350px;
    width: 100%;
    margin: 2.5rem auto 0;
    padding: 1rem;
    display: grid;
    grid-template-rows: 300px auto;
    gap: 2rem;
    @media (min-width: 600px) {
        max-width: 400px;
        grid-template-rows: 350px auto;
    }
    @media (min-width: 850px) {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
        max-width: 900px;
    }
`
export const ImageWrap = styled.div`
  display: grid;
  grid-template-rows: 4.5fr 1fr;
  gap: 1rem;
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
    background-color: #eee;
    border-radius: 10px;
    padding: 1rem;
    position: relative;
    &:hover > ${ImgOverlay} {
        visibility: visible;
        opacity: 1;
    }
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
`
export const Img = styled.div<ImgProps>`
    background-color: #ddd;
    border-radius: 10px;
    cursor: pointer;
    border: ${({ selected }) => selected ? '2px solid #495fba' : '2px solid white'};
    position: relative;
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > .justify-end {
    justify-content: flex-end;
  }
`
export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ol {
      list-style: decimal inside;
      padding-left: 10px;
      font-weight: 600;
      text-transform: capitalize;
      font-size: ${TextFontSize};
  }   
  span, p {
      font-weight: 600;
      font-size: ${TextFontSize};
  }
  & > h3 {
      text-transform: capitalize;
      font-size: ${FontSize4};
  }
  .abilities {

  }
  .info {
    .info_stats {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: start;
      gap: 6px 1rem;
      padding-left: 10px;
      p {
        text-transform: capitalize;
      }
    }
  }
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