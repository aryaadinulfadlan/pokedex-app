import ProductCard from "../../components/ProductCard/ProductCard"
import ProductSearch from "../../components/ProductSearch"
import { ProductContainer, ProductList } from "./ProductStyle"

const ProductsPage = () => {
  return (
    <ProductContainer>
      <ProductSearch />
      <ProductList>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductList>
    </ProductContainer>
  )
}

export default ProductsPage