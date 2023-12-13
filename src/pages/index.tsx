import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./Home/Home"
import ProductsPage from "./Products/Products"
import ServicesPage from "./Services/Services"
import AccountPage from "./Account/Account"
import OthersPage from "./Others/Others"
import NoMatchPage from "./NoMatch/NoMatch"
import ProductDetailPage from "./ProductDetail/ProductDetail"
import Navbar from "../components/Navbar/Navbar"

const Pages = () => {
  return (
    <PageWrapper>
        <Navbar />
        <Page>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/others" element={<OthersPage />} />
                <Route path="*" element={<NoMatchPage />} />
            </Routes>
        </Page>
    </PageWrapper>
  )
}

export default Pages

const PageWrapper = styled.main`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
    /* background-color: red;
    padding: 10px; */
`
const Page = styled.div`
    /* background-color: blue; */
    padding: 0 1rem;
`
export const PageWrap = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`