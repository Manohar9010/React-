import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  ChevronDown,
  MenuSquare,
  Package2,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { Button, InputGroup } from "reactstrap";
import { Input } from "reactstrap";
import logoimg from "../../../src/assets/Images/logoimage.avif";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchCart } from "../../Redux/Fetures/CartSlice";
import Cart from "../Pages/User/Cart/Cart";

export default function Header() {
  const [togleopen, setTogleope] = useState(false);
  const [navuse, setNavuse] = useState(false);
  const [navoption, setNavoption] = useState("normal");
  const data = useSelector((state) => state.singupdataslice);
  const navtoggle = () => {
    setNavuse(!navuse);
  };
  const dispatch = useDispatch();
  const toglefun = () => setTogleope(!togleopen);
  const { error, cart, pending, refresh } = useSelector(
    (store) => store.cartSlice
  );

  useEffect(() => {
    setNavoption(data.user.userType || "normal");
    if (!data.user.userType) {
      setNavoption("normal");
    }
  });

  useEffect(() => {
    dispatch(fetchCart());
  }, [refresh]);
  return (
    <div className="headermain">
      <div children="headpost">
        <div>
          <div className="upperslide">
            <Swiper
              spaceBetween={30}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              speed={5000}
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper  bg-black"
            >
              {[99, 100, 200].map((e, i) => {
                return (
                  <SwiperSlide key={i} className="bg-black text-white">
                    Free Gift worth {e} on PREPAID ORDERS
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div>
            <div className="headtitle border-b-2 border-gray-400">
              <div className="user mt-1"></div>
              <div className="logo text-center">
                {" "}
                <img src={logoimg} alt="" />
              </div>
              <div className="search gap-4">
                <InputGroup style={{ height: "20px", width: "" }}>
                  <Input type="text" placeholder="Search for product" />
                  <Button
                    className="seabtn"
                    style={{ background: "transparent" }}
                  >
                    <Search color="black" size={20} strokeWidth={1.25} />
                  </Button>
                </InputGroup>
                <div className="user mt-1">
                  {
                    <NavLink
                      style={{ color: "black" }}
                      to={data.user.userType ? "/profile" : "/belllogin"}
                    >
                      <UserRound size={28} strokeWidth={1.25} />
                    </NavLink>
                  }
                </div>
                <span className="packagemenusqure mt-3">
                  <MenuSquare role="button" onClick={navtoggle} size={30} />
                </span>
                <span className="package mt-3 me-6">
                  <div className="relative p-2">
                    <Package2
                      role="button"
                      onClick={toglefun}
                      size={30}
                      style={{ paddingTop: "0", margin: "0" }}
                      strokeWidth={1.25}
                    />
                    <p className="text-sm p-1 h-6 w-6 absolute top-0 right-0 bg-red-500 border border-white rounded-full grid  text-white font-bold place-content-center">
                      {cart?.length || 0}
                    </p>
                  </div>
                </span>
              </div>
            </div>

            <div className="navbar  !bg-slate-100">
              <ul className="d-flex justify-content-center gap-5  ">
                {navoption === "normal" && (
                  <>
                    <li>
                      <NavLink style={{ color: "black" }} to={"/"}>
                        Home
                      </NavLink>
                    </li>

                    <li>
                      {" "}
                      <NavLink style={{ color: "black" }} to={"/bellcontact"}>
                        Shop All
                      </NavLink>
                    </li>

                    <li className="fragreceli">
                      <div className="d-flex align-items-center">
                        Fragrance
                        <ChevronDown size={20} color="grey" className="arrow" />
                      </div>
                      <div className="frageacesub">
                        <ul>
                          <li>
                            <NavLink to={"/fragrance"}>All Perfumes</NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/fragrance"}
                              state={{ gender: "male" }}
                            >
                              Men
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/fragrance"}
                              state={{ gender: "female" }}
                            >
                              Women
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/fragrance"}
                              state={{ color: ["unisex"] }}
                            >
                              Unisex
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/fragrance"}
                              state={{ color: ["oudCollection"] }}
                            >
                              Oud Collection
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to={"/fragrance"}
                              state={{ color: ["LittleLuxuries"] }}
                            >
                              Little Luxuries
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink style={{ color: "black" }} to={"/bellrigister"}>
                        Registration
                      </NavLink>
                    </li>
                  </>
                )}
                {navoption === "customer" && (
                  <>
                    <li>
                      <NavLink style={{ color: "black" }} to={"/"}>
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink style={{ color: "black" }} to={"/bellcontact"}>
                        Shop All
                      </NavLink>
                    </li>

                    <li className="fragreceli">
                      <div className="d-flex align-items-center">
                        Fragrance
                        <ChevronDown size={20} color="grey" className="arrow" />
                      </div>

                      <div className="">
                        <ul>
                          <li className="fragreceli">
                            <div className="frageacesub">
                              <ul>
                                <li>
                                  <NavLink to={"/fragrance"}>
                                    All Perfumes
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={"/fragrance"}
                                    state={{ gender: "male" }}
                                  >
                                    Men
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={"/fragrance"}
                                    state={{ gender: "female" }}
                                  >
                                    Women
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={"/fragrance"}
                                    state={{ color: ["unisex"] }}
                                  >
                                    Unisex
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={"/fragrance"}
                                    state={{ color: ["oudCollection"] }}
                                  >
                                    Oud Collection
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink
                                    to={"/fragrance"}
                                    state={{ color: ["LittleLuxuries"] }}
                                  >
                                    Little Luxuries
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink to={"/wishlist"} style={{ color: "black" }}>
                        Wishlist
                      </NavLink>
                    </li>
                  </>
                )}

                {navoption === "admin" && (
                  <>
                    <li>
                      <NavLink to={"/dashbord"} style={{ color: "black" }}>
                        Dashbord
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/product"} style={{ color: "black" }}>
                        Product
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {togleopen && (
        <section className="menubar">
          <div className="navbar">
            <div className="closebtn">
              <button className="cbtn">
                <span className="btnclose">
                  <X className="xbtn" role="button" onClick={toglefun} />
                </span>
              </button>
            </div>
            <div className="menutext">
              {navoption == "normal" ? (
                <div>
                  <h5>Your crat is empty</h5>

                  <Button>Continue shopping</Button>

                  <h5>Have an account?</h5>

                  <p>
                    <NavLink
                      style={{ color: "black", textDecoration: "underline" }}
                      onClick={toglefun}
                      to={"belllogin"}
                    >
                      Login
                    </NavLink>{" "}
                    to check out faster.
                  </p>
                </div>
              ) : (
                <Cart />
              )}
            </div>
          </div>
        </section>
      )}

      {navuse && (
        <div className="navbar_toggle">
          <ul className=" ">
            <li>
              <NavLink style={{ color: "black" }} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink style={{ color: "black" }} to={"/bellabout"}>
                About
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink style={{ color: "black" }} to={"/bellcontact"}>
                Contact Us
              </NavLink>
            </li>
            <li className="fragreceli">
              Fragrance <ChevronDown size={20} color="grey" className="arrow" />
              <div className="frageacesub">
                <ul>
                  <li>
                    <a href="">All Perfumes</a>
                  </li>
                  <li>
                    <a href="">Men</a>
                  </li>
                  <li>
                    <a href="">Women</a>
                  </li>
                  <li>
                    <a href="">Unisex</a>
                  </li>
                  <li>
                    <a href="">Oud Collection</a>
                  </li>
                  <li>
                    <a href="">Little Luxuries</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink style={{ color: "black" }} to={"/bellrigister"}>
                Registration
              </NavLink>{" "}
            </li>

            <li>Profile</li>
            <li>Wishlist</li>
          </ul>
        </div>
      )}
    </div>
  );
}
