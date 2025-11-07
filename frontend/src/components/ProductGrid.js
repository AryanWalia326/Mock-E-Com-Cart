import React from 'react';

function ProductGrid({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return <div className="loading">No products available</div>;
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x500?text=Product+Image';
            }}
          />
          <div className="product-info">
            <div className="product-category">{product.category}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <div className="product-price">${product.price.toFixed(2)}</div>
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
