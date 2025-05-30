import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './UserProfileRightsideBar.module.css';

import { reviewPage, photosPage, followersPage, recentlyviewedPage, bookmarksPage, blogpostsPage, orderhistoryPage, myaddressPage, favoriteordersPage, bookingsPage, takeawayorderPage } from '../../../helpers/constants';

import ImgSrc from '/images/proandproplus.jpg';

import UserReviewedCard from '../../../utils/UserProfileUtils/UserProfile/Activity/UserReviewedCard/UserReviewedCard';
import UserPhotosCard from '../../../utils/UserProfileUtils/UserProfile/Activity/UserPhotosCard/UserPhotosCard';
import RecentlyViewed from '../../../utils/UserProfileUtils/UserProfile/Activity/RecentlyViewed/RecentlyViewed';
import UserBookmarks from '../../../utils/UserProfileUtils/UserProfile/Activity/UserBookmarks/UserBookmarks';
import UserBlogPosts from '../../../utils/UserProfileUtils/UserProfile/Activity/UserBlogPosts/UserBlogPosts';
import UserFollowersCard from '../../../utils/UserProfileUtils/UserProfile/Activity/UserFollowersCard/UserFollowersCard';
import OrderHistory from '../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/OrderHistory/OrderHistory';
import MyAddresses from '../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/MyAddresses/MyAddresses';
import FavoriteOrders from '../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/FavoriteOrders/FavoriteOrders';
import YoursBooking from '../../../utils/UserProfileUtils/UserProfile/TableBooking/YoursBooking/YoursBooking';
import Takeaway from '../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/TakeawayOrders/TakeawayOrders';
import TakeawayOrders from '../../../utils/UserProfileUtils/UserProfile/OnlineOrdering/TakeawayOrders/TakeawayOrders';

let UserProfileRightsideBar = () => {

    let [currComp, setCurrComp] = useState(<h1>Something Went Wrong!</h1>);

    let { userId, hashId } = useParams(); 

    let data = [
        {
            imgSrc: ImgSrc,
            title: "Paradise Biryani",
            address: "Kukatpally, Hyd",
            stars: 5,
            days: 10,
            votes: 10,
            comments: 2,
            id: 123,
            userImg: ImgSrc,
            userId: userId,
        },
        {
            imgSrc: ImgSrc,
            title: "Paradise Biryani",
            address: "Kukatpally, Hyd",
            stars: 5,
            days: 10,
            votes: 10,
            comments: 2,
            id: 123,
            userImg: ImgSrc,
            userId: userId,
        },
        {
            imgSrc: ImgSrc,
            title: "Blue Nile Restaurant",
            address: "Camp, Pune",
            stars: 4,
            days: 5,
            votes: 15,
            comments: 3,
            id: 124,
            userImg: ImgSrc,
            userId: userId,
        },
        {
            imgSrc: ImgSrc,
            title: "Krishna Veg",
            address: "Kothrud, Pune",
            stars: 4,
            days: 8,
            votes: 12,
            comments: 5,
            id: 125,
            userImg: ImgSrc,
            userId: userId,
        }
        // ...other entries
    ];

   useEffect(() => {
    switch (hashId) {
        case photosPage:
            setCurrComp(<UserPhotosCard hashId={hashId} />);
            break;
        case followersPage:
            setCurrComp(<UserFollowersCard hashId={hashId} userData={{ following: 0, followers: 0 }} />);
            break;
        case recentlyviewedPage:
            setCurrComp(<RecentlyViewed hashId={hashId} />);
            break;
        case bookmarksPage:
            setCurrComp(<UserBookmarks hashId={hashId} />);
            break;
        case blogpostsPage:
            setCurrComp(<UserBlogPosts hashId={hashId} />);
            break;
        case orderhistoryPage:
            setCurrComp(<OrderHistory hashId={hashId} />);
            break;
        case myaddressPage:
            setCurrComp(<MyAddresses hashId={hashId} />);
            break;
        case favoriteordersPage:
            setCurrComp(<FavoriteOrders hashId={hashId} />);
            break;
        case bookingsPage:
            setCurrComp(<YoursBooking hashId={hashId} />);
            break;
        case takeawayorderPage:
            setCurrComp(<TakeawayOrders   hashId={hashId}/>);
            break;
        default:
            setCurrComp(data?.map((val, index) => {
                return <UserReviewedCard data={val} key={index} />
            }));
    }
   }, [hashId]);

    return (
        <div className={css.outerDiv}>
            <div className={css.innerDiv}>
                {/* <div className={css.title}>Reviews</div> */}
                <div className={css.contentBox}>
                    { currComp }
                </div>
            </div>
        </div>
    );
}

export default UserProfileRightsideBar;
