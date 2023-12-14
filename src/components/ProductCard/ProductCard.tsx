import { Pokemon } from "../../pages/Products/types"
import { usePokemon } from "../../stores/pokemon"
import { BottomContent, Card, DescWrapper, ImgWrapper, TopContent } from "./ProductCardStyle"

const ProductCard = ({ id, name, images, abilities, types }: Pokemon) => {
  const [ mainImage ] = images
  const { setPokemonSeletedID } = usePokemon()
  const handleSelectedPokemon = () => setPokemonSeletedID(id)
  return (
    <Card onClick={handleSelectedPokemon}>
        <ImgWrapper>
          <img src={mainImage.url} alt="Main Image" />
        </ImgWrapper>
        <DescWrapper>
          <TopContent>
            <h3>{name}</h3>
            <div>
              <span>Abilities:</span>
              <ol>
                {
                  abilities.map(el => <li key={el}>{el}</li>)
                }
              </ol>
            </div>
          </TopContent>
          <BottomContent>
            {
              types.map(el => <span key={el}>{el}</span>)
            }
          </BottomContent>
        </DescWrapper>
    </Card>
  )
}

export default ProductCard