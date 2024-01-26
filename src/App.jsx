import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import SubNavbar from './components/SubNavbar';
import Carousel from './components/Carousel';
import Blog from './components/Blog';
import ShopNew from './components/ShopNew';
import ShopNew2 from './components/ShopNew2';

function App() {
  return (
    <div className="index">
      <div className="div">
        <Navbar/>
        <SubNavbar/>
        <Carousel/>
        <div className="overlap-2">
          <div className="shop-new">
            <Blog/>
            <ShopNew/>
            <ShopNew2/>
            <div className="blog-2">
              <div className="frame-16">
                <div className="organic-ingredients">
                  Organic Ingredients
                  <br />
                  Made Easy
                </div>
                <div className="shop-now-3">Shop now &gt;&gt;</div>
              </div>
              <div className="frame-17">
                <img
                  className="mail-open-alt"
                  alt="Mail open alt"
                  src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/mail-open-alt-1-1.svg"
                />
                <div className="text-wrapper-23">Subscribe Us</div>
                <p className="p">Sign up and get a voucher of worth $250.00</p>
                <div className="group-wrapper">
                  <div className="group-4">
                    <div className="text-wrapper-24">Email Address</div>
                    <img
                      className="arrow-forward"
                      alt="Arrow forward"
                      src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/arrow-forward.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="group-2">
                <div className="group-5">
                  <img
                    className="img"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/ellipse-7.svg"
                  />
                  <div className="text-wrapper-10">Shop Popular</div>
                </div>
                <div className="frame-8">
                  <div className="nut-seed">Nut &amp; Seed</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Oils</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Fruits</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Tomatoes</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Fresh Meat</div>
                </div>
              </div>
              <div className="overlap-3">
                <div className="frame-15">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-12">Summer Sale</div>
                      <div className="text-wrapper-13">50% Off</div>
                      <div className="text-wrapper-14">All fruits Products</div>
                    </div>
                  </div>
                  <div className="product-cards">
                    <div className="div-3">
                      <div className="c-ards">
                        <div className="frame-10">
                          <div className="nut-seed-2">Nut &amp; Seed</div>
                          <div className="flexcontainer">
                            <p className="text">
                              <span className="span">
                                Organic High-Curcumin <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Turmeric Powder</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                        </div>
                        <div className="frame-11">
                          <div className="text-wrapper-16">Tomatoes</div>
                          <div className="flexcontainer-2">
                            <p className="text">
                              <span className="span">
                                Grassfed Organic Turmeric
                                <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Superghee</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart-2">ADD TO CART &gt;&gt;</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Home</div>
                          <div className="flexcontainer-3">
                            <p className="text">
                              <span className="span">
                                Pamela’s Products Artisan
                                <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Blend Flour Gluten Free</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-18">Home</div>
                          <div className="flexcontainer-4">
                            <p className="text">
                              <span className="span">
                                Frontier Co-op Organic
                                <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Adobo Seasoning Blend</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line-2"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="text-wrapper-19">ONLINE ONLY</div>
                      </div>
                      <div className="frame-14">
                        <div className="text-wrapper-19">ON SALE</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="image-2">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-25">Hot This Week</div>
                      <div className="text-wrapper-26">$15.55</div>
                      <div className="spices-flavours">Spices &amp; Flavours</div>
                    </div>
                  </div>
                  <div className="product-cards">
                    <div className="div-3">
                      <div className="frame-10">
                        <div className="nut-seed-2">Nut &amp; Seed</div>
                        <div className="flexcontainer">
                          <p className="text">
                            <span className="span">
                              Organic High-Curcumin <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Turmeric Powder</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                      </div>
                      <div className="frame-11">
                        <div className="text-wrapper-16">Tomatoes</div>
                        <div className="flexcontainer-2">
                          <p className="text">
                            <span className="span">
                              Grassfed Organic Turmeric
                              <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Superghee</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart-2">ADD TO CART &gt;&gt;</div>
                      </div>
                      <div className="frame-12">
                        <div className="text-wrapper-17">Home</div>
                        <div className="flexcontainer-3">
                          <p className="text">
                            <span className="span">
                              Pamela’s Products Artisan
                              <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Blend Flour Gluten Free</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                      </div>
                      <div className="frame-13">
                        <div className="text-wrapper-18">Home</div>
                        <div className="flexcontainer-4">
                          <p className="text">
                            <span className="span">
                              Frontier Co-op Organic
                              <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Adobo Seasoning Blend</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line-2"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="group-2">
                <div className="group-6">
                  <img
                    className="img"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/ellipse-7.svg"
                  />
                  <div className="text-wrapper-10">Top Rated</div>
                </div>
                <div className="frame-8">
                  <div className="nut-seed">Nut &amp; Seed</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Oils</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Fruits</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Tomatoes</div>
                  <div className="ellipse-5" />
                  <div className="text-wrapper-11">Fresh Meat</div>
                </div>
              </div>
              <div className="overlap-3">
                <div className="frame-15">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-12">Summer Sale</div>
                      <div className="text-wrapper-13">50% Off</div>
                      <div className="text-wrapper-14">All fruits Products</div>
                    </div>
                  </div>
                  <div className="product-cards">
                    <div className="div-3">
                      <div className="c-ards">
                        <div className="frame-10">
                          <div className="nut-seed-2">Nut &amp; Seed</div>
                          <div className="flexcontainer">
                            <p className="text">
                              <span className="span">
                                Organic High-Curcumin <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Turmeric Powder</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                        </div>
                        <div className="frame-11">
                          <div className="text-wrapper-16">Tomatoes</div>
                          <div className="flexcontainer-2">
                            <p className="text">
                              <span className="span">
                                Grassfed Organic Turmeric
                                <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Superghee</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart-2">ADD TO CART &gt;&gt;</div>
                        </div>
                        <div className="frame-12">
                          <div className="text-wrapper-17">Home</div>
                          <div className="flexcontainer-3">
                            <p className="text">
                              <span className="span">
                                Pamela’s Products Artisan
                                <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Blend Flour Gluten Free</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                        </div>
                        <div className="frame-13">
                          <div className="text-wrapper-18">Home</div>
                          <div className="flexcontainer-4">
                            <p className="text">
                              <span className="span">
                                Frontier Co-op Organic
                                <br />
                              </span>
                            </p>
                            <p className="text">
                              <span className="span">Adobo Seasoning Blend</span>
                            </p>
                          </div>
                          <div className="text-wrapper-15">$22.00</div>
                          <img
                            className="line-2"
                            alt="Line"
                            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                          />
                          <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                        </div>
                      </div>
                      <div className="div-wrapper">
                        <div className="text-wrapper-19">ONLINE ONLY</div>
                      </div>
                      <div className="frame-14">
                        <div className="text-wrapper-19">ON SALE</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="image-3">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-27">Buy 2 Get</div>
                      <div className="text-wrapper-28">20% Off</div>
                      <div className="text-wrapper-29">Until July 29th</div>
                    </div>
                  </div>
                  <div className="product-cards">
                    <div className="div-3">
                      <div className="frame-10">
                        <div className="nut-seed-2">Nut &amp; Seed</div>
                        <div className="flexcontainer">
                          <p className="text">
                            <span className="span">
                              Organic High-Curcumin <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Turmeric Powder</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                      </div>
                      <div className="frame-11">
                        <div className="text-wrapper-16">Tomatoes</div>
                        <div className="flexcontainer-2">
                          <p className="text">
                            <span className="span">
                              Grassfed Organic Turmeric
                              <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Superghee</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart-2">ADD TO CART &gt;&gt;</div>
                      </div>
                      <div className="frame-12">
                        <div className="text-wrapper-17">Home</div>
                        <div className="flexcontainer-3">
                          <p className="text">
                            <span className="span">
                              Pamela’s Products Artisan
                              <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Blend Flour Gluten Free</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                      </div>
                      <div className="frame-13">
                        <div className="text-wrapper-18">Home</div>
                        <div className="flexcontainer-4">
                          <p className="text">
                            <span className="span">
                              Frontier Co-op Organic
                              <br />
                            </span>
                          </p>
                          <p className="text">
                            <span className="span">Adobo Seasoning Blend</span>
                          </p>
                        </div>
                        <div className="text-wrapper-15">$22.00</div>
                        <img
                          className="line-2"
                          alt="Line"
                          src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-3.svg"
                        />
                        <div className="add-to-cart">ADD TO CART &gt;&gt;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="overlap-4">
                <img
                  className="image-4"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-16.png"
                />
                <div className="rectangle" />
                <div className="fruits-vegetables">Fruits &amp; Vegetables</div>
                <div className="view-all">View all &gt;&gt;</div>
                <div className="flexcontainer-5">
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Nut &amp; Seed <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Oils <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Fruits <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Tomatoes <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31"> Soup</span>
                  </p>
                </div>
              </div>
              <div className="group-7">
                <div className="group-8">
                  <img
                    className="img"
                    alt="Ellipse"
                    src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/ellipse-7.svg"
                  />
                  <div className="text-wrapper-10">Shop by Categories</div>
                </div>
              </div>
              <div className="overlap-5">
                <div className="text-wrapper-32">Dairy Products</div>
                <div className="view-all-2">View all &gt;&gt;</div>
                <div className="flexcontainer-6">
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Nut &amp; Seed <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Oils <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Fruits <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Tomatoes <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31"> Soup</span>
                  </p>
                </div>
              </div>
              <div className="overlap-6">
                <div className="text-wrapper-32">Package Food</div>
                <div className="view-all-2">View all &gt;&gt;</div>
                <div className="flexcontainer-7">
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Nut &amp; Seed <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Oils <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Fruits <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Tomatoes <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31"> Soup</span>
                  </p>
                </div>
              </div>
              <div className="overlap-7">
                <div className="text-wrapper-32">Health &amp; Wellness</div>
                <div className="view-all-2">View all &gt;&gt;</div>
                <div className="flexcontainer-6">
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Nut &amp; Seed <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Oils <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Fruits <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Tomatoes <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31"> Soup</span>
                  </p>
                </div>
              </div>
              <div className="overlap-8">
                <div className="text-wrapper-32">Grocery &amp; Staples</div>
                <div className="view-all-2">View all &gt;&gt;</div>
                <div className="flexcontainer-6">
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Nut &amp; Seed <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Oils <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Fruits <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31">
                      {" "}
                      Tomatoes <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-30">&gt;</span>
                    <span className="text-wrapper-31"> Soup</span>
                  </p>
                </div>
              </div>
              <img
                className="line-3"
                alt="Line"
                src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/line-4.svg"
              />
            </div>
          </div>
          <img
            className="image-5"
            alt="Image"
            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-12.png"
          />
          <img
            className="image-6"
            alt="Image"
            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-13.png"
          />
          <img
            className="image-7"
            alt="Image"
            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-14.png"
          />
          <img
            className="image-8"
            alt="Image"
            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-15.png"
          />
          <img
            className="image-9"
            alt="Image"
            src="https://cdn.animaapp.com/projects/65b34b5cea2b501e422284a0/releases/65b34c90b4cac5d356504b7c/img/image-17.png"
          />
        </div>
      </div>
    </div>
  );
}

export default App