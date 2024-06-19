
import PropTypes from 'prop-types'
import ProductItem from '../productItem/ProductItem'


const ProductList = ({productList, }) => {
 
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
                price={p.price}
                img={p.img}  
                available={p.available}  
                      
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
   
}

export default ProductList