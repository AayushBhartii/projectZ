import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import css from './OrderBodyComponent.module.css';

import BookaTableComponent from './Components/BookaTableComponent/BookaTableComponent';
import MenuComponent from './Components/MenuComponent/MenuComponent';
import OrderOnlineFieldComponent from './Components/OrderOnlineFieldComponent/OrderOnlineFieldComponent';
import TiffinServiceComponent from './Components/OrderOnlineTiffinFieldComponent/OrderOnlineTiffinFieldComponent';
import OverviewFieldComponent from './Components/OverviewFieldComponent/OverviewFieldComponent';
import PhotosComponent from './Components/PhotosComponent/PhotosComponent';
import ReviewsComponent from './Components/ReviewsComponent/ReviewsComponent';

const OrderBodyComponent = () => {
  const [pageCompo, setPageComp] = useState(<OverviewFieldComponent />);
  const navigate = useNavigate();
  const { city, id, page } = useParams();

  // Function to determine active class for menu items
  const isActiveClass = (pageName) => {
    if (!page && pageName === 'overview') {
      return `${css.menuTxt} ${css.menuTxtActive}`;
    }
    return page === pageName
      ? `${css.menuTxt} ${css.menuTxtActive}`
      : `${css.menuTxt} ${css.menuTxtHover}`;
  };

  useEffect(() => {
    // Redirect to the default overview page if no specific page is provided or if the page is invalid
    if (!page || !['overview', 'order', 'reviews', 'photos', 'menu', 'bookatable', 'tiffins'].includes(page)) {
      navigate(`/${city}/${id}/overview`, { replace: true });
    } else {
      switch (page) {
        case 'overview':
          setPageComp(<OverviewFieldComponent />);
          break;
        case 'order':
          setPageComp(<OrderOnlineFieldComponent />);
          break;
        case 'reviews':
          setPageComp(<ReviewsComponent />);
          break;
        case 'photos':
          setPageComp(<PhotosComponent />);
          break;
        case 'menu':
          setPageComp(<MenuComponent />);
          break;
        case 'bookatable':
          setPageComp(<BookaTableComponent />);
          break;
        case 'tiffins':
          setPageComp(<TiffinServiceComponent />);
          break;
        default:
          setPageComp(<OverviewFieldComponent />);
      }
    }

    // Scroll behavior
    if (!page || page === 'overview') {
      // When the user first lands on the page or navigates to overview, scroll to the top
      window.scrollTo({
        top: 0,
        // behavior: 'smooth',
      });
    } else {
      // When navigating between sections, scroll to the middle
      window.scrollTo({
        top: window.innerHeight / 2,
        behavior: 'smooth',
      });
    }

  }, [city, id, page, navigate]);

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.menu}>
          <NavLink to={`/${city}/${id}/overview`} className={() => isActiveClass('overview')}>
            Overview
          </NavLink>
          <NavLink to={`/${city}/${id}/menu`} className={() => isActiveClass('menu')}>
            Menu
          </NavLink>
          <NavLink to={`/${city}/${id}/order`} className={() => isActiveClass('order')}>
            Takeaway
          </NavLink>
          <NavLink to={`/${city}/${id}/tiffins`} className={() => isActiveClass('tiffins')}>
            Tiffins
          </NavLink>
          <NavLink to={`/${city}/${id}/photos`} className={() => isActiveClass('photos')}>
            Photos
          </NavLink>
          <NavLink to={`/${city}/${id}/reviews`} className={() => isActiveClass('reviews')}>
            Reviews
          </NavLink>
          <NavLink to={`/${city}/${id}/bookatable`} className={() => isActiveClass('bookatable')}>
            Book a Table
          </NavLink>
        </div>
        <div className={css.componentsBody}>{pageCompo}</div>
      </div>
    </div>
  );
};

export default OrderBodyComponent;
