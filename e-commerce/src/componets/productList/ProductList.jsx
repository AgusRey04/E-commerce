
import PropTypes from 'prop-types'
import ProductItem from '../productItem/ProductItem'


const ProductList = ({productList,onDeleteProduct }) => {
 
  return (
    <div>
        {productList.length >0 ?(
        productList.map((p)=>(
            <ProductItem
                key={p.id}
                id={p.id}
                name={p.name}
                brand={p.brand}
                type={p.type}
                price={Number(p.price)}
                img={p.img}  
                available={p.available}  
                onDeleteProduct={onDeleteProduct}
                      
            />
        ))
    ):(
        <p>No hay nada para mostrar</p>
    ) }
    </div>
  );
};

ProductList.propTypes = {
    productList: PropTypes.array,
    onDeleteProduct: PropTypes.func.isRequired,
   
}

export default ProductList