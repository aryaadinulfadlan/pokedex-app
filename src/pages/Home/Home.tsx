import { BtnBannerWrap, DemoButton, DescWrap, HomeContainer, ImgWrap, TryButton, WaIconWrapper } from "./HomeStyle"
import Banner from '../../assets/banner.png'
import { BsWhatsapp } from "react-icons/bs";

const HomePage = () => {
  return (
    <HomeContainer>
      <DescWrap>
        <h3>the official pokemon website</h3>
        {/* <p>Search for a Pokemon by name or using its National Pokedex number.</p> */}
        <p>The Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series. On the main list pages you can see the various stats of each Pokémon. Click a Pokémon's name to see a detailed page with Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!</p>
        <BtnBannerWrap>
          <TryButton>try it free !</TryButton>
          <DemoButton>App Demo</DemoButton>
        </BtnBannerWrap>
      </DescWrap>
      <ImgWrap>
        <img src={Banner} alt="Banner" />
      </ImgWrap>
      <WaIconWrapper>
        <BsWhatsapp />
      </WaIconWrapper>  
    </HomeContainer>
  )
}

export default HomePage