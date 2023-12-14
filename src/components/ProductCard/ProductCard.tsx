import { Pokemon } from "../../pages/Products/types"
import { BottomContent, Card, DescWrapper, ImgWrapper, TopContent } from "./ProductCardStyle"

const ProductCard = ({ name, images, abilities, types }: Pokemon) => {
  const [ mainImage ] = images
  return (
    <Card>
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