import React, { Component } from 'react';

import { connect } from 'react-redux';

import Product from './Product';

import Preloader from '../preloader/Preloader'

import { addToCart } from '../../actions/cart-actions'

import { fetchProducts } from '../../actions/products-actions'

export class ProductGrid extends Component {

  handleProductClick = (product) => {
    this.props.addToCart(product)
  }

  componentDidMount = async () => {
    await this.props.fetchProducts();
    this.setState({ value: this.props.items })
  }

  render() {
    const { total, from, to, isFetching, items , sortProduct } = this.props
    return (
      (isFetching) ?
        <Preloader visible /> :
        <>
          <div className="col-xl-9 col-lg-8">
            <div className="row mb-10">
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="product-showing mb-40">
                  <p>Showing {from}–{to} of {total} results</p>
                </div>
              </div>
            </div>
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  {
                    (sortProduct) ?
                      items.map((product) => (
                        <Product key={product.id} {...product} onClick={this.handleProductClick} />
                      )) :
                      sortProduct.map((product) => (
                        <Product key={product.id} {...product} onClick={this.handleProductClick} />
                      ))
                  }
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-xl-3 col-lg-4">
            <div className="sidebar-shop">
              <div className="shop-widget">
                <h3 className="shop-title">SHOP BY</h3>
                <ul className="shop-link">
                  <li>
                    <a href="#" onClick={() => this.handleSortAZ(this.props.items)}>Name: A-Z</a>
                  </li>
                  <li>
                    <a href="#" onClick={() => this.handleSortZA(this.props.items)}>Name: Z-A</a>
                  </li>
                  <li>
                    <a href="#" onClick={() => this.handleSortH2L(this.props.items)}>Price: High to Low</a>
                  </li>
                  <li>
                    <a href="#" onClick={() => this.handleSortL2H(this.props.items)}>Price: Low to High</a>
                  </li>
                  <li>
                    <a href="#" onClick={() => this.handleSortTop(this.props.items)}>Product: Top Sales</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </>
    );
  }
}

const mapStateToProps = (state) => {

  const { products: { items, page, total, pageSize, isFetching } , sortProduct } = state
  return {
    total,
    items,
    from: (total > 0) ? ((page - 1) * pageSize + 1) : 0,
    to: page * pageSize,
    isFetching: isFetching,
    sortProduct,
  }
}

const mapDispatchToProps = {
  addToCart,
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
