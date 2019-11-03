import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cart-actions';

class MiniCart extends Component {
  static propTypes = {
    deleteItem: PropTypes.func,
  };

  handleDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  componentDidMount() {
    console.log(this.props.items)
  }

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <li key={item.id}>
          <div className="cart-img">
            <a href="#">
              <img src={item.img_url} alt="" />
            </a>
          </div>
          <div className="cart-content">
            <h3>
              <a href="#">{item.name}</a>
            </h3>
            <div className="cart-price">
              <span className="new">{item.price}</span>
              <span>
                <del>{item.price}</del>
              </span>
            </div>
          </div>
          <div className="del-icon">
            <a href="#" onClick={() => this.handleDeleteClick(item.id)}>
              <i className="far fa-trash-alt" />
            </a>
          </div>
        </li>
      )
    })
    return (
      <ul className="minicart">
        {itemList}
        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            <span className="f-right">${this.props.total}</span>
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

function mapsStateToProps(state, ownProps) {
  const { cartItem: { items, total } } = state
  return {
    items,
    total
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem(id){
      dispatch(removeFromCart(id));
    },
  };
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps,
)(MiniCart);
