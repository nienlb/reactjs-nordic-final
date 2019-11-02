import React, { Component } from 'react';

import { connect } from 'react-redux';

import Preloader from '../preloader/Preloader'

import { addToCart } from '../../actions/cart-actions'

import { fetchProductsDetail } from '../../actions/products-actions'

export class ProductDetail extends Component {

  handleProductClick = (propduct) => {
    this.props.addToCart(propduct)
  }

  componentDidMount() {
    // console.log('day la:' , this.props.productId)
    this.props.fetchProductsDetail(this.props.productId);
  }
  render() {
    const { detail, isFetching } = this.props
    return (
      (isFetching && (detail)) ?
        (<Preloader visible />) :
        (<>
          <div className="col-xl-7 col-lg-6">
            {/* tab content */}
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div>
                  <img src={`https://media3.scdn.vn${detail.images}`} alt={detail.name} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <p> {detail.name}</p>
            <p> {detail.price}</p>
            <ul>
              {detail.attribute &&
                detail.attribute[0].value.map(item => <li>{item.value}</li>)
              }
            </ul>

            <p> Số lượng :  {detail.quantity}</p>
            <div className="product-action text-center">
              <a title="Shoppingb Cart" onClick={this.handleCartClick}>
                <i className="fas fa-shopping-cart" />
              </a>
              <a href="#" title="Quick View">
                <i className="fas fa-search" />
              </a>
            </div>
          </div>
        </>)
    );
  }
}

const mapStateToProps = (state) => {

  const { productsDetail: { detail, isFetching } } = state
  return {
    detail: detail,
    isFetching: isFetching,
  }
}

const mapDispatchToProps = {
  addToCart,
  fetchProductsDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
