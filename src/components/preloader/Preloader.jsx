import React from 'react';

export default function Preloader({ visible }) {
  return (
    <div id="preloader" style={{ display: visible ? 'block' : 'none' }}>
      <div className="preloader">
        <span />
        <span />
      </div>
    </div>
  );
}
