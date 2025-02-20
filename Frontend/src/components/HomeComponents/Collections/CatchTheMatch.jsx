// import React from 'react';
// import css from './Collections.module.css'; // Import a CSS module for styling

// const restaurants = [
//     { name: 'The White House', rating: '4.5', discount: '25% OFF', image: 'path/to/image1.jpg' },
//     { name: 'Cherie', rating: '4.3', discount: 'Flat 15% OFF', image: 'path/to/image2.jpg' },
//     { name: 'Toit', rating: '4.6', discount: null, image: 'path/to/image3.jpg' },
//     { name: 'The Gulmohar Bar & Curry', rating: '4.4', discount: null, image: 'path/to/image4.jpg' },
//     // Add more restaurants as needed
// ];

// const CatchTheMatch = () => {
//     return (
//         <div className={css.outerContainer}>
//             <div className={css.header}>
//                 <img
//                     className={css.headerImage}
//                     src="path/to/headerImage.jpg"
//                     alt="Top Trending Spots"
//                 />
//                 <div className={css.headerOverlay}>
//                     <div className={css.headerText}>
//                         <h1>Top Trending Spots</h1>
//                         <p>The restaurants that are talk of the town. Look out for more such popular places, updated every Thursday!</p>
//                         <span>30 Places</span>
//                     </div>
//                     <button className={css.saveButton}>+ Save Collection</button>
//                 </div>
//             </div>
            
//             <div className={css.restaurantGrid}>
//                 {restaurants.map((restaurant, index) => (
//                     <div key={index} className={css.restaurantCard}>
//                         <img src={restaurant.image} alt={restaurant.name} className={css.cardImage} />
//                         <div className={css.cardDetails}>
//                             {restaurant.discount && (
//                                 <span className={css.discountTag}>{restaurant.discount}</span>
//                             )}
//                             <h3 className={css.restaurantName}>{restaurant.name}</h3>
//                             <span className={css.rating}>{restaurant.rating} ⭐</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CatchTheMatch;
