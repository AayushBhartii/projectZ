import CollapsableCard from '../../../utils/Cards/CollapsableCard/CollapsableCard';
import css from './ExploreOptionsNearMe.module.css';

let ExploreOptionsNearMe = () => {
    let topRestaurantChains = [
        'Burger Singh', "Domino's", "Dunkin' Donuts", 'Faasos', 'KFC',
        "McDonald's", 'Paradise Biryani', 'Subway', 'WOW! Momo',
    ];

    let cities = [
        'Delhi NCR', 'Kolkata', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 
        'Ahmedabad', 'Chandigarh', 'Nashik', 'Ooty', 'Amritsar', 'Kanpur', 
        'Visakhapatnam', 'Ranchi', 'Vadodara', 'Nagpur', 'Puducherry', 
        'Surat', 'Srinagar', 'Khajuraho', 'Haridwar', 'Leh', 'Pushkar', 
        'Jaipur', 'Lucknow', 'Goa', 'Shimla', 'Allahabad', 'Dehradun', 
        'Patna', 'Guwahati', 'Bhopal', 'Mysore', 'Coimbatore', 'Rajkot', 
        'Udaipur', 'Trivandrum', 'Madurai',
    ];

    return (
        <div className={css.outerDiv}>
            <div className={css.innerDiv}>
                <div className={css.title}>Explore options near me</div>
                <div className={css.cards}>
                    <CollapsableCard title="Top Restaurant Chains" content={topRestaurantChains} />
                    <CollapsableCard title="Cities We Deliver To" content={cities} />
                </div>
            </div>
        </div>
    );
};

export default ExploreOptionsNearMe;
