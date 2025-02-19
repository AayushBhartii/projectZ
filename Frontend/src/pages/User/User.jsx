import css from './User.module.css'

import Navbar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import UserProfileRightsideBar from '../../components/UserProfileComponents/UserProfileRightsideBar/UserProfileRightsideBar'

import UserHero from '../../utils/UserProfileUtils/UserHero/UserHero'
import LeftSideCardPanel from '../../utils/Cards/LeftSideCardPanel/LeftSideCardPanel'
import SuggestedFollowCard from '../../utils/UserProfileUtils/SuggestedFollowCard/SuggestedFollowCard'
import ProfileWidget from '../../utils/UserProfileUtils/ProfileWidget/ProfileWidget'

import userImg from '/images/koushil.jpg';

const User = () => {

    let data1 = [ 
        {title: "Reviews", hash: "reviews"},
        {title: "Photos", hash: "photos"},
        // {title: "Followers", hash: "followers"},
        {title: "Recently Viewed", hash: "recently-viewed"},
        // {title: "Bookmarks", hash: "bookmarks"},
        {title: "Blog Posts", hash: "blog-posts"},
       
        {title:"Notifications", hash: "notification"},
        {title:"Settings",hash:"settings"}

    ];
    let data2 = [ 
        {title: "Takeaway orders", hash: "order-history"},
      
        {title: "Favorite Orders", hash: "favorite-orders"},
    ];
    let data5 = [ 
        {title: "Yours Booking", hash: "bookings"},
    ];

    // let data3 = [
    //     {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"},
    //     {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"},
    //     {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"},
    //     {userId: 123, imgSrc:userImg, userName: "Koushil Mankali", reviews: 200, followers: "123"}
    // ]


  return (<div className={css.outerDiv}>
    <div className={css.navbar}>
      <Navbar />
    </div>
    <div className={css.box}>
      <UserHero />
      <div className={css.mainbody}>
        <div className={css.leftBox}>
          <LeftSideCardPanel name='ACTIVITY' data={data1} />
          <LeftSideCardPanel name='TAKEAWAY ORDERS' data={data2} />
          <LeftSideCardPanel name='TABLE BOOKING' data={data5} />
          {/* <SuggestedFollowCard name='SUGGESTED FOODIES TO FOLLOW' data={data3} /> */}
          <ProfileWidget  />
        </div>
        <div className={css.rightBox}>
          <UserProfileRightsideBar />
        </div>
      </div>
    </div>
  </div>)
}

export default User