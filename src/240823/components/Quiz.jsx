import React from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

function Quiz() {
  return (
    <BrowserRouter>
      <Navigaion id={1} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<Detail />} />
        <Route path="/products/:productId/notice" element={<ProductNotice />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<UsersCont />}>
          <Route index element={<Users />} />
          <Route path="coupon" element={<UserCoupon />} />
          <Route path="question" element={<UserQuestion />} />
          <Route path="notice" element={<UserNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Navigaion({ id }) {
  const navData = [
    { path: "/", text: "Home" },
    { path: `/products/${id}`, text: "Detail" },
    { path: `/products/${id}/notice`, text: "Product Notice" },
    { path: "/cart", text: "Cart" },
    { path: "/user", text: "User" },
    { path: "/user/coupon", text: "Coupon" },
    { path: "/user/question", text: "Question" },
    { path: "/user/notice", text: "Notice" },
  ];

  return (
    <nav>
      <ul>
        {navData.map((el, i) => (
          <li key={`${i}__${el.text}`}>
            <Link to={el.path}>{el.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function Detail() {
  const { productId } = useParams("productId");

  return <h2>{productId} Product Detail</h2>;
}

function ProductNotice() {
  const { productId } = useParams("productId");

  return <h2>{productId} Product Notice</h2>;
}

function Cart() {
  return <h2>Cart Page</h2>;
}

function UsersCont() {
  return <Outlet />;
}

function Users() {
  return <h2>User Page</h2>;
}

function UserCoupon() {
  return <h2>Coupon Page</h2>;
}

function UserQuestion() {
  return <h2>Question Page</h2>;
}

function UserNotice() {
  return <h2>Notice Page</h2>;
}

export default Quiz;
