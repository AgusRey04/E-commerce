
import PropTypes from 'prop-types'
import ProductList from '../productList/ProductList'
import NewProduct from '../newProduct/NewProduct'

const Home =({productList, onProducUp})=> {
  return (
    <div>
      <NewProduct onProductDataSaved={onProducUp}/>
      <ProductList productList = {productList}/>
    </div>
  )
}

Home.propTypes = {
  productList: PropTypes.array,
  onProducUp: PropTypes.func
}

export default Home