import React, { Component } from 'react';
import ProductDetail from '../components/product/productDetail';
import SideBar from '../components/sidebar/SideBar';

export default class ProductsPageDetail extends Component {
  render() {
    return (
      <section className="shop-area pt-150 pb-100">
        <div className="container">
          <div className="row">
            <ProductDetail productId={this.props.match.params.productId} />
          </div>
        </div>
      </section>
    );
  }
}
