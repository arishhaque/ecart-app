import "./ProductCard.css"
import ProductCart from '../ProductCart';
import ProductRating from '../ProductRating';
import ReduxProductCart from '../ReduxProductCart';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <ProductRating rating={product.rating.rate} maxRating={5} size={1} />
      {<ProductCart product={product} />}
      {/*<ReduxProductCart product={product} />*/}
    </div>
  )
}

export default ProductCard;
