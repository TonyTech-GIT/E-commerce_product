import { useEffect, useState } from "react"
import Header from "./components/Header"
import Product from "./components/Product"




const App = () => {
  const [previewModal, setPreviewModal] = useState(null)



  useEffect(() => {
    console.log('in app compo', previewModal);

    setPreviewModal(previewModal)
  }, [previewModal])

  return (
    <section >
      <Header />
      {<div className="overla" />}
      <Product passedUpModal={setPreviewModal} />
    </section>


  )
}

export default App
