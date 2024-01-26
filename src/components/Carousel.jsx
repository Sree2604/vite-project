import React from 'react'

function Carousel() {
  return (
    <>
        <div className="carousel">
          <div className="frame-4">
            <div className="group">
              <div className="arrow-right-wrapper">
                <img
                  className="arrow-right"
                  alt="Arrow right"
                  src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/arrow-right-1.svg"
                />
              </div>
            </div>
            <div className="img-wrapper">
              <img
                className="arrow-right"
                alt="Arrow right"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/arrow-right-1-1.svg"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default Carousel