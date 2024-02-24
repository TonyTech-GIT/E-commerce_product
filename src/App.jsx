import { useEffect, useState } from "react"
import Header from "./components/Header"
import Product from "./components/Product"
import Modal from "./components/Modal"




const App = () => {
  const [previewModal, setPreviewModal] = useState(null)



  useEffect(() => {
    console.log('in app compo', previewModal);

    setPreviewModal(previewModal)
  }, [previewModal])

  return (
    <section >
      <Header />
      {previewModal && <div className="overlay" />}
      {previewModal && <Modal />}
      <Product passedUpModal={setPreviewModal} />
    </section>


  )
}

export default App
