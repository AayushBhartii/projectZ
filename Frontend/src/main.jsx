import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddRestaurant from "./pages/AddRestaurant/AddRestaurant";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GetTheApp from "./pages/GetTheApp/GetTheApp";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import ShowCase from "./pages/ShowCase/ShowCase";
import SkipedPage from "./pages/SkipedPage/SkipedPage";
import User from "./pages/User/User";
import UserSettingsPage from "./pages/UserSettingsPage/UserSettingsPage";

import TestPage from "./pages/TestPage/TestPage";
import App from "./App";
import Dining from "./components/AddRestaurantComponents/AddRestaurantHeader/Dining";
import Fooddelieverydining from "./components/AddRestaurantComponents/AddRestaurantHeader/Fooddelieverydining";
import RestaurantRegistration from "./components/AddRestaurantComponents/AddRestaurantHeader/RestaurantRegistration";
import InvestorRelations from "./components/Navbars/InvestorsRelation/InvestorRelations";

import "./index.css";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FilterPopupWindow from "./components/FilterPopupWindow/FilterPopupWindow";
import WhoWeAre from "./pages/Whoweare/Whoweare";
import WorkWithUs from "./pages/Workwithus/WorkWithUs";
import Blog from "./pages/Blog/Blog";
import ReportFraud from "./pages/Reportfraud/Reportfraud";
import MenuCarousel from "./components/RestaurantComponents/OrderBodyComponent/Components/MenuComponent/MenuCaraousel";

import LandingPage from "./vendorDashboard/pages/LandingPage";

import Privacy from "./pages/Privacy/Privacy";
import Security from "./pages/Security/Security";
import Terms from "./pages/Terms/Terms";
import AddToCart from "./pages/Addtocart/Addtocart";
import Cart from "./pages/Cart/Cart";
import BookingDetails from "./pages/BookingDetails/BookingDetails";

import AllCategories from "./pages/Blog/AllCategories";
import Community from "./pages/Blog/Community";
import Company from "./pages/Blog/Company";
import Culture from "./pages/Blog/Culture";
import Technology from "./pages/Blog/Technology";

import TiffinServiceComponent from "./components/RestaurantComponents/OrderBodyComponent/Components/OrderOnlineTiffinFieldComponent/OrderOnlineTiffinFieldComponent";
import TiffinCheckoutPage from "./components/RestaurantComponents/OrderBodyComponent/Components/OrderOnlineTiffinFieldComponent/TifinCheckoutComponet";
import { CheckoutProvider } from "./helpers/CheckoutProvider";
import OrderHistory from "./components/RestaurantComponents/OrderBodyComponent/Components/OrderOnlineTiffinFieldComponent/OrderHistory";
import OrderNotificationBar from "./components/RestaurantComponents/OrderBodyComponent/Components/OrderOnlineTiffinFieldComponent/OrderNotificationComponet";
import LiveLocation from "./components/RestaurantComponents/OrderBodyComponent/Components/OrderOnlineTiffinFieldComponent/Livelocation";

import RestaurantListSection from "./components/ClaimRestaurantComponents/RestaurantListSection";
import RestaurantClaimForm from "./components/ClaimRestaurantComponents/RestaurantClaimForm";

import SuccessPage from "./components/ClaimRestaurantComponents/success";
import ClaimsList from "./components/ClaimRestaurantComponents/ClaimsList";
// import AdminPanel from "./components/HomeComponents/PopularPlaces/AdminPanel";
import AddressSearch from "./components/HomeComponents/PopularPlaces/AddressSearch";


ReactDOM.createRoot(document.getElementById("root")).render(
  <CheckoutProvider>
    <BrowserRouter>
      <OrderNotificationBar />
      <Routes>
        <Route path="/Live" element={<LiveLocation />} />
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route
          path="/RestaurantRegistration"
          element={<RestaurantRegistration />}
        />
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/menucarousel" element={<MenuCarousel />} />
        <Route path="/reportfraud" element={<ReportFraud />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        
        <Route path="/dining" element={<Dining />} />
        <Route path="/fooddelievetydining" element={<Fooddelieverydining />} />
        <Route path="/show-case" element={<ShowCase />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/:hashId" element={<User />} />
        <Route path="/user/:userId/notifications" element={<SkipedPage />} />
        <Route path="/investors-relations" element={<InvestorRelations />} />
        <Route path="/user/:userId/network" element={<SkipedPage />} />
        <Route path="/user/:userId/find-friends" element={<SkipedPage />} />
        <Route path="/user/:userId/settings" element={<UserSettingsPage />} />
        <Route path="/get-the-app" element={<GetTheApp />} />
        <Route path="/:city/:id" element={<RestaurantPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/checkout" element={<TiffinCheckoutPage />} />
        <Route path="/:city/:id/:page" element={<RestaurantPage />} />
        <Route path="/History" element={<OrderHistory />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />

        {/* Blog Paths */}
        <Route path="/blog/allcategories" element={<AllCategories />} />
        <Route path="/blog/community" element={<Community />} />
        <Route path="/blog/company" element={<Company />} />
        <Route path="/blog/culture" element={<Culture />} />
        <Route path="/blog/technology" element={<Technology />} />
        <Route path="/restaurants" element={<RestaurantListSection />} />
        <Route path="/claim-restaurant/:id" element={<RestaurantClaimForm />} />


        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/ClaimsList" element={<ClaimsList />} />

        <Route path="/addresses" element={<AddressSearch />}>
          <Route path=":locality" element={<AddressSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CheckoutProvider>
);
