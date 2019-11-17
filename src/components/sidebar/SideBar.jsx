import React, { Component } from 'react';

import { connect } from 'react-redux';

import { sortProductAZ, sortProductZA, sortProductH2L, sortProductL2H, sortProductTop } from '../../actions/products-actions'

export class SideBar extends Component {

  handleSortAZ = (product) => {
    this.props.sortProductAZ(product)
  }
  handleSortZA = (product) => {
    this.props.sortProductZA(product)
  }
  handleSortH2L = (product) => {
    this.props.sortProductH2L(product)
  }
  handleSortL2H = (product) => {
    this.props.sortProductL2H(product)
  }
  handleSortTOP = (product) => {
    this.props.sortProductTop(product)
  }


  render() {
    return (
      <div className="col-xl-3 col-lg-4">
        <div className="sidebar-shop">
          <div className="shop-widget">
            <h3 className="shop-title">Search by</h3>
            <form action="#" className="shop-search">
              <input type="text" placeholder="Your keyword...." />
              <button>
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          {/*
    <div class="shop-widget">
<h3 class="shop-title">Filter selection</h3>
<div class="price-filter">
  <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
  <input type="text" id="amount">
</div>
    </div> */}
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
                <a href="#" onClick={() => this.handleSortTOP(this.props.items)}>Product: Top Sales</a>
              </li>
            </ul>
          </div>
          <div className="shop-widget">
            <h3 className="shop-title">Recent Product</h3>
            <ul className="shop-sidebar-product">
              <li>
                <div className="side-pro-img">
                  <a href="#">
                    <img src="./assets/shop-rsp3.jpg" alt="" />
                  </a>
                </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <a href="#">Raglan Baseball-Style</a>
                  </h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="side-pro-img">
                  <a href="#">
                    <img src="./assets/shop-rsp2.jpg" alt="" />
                  </a>
                </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <a href="#">Raglan Baseball-Style</a>
                  </h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="side-pro-img">
                  <a href="#">
                    <img src="./assets/shop-rsp4.jpg" alt="" />
                  </a>
                </div>
                <div className="side-pro-content">
                  <div className="side-pro-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <h5>
                    <a href="#">Raglan Baseball-Style</a>
                  </h5>
                  <div className="side-pro-price">
                    <span>$119.00 USD</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="shop-widget">
            <div className="shop-sidebar-banner">
              <a href="#">
                <img src="./assets/shop-banner.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { products: { items } } = state
  return {
    items
  }
}

const mapDispatchToProps = {
  sortProductAZ,
  sortProductZA,
  sortProductH2L,
  sortProductL2H,
  sortProductTop,
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
