import './App.scss'
import BasketItem from './components/BasketItem/BasketItem'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import ProductCard from './components/ProductCard/ProductCard'
import ProductList from './components/ProductList/ProductList'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
   <ProductList />
    {/* <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<ProductList/>} />

    </Routes> */}
    </>
  )
}

export default App
