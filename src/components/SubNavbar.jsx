import React from 'react'

function SubNavbar() {
  return (
    <>
        <div className="sub-navbar">
          <div className="frame-2">
            <img
              className="hamburger-menu"
              alt="Hamburger menu"
              src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/hamburger-menu-1.svg"
            />
            <div className="text-wrapper-6">Shop by Department</div>
          </div>
          <div className="submenu">
            <div className="frame-3">
              <div className="text-wrapper-7">Home</div>
              <img
                className="keyboard-arrow-down"
                alt="Keyboard arrow down"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/keyboard-arrow-down.svg"
              />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-7">Shop</div>
              <img
                className="keyboard-arrow-down"
                alt="Keyboard arrow down"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/keyboard-arrow-down-1.svg"
              />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-7">Pages</div>
              <img
                className="keyboard-arrow-down"
                alt="Keyboard arrow down"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/keyboard-arrow-down-2.svg"
              />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-8">Blog</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-8">Contact</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SubNavbar