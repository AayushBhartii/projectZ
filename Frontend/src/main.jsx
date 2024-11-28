import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddRestaurant from './pages/AddRestaurant/AddRestaurant'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import GetTheApp from './pages/GetTheApp/GetTheApp'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import ShowCase from './pages/ShowCase/ShowCase'
import SkipedPage from './pages/SkipedPage/SkipedPage'
import User from './pages/User/User'
import UserSettingsPage from './pages/UserSettingsPage/UserSettingsPage'

import TestPage from './pages/TestPage/TestPage'
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from './App'
import Dining from './components/AddRestaurantComponents/AddRestaurantHeader/Dining'
import Fooddelieverydining from './components/AddRestaurantComponents/AddRestaurantHeader/Fooddelieverydining'
import RestaurantRegistration from './components/AddRestaurantComponents/AddRestaurantHeader/RestaurantRegistration'
import InvestorRelations from './components/Navbars/InvestorsRelation/InvestorRelations'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route path="/RestaurantRegistration" element={<RestaurantRegistration />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/fooddelievetydining" element={<Fooddelieverydining />} />
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/user/:userId/notifications" element={<SkipedPage />} />
      <Route path="/investors-relations" element={<InvestorRelations />} />
      <Route path="/user/:userId/network" element={<SkipedPage />} />
      <Route path="/user/:userId/find-friends" element={<SkipedPage />} />
      <Route path="/user/:userId/settings" element={<UserSettingsPage />}/>
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/:city/:hotel/:page" element={<RestaurantPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
)
