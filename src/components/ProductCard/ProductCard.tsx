import { useNavigate } from "react-router-dom"
import { Pokemon } from "../../pages/Products/types"
import { BottomContent, Card, DescWrapper, ImageBackdrop, ImgWrapper, TopContent } from "./ProductCardStyle"

const ProductCard = ({ id, name, images, abilities, types }: Pokemon) => {
  const [ mainImage ] = images
  const navigate = useNavigate()
  const handleSelectedPokemon = () => navigate(`/product/${id}`)
  
  return (
    <Card onClick={handleSelectedPokemon}>
        <ImgWrapper>
          <img src={mainImage.url} alt="Main Image" />
          <ImageBackdrop />
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