
import PropTypes from 'prop-types'
import ProductItem from '../productItem/ProductItem'


const ProductList = ({ productList, onDeleteProduct, onNewPrice }) => {
    if (!productList || !Array.isArray(productList)) {
        return <p>No hay productos disponibles</p>;
      }

    return (
        <div>
            {productList.length > 0 ? (
                productList.map((p) => (
                    <ProductItem
                        key={p.id}
                        product={p}
                        onDeleteProduct={onDeleteProduct}
                        onNewPrice={onNewPrice}

                    />
                ))
            ) : (
                <p>No hay nada para mostrar</p>
            )}
        </div>
    );
};

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
    onDeleteProduct: PropTypes.func.isRequired,
    onNewPrice: PropTypes.func.isRequired,

}

export default ProductList