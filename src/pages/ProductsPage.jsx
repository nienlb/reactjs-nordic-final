import React, { Component } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import SideBar from '../components/sidebar/SideBar';

export default class ProductsPage extends Component {
  render() {
    return (
      <section className="shop-area pt-150 pb-100">
        <div className="container">
          <div className="row">
            <ProductGrid  />
          </div>
        </div>
      </section>
    );
  }
}
