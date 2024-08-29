import './App.scss'
import BasketItem from './components/BasketItem/BasketItem'
import ProductList from './components/ProductList/ProductList'


const App = () => {

  return (
    <>
      <ProductList />
       <BasketItem image={'https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130'} title={'rtergedfsdfsdfsdfsdfsdfdsrgedg'} price={22.66} />
    </>
  )
}

export default App
