import React, { Component } from 'react';

import { connect } from 'react-redux';

import Product from './Product';

import { addToCart } from '../../actions/cart-actions'

import { fetchProducts } from '../../actions/products-actions'

export class ProductGrid extends Component {

  handleProductClick = (propduct) => {
    this.props.addToCart(propduct)
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { total, items , from , to} = this.props
    return (
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
              {items.map((product) => (
                <Product key={product.id} {...product} onClick={this.handleProductClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const { products: { items, page, total, pageSize } } = state
  return {
    total,
    items,
    from: (total>0) ? ((page - 1) * pageSize + 1) : 0,
    to: page * pageSize
  }
}

const mapDispatchToProps = {
  addToCart,
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
