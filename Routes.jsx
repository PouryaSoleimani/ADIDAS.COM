// ^ ROUTER _________________________________________________________________________________________________________
import { createBrowserRouter } from "react-router-dom";
// Importing Routes
import Home from "./src/Routes/Home";
import SignUp from "./src/Routes/SignUp";
import Login from "./src/Routes/Login";
import MyAdidas from "./src/Routes/MyAdidas";
import Products from "./src/Routes/Products";
import AllProducts from "./src/Components/Products/AllProducts";
import MenProducts from "./src/Components/Products/MenProducts";
import WomenProducts from "./src/Components/Products/WomenProducts";
import KidsProducts from "./src/Components/Products/KidsProducts";
import SaleProducts from "./src/Components/Products/SaleProducts";
import KitsProducts from "./src/Components/Products/KitsProducts";
import ProductPage from "./src/Components/Products/ProductPage";
import NotFound from "./src/Routes/404";
import ShoppingBag from "./src/Routes/ShoppingBag";
import WishList from "./src/Routes/WishList";
import CheckOut from "./src/Routes/CheckOut";


export const router = createBrowserRouter([
 { path: '/', element: <Home /> },
 { path: '/signup', element: <SignUp /> },
 { path: '/login', element: <Login /> },
 { path: '/myadidas', element: <MyAdidas /> },
 { path: '/shoppingbag', element: <ShoppingBag /> },
 { path: '/wishlist', element: <WishList /> },
 { path: '/checkout', element: <CheckOut /> },
 { path: '*', element: <NotFound /> },
 //^PRODUCTS
 {
  path: '/products', element: <Products />, children: [
   { path: 'all', element: <AllProducts /> },
   { path: 'men', element: <MenProducts /> },
   { path: 'women', element: <WomenProducts /> },
   { path: 'kids', element: <KidsProducts /> },
   { path: 'sale', element: <SaleProducts /> },
   { path: 'jerseys', element: <KitsProducts /> },
   { path: 'productpage', element: <ProductPage /> },
  ]
 }
])


