import React from 'react'
import { Link } from 'react-router-dom';
function Brands() {
  return (
    <div>
        <h1>Brands</h1>
        <button><Link to={`/data/adidas`}>show  adidas stock</Link></button>
        <button><Link to={`/data/puma`}>show  puma stock</Link></button>
        <button><Link to={`/data/nike`}>show  nike stock</Link></button>
        <button><Link to={`/data/underarmour`}>show  under armour stock</Link></button>

    </div>
  )
}

export default Brands