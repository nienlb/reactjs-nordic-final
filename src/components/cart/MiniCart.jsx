import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cart-actions';

class MiniCart extends Component {
  static propTypes = {
    deleteItem: PropTypes.func,
  };

  handleDeleteClick = () => {
    this.props.deleteItem(123);
  };

  componentDidMount() {}

  render() {
    return (
      <ul className="minicart">
        <li>
          <div className="cart-img">
            <a href="#">
              <img src="./assets/pro1.jpg" alt="" />
            </a>
          </div>
          <div className="cart-content">
            <h3>
              <a href="#">Black &amp; White Shoes</a>
            </h3>
            <div className="cart-price">
              <span className="new">$ 229.9</span>
              <span>
                <del>$239.9</del>
              </span>
            </div>
          </div>
          <div className="del-icon">
            <a href="#" onClick={this.handleDeleteClick}>
              <i className="far fa-trash-alt" />
            </a>
          </div>
        </li>
        <li>
          <div className="cart-img">
            <a href="#">
              <img src="./assets/pro2.jpg" alt="" />
            </a>
          </div>
          <div className="cart-content">
            <h3>
              <a href="#">Black &amp; White Shoes</a>
            </h3>
            <div className="cart-price">
              <span className="new">$ 229.9</span>
              <span>
                <del>$239.9</del>
              </span>
            </div>
          </div>
          <div className="del-icon">
            <a href="#" onClick={this.handleDeleteClick}>
              <i className="far fa-trash-alt" />
            </a>
          </div>
        </li>
        <li>
          <div className="cart-img">
            <a href="#">
              <img src="./assets/pro3.jpg" alt="" />
            </a>
          </div>
          <div className="cart-content">
            <h3>
              <a href="#">Black &amp; White Shoes</a>
            </h3>
            <div className="cart-price">
              <span className="new">$ 229.9</span>
              <span>
                <del>$239.9</del>
              </span>
            </div>
          </div>
          <div className="del-icon">
            <a href="#" onClick={this.handleDeleteClick}>
              <i className="far fa-trash-alt" />
            </a>
          </div>
        </li>
        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            <span className="f-right">$300.0</span>
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <a href="#">Shopping Cart</a>
            <a className="red-color" href="#">
              Checkout
            </a>
          </div>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    deleteItem(id) {
      dispatch(removeFromCart(id));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiniCart);
