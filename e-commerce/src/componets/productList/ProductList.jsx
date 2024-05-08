import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from '../productItem/ProductItem'

const ProductList = ({productList}) => {

    //const productListFiltred = productList.filter((p)=>p.available== true)
    const productListFiltred = productList
  return (
    <div>
        {productListFiltred.map((p)=>(
            <ProductItem
                key={p.id}
                name={p.productName}
                brand={p.productBrand}
                type={p.productType}
                price={p.productPrice}
                img={p.productImg}  
                available={p.available}        
            />
        ))}
    </div>
  )
}

ProductList.propTypes = {
    productList: PropTypes.array
}

export default ProductList