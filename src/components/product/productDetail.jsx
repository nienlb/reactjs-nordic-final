import React, { Component } from 'react';

import { connect } from 'react-redux';

import Preloader from '../preloader/Preloader'

import { addToCart } from '../../actions/cart-actions'

import { fetchProductsDetail } from '../../actions/products-actions'

import style from '../../css/productDetail.module.css'

export class ProductDetail extends Component {

  handleCartClick = (product) => {
    this.props.addToCart(product)
  };

  handleProductClick = (propduct) => {
    this.props.addToCart(propduct)
  }

  componentDidMount() {
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
            <p className={style.name}>Tên sản phẩm : {detail.name}</p>
            <p className={style.price}>Giá : {detail.price}</p>
            <ul className={style.size}>
              Size:
              {detail.attribute &&
                detail.attribute[0].value.map(item => <li> {item.value} </li>)
              }
            </ul>
            <p> Số lượng :  {detail.quantity}</p>

            <button onClick={() => this.handleCartClick(detail)}>
                Cart
            </button>
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
