import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./GlobalStyles"
import Pages from "./pages"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Pages />
    </BrowserRouter>
  )
}

export default App