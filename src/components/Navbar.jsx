import React from 'react'

function Navbar() {
  return (
    <>
        <div className="navbar">
          <div className="logo">
            <img
              className="image"
              alt="Image"
              src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-1.png"
            />
          </div>
          <div className="input">
            <div className="frame">
              <div className="text-wrapper">Enter Keyword...</div>
              <img
                className="search"
                alt="Search"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/search.svg"
              />
            </div>
            <div className="text-wrapper-2">Search</div>
          </div>
          <div className="helpline">
            <img
              className="headphones"
              alt="Headphones"
              src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/headphones-1.svg"
            />
            <div className="call-us">CALL US 24/7</div>
            <div className="text-wrapper-3">(1800)-88-66-991</div>
          </div>
          <div className="icon-set">
            <div className="account-icon">
              <img
                className="user"
                alt="User"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/user-1.svg"
              />
            </div>
            <div className="wishlist">
              <div className="overlap-group">
                <div className="ellipse" />
                <img
                  className="heart"
                  alt="Heart"
                  src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/heart-1.svg"
                />
                <div className="ellipse-2" />
                <div className="ellipse-2" />
                <div className="text-wrapper-4">0</div>
              </div>
            </div>
            <div className="cart">
              <div className="overlap">
                <div className="ellipse-3" />
                <img
                  className="basket-business"
                  alt="Basket business"
                  src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/basket-business-comerce-1.svg"
                />
                <div className="ellipse-4" />
                <div className="text-wrapper-5">0</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar