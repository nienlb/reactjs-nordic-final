import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Product extends Component {
  handleCartClick = () => {
    this.props.onClick(this.props)
  };

  render() {
    const { name, img_url, img_url_mob, shop_name, is_promotion, price , price_max, product_id } = this.props;
    return (
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <Link to={`/products/${product_id}`}>
              <img src={img_url} alt={name} />
              <img className="secondary-img" src={img_url_mob} alt={name} />
            </Link>
            <div className="product-action text-center">
              <a title="Shoppingb Cart" onClick={this.handleCartClick}>
                <i className="fas fa-shopping-cart" />
              </a>
              <Link to={`/products/${product_id}`} title="Quick View">
                <i className="fas fa-search" />
              </Link>
            </div>
          </div>
          <div className="product-content pr-0">
            <div className="pro-cat mb-10">
              <a href="#">{shop_name}</a>
            </div>
            <h4>
              <a href="#">{name}</a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>${price} USD</span>
                <span className="old-price">${price_max} USD</span>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
