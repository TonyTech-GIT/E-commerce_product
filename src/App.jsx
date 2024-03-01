
import Header from "./components/Header"
import Product from "./components/Product"

import { QuantityProvider } from "./components/QuantityContext"


const App = () => {

  return (
    <QuantityProvider>
      <section >
        <Header />

        <Product />
      </section>
    </QuantityProvider>

  )
}

export default App
