import React from 'react'

export function Checkout() {
  return (
    <div>
      <button type="button" className="btn btn-outline-dark "  data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1 " ></span>Proceed to Checkout
            </button>
    </div>
  )
}
