import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./Home/Home"
import ProductsPage from "./Products/Products"
import ServicesPage from "./Services/Services"
import AccountPage from "./Account/Account"
import OthersPage from "./Others/Others"
import NoMatchPage from "./NoMatch/NoMatch"
import ProductDetailPage from "./ProductDetail/ProductDetail"

const Pages = () => {
  return (
    <>
        <PageWrapper>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/others" element={<OthersPage />} />
                <Route path="*" element={<NoMatchPage />} />
            </Routes>
        </PageWrapper>
    </>
  )
}

export default Pages

const PageWrapper = styled.main`
    height: 100%;
`