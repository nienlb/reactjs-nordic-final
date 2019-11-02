import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import MiniCart from '../cart/MiniCart';

class Header extends Component {
  static propTypes = {
    cartItemCount: PropTypes.number,
  };

  render() {
    const { cartItemCount } = this.props;
    return (
      <header>
        <div id="header-sticky" className="header-area box-90 sticky-header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                {/* <div class="basic-bar cat-toggle">
          <span class="bar1"></span>
          <span class="bar2"></span>
          <span class="bar3"></span>
        </div> */}
                <div className="logo">
                  <a href="#">
                    <img src="./assets/logo_shop.png" alt="" />
                  </a>
                </div>
                <div className="category-menu">
                  <h4>Category</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Table lamp
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Furniture
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Chair
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Men
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Women
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Cloth
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-cart" /> Trend
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                <div className="main-menu text-center">
                  <nav id="mobile-menu" style={{ display: 'block' }}>
                    <ul>
                      <li>
                        <NavLink exact activeClassName="active" to="/">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact activeClassName="active" to="/products">
                          Products{' '}
                        </NavLink>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            <NavLink exact activeClassName="active" to="/about">
                              About Us
                            </NavLink>
                          </li>
                          <li>
                            <a>login</a>
                          </li>
                          <li>
                            <a>Register</a>
                          </li>
                          <li>
                            <a>Shoping Cart</a>
                          </li>
                          <li>
                            <a>Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink exact activeClassName="active" to="/contact">
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                <div className="header-right f-right">
                  <ul>
                    <li className="search-btn">
                      <a className="search-btn nav-search search-trigger" href="#">
                        <i className="fas fa-search" />
                      </a>
                    </li>
                    <li className="login-btn">
                      <a href="#">
                        <i className="far fa-user" />
                      </a>
                    </li>
                    <li className="d-shop-cart">
                      <a href="#">
                        <i className="fas fa-shopping-cart" />{' '}
                        {cartItemCount > 0 ? (
                          <span className="cart-count">{cartItemCount}</span>
                        ) : (
                          ''
                        )}
                      </a>
                      <MiniCart />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 d-xl-none">
                <div className="mobile-menu" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapsStateToProps(state, ownProps) {
  return {
    cartItemCount: state.cartItemCount,
  };
}

function mapDispatchToProps() {}

const hocHeader = connect(
  mapsStateToProps
  // mapDispatchToProps
)(Header);

export default hocHeader;
