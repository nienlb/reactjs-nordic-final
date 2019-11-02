import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <section
        className="pt-200 pb-200 mt-80"
        style={{ backgroundImage: 'url(/assets/slider-1.jpg)', backgroundSize: 'cover' }}
      >
        <div className="container">
          <h1>Home Page</h1>
        </div>
      </section>
    );
  }
}
