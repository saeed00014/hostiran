import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCards } from '../../store/dataSlice'
import { cardLoading } from '../../store/loadingSlice'

import Header from "./components/header"
import Footer from "./components/footer"

const HomePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/home/home")), 0);
  })
})
const CardPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/card/card")), 0);
  })
})
const Product = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/product/product")), 0);
  })
})

import axios from 'axios'
import Loading from "./components/loading"

function AppS() {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleGetAllCard = async () => {
      await axios.get('http://127.0.0.1:8000/products', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true,
          "Access-Control-Expose-Headers": "*",
          "Access-Control-Allow-Methods": "*" 
        }
      }).then((res) => dispatch(getAllCards(res.data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(cardLoading(false)))
    }
    handleGetAllCard()
  }, [])

  return (
    <BrowserRouter>
    <div style={{direction: 'rtl'}} className="[&>*]:bg-g_Background_White_Shop [&>*]:text-black [&>*]:font-sans [&>*]:font-[500]">
      <Header />
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/shop" element={<HomePage />} />
        <Route path="/shop/card" element={<CardPage />} />
        <Route path="/shop/product/*" element={<Product />} />
      </Routes>
      </Suspense>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default AppS
