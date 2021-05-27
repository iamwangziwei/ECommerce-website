import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAdress } from "../actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAdressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullname, setFullname] = useState(shippingAddress.fullname);
  const [adress, setAdress] = useState(shippingAddress.adress);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAdress({ fullname, adress, city, postalcode, country })
    );
    props.history.push("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Adress</h1>
        </div>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter full name"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="adress">Adress</label>
          <input
            type="text"
            id="adress"
            placeholder="Enter adress"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalcode">Postal Code</label>
          <input
            type="text"
            id="postalcode"
            placeholder="Enter postalcode"
            value={postalcode}
            onChange={(e) => {
              setPostalcode(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
