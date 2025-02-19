import React,{useEffect} from 'react';
import css from './InvestorRelations.module.css';
import { FaCircleArrowRight } from "react-icons/fa6";
import Footer from '../../Footer/Footer';

// const InvestorRelations = () => {
//     return (
//         <div className={css.investorRelations}>
//             {/* Hero Section */}
//             <section className={css.heroSection}>
//                 <div className={css.heroText}>
//                     <h1>Better food for more people</h1>
//                 </div>
//                 <div className={css.heroDescription}>
//                     <h2>Instant commerce indistinguishable from magic</h2>
//                     <p>Make India malnutrition free</p>
//                 </div>
//             </section>

//             {/* Company Overview */}
//             <section className={css.companyOverview}>
//                 <h2>Company Overview</h2>
//                 <div className={css.companyContent}>
//                     <div className={css.companyDetails}>
//                         <h3>Presentation</h3>
//                         <a href="/investors/presentation" className={css.viewMore}>See all</a>
//                     </div>
//                     <div className={css.companyDetails}>
//                         <h3>Q2FY25 Results</h3>
//                         <a href="/investors/q2fy25" className={css.viewMore}>See all</a>
//                     </div>
//                     <div className={css.companyDetails}>
//                         <h3>Shareholders' Letter</h3>
//                         <a href="/investors/shareholders-letter" className={css.viewMore}>See all</a>
//                     </div>
//                 </div>
//             </section>

//             {/* Core Offerings */}
//             <section className={css.coreOfferings}>
//                 <h2>Our Core Offerings</h2>
//                 <div className={css.offerings}>
//                     <div className={css.offering}>
//                         <h3>Food Delivery</h3>
//                         <p>Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly.</p>
//                     </div>
//                     <div className={css.offering}>
//                         <h3>Quick Commerce</h3>
//                         <p>Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes.</p>
//                     </div>
//                     <div className={css.offering}>
//                         <h3>Hyperpure</h3>
//                         <p>Hyperpure is a B2B platform supplying high-quality food ingredients and other products.</p>
//                     </div>
//                     <div className={css.offering}>
//                         <h3>Going-out</h3>
//                         <p>Going-out enables discovery and ticketing of offline experiences such as in-restaurant dining and live events.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* ESG Section */}
//             <section className={css.esgSection}>
//                 <h2>Beyond Business</h2>
//                 <p>Our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone.</p>
//                 <ul className={css.esgList}>
//                     <li><strong>Feeding India:</strong> A not-for-profit organisation designing interventions to reduce hunger and malnutrition.</li>
//                     <li><strong>Net Zero Emissions:</strong> We aim to achieve net zero emissions by 2033.</li>
//                     <li><strong>Reducing Plastic Waste:</strong> Ensuring completely plastic-neutral deliveries since April 2022.</li>
//                 </ul>
//             </section>

//             {/* Blog Section */}
//             <section className={css.blogsSection}>
//                 <h2>From Our Blogs</h2>
//                 <div className={css.blogsList}>
//                     <div className={css.blogPost}>
//                         <h3>Technology</h3>
//                         <p>Apache Flink Journey @Zomato: From Inception to Innovation</p>
//                     </div>
//                     <div className={css.blogPost}>
//                         <h3>Restaurants</h3>
//                         <p>The Big Brand Theory: How Ma’s Recipes Became a Leading Burmese Cuisine Brand</p>
//                     </div>
//                     <div className={css.blogPost}>
//                         <h3>Product</h3>
//                         <p>Food Rescue: Our Initiative to Minimize Food Wastage</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Email Subscription */}
//             <section className={css.subscriptionSection}>
//                 <h2>Subscribe to Our Email Alerts</h2>
//                 <form className={css.subscriptionForm}>
//                     <input type="email" placeholder="Enter your email" />
//                     <button type="submit">Subscribe</button>
//                 </form>
//             </section>

//             {/* Contact Us */}
//             <section className={css.contactSection}>
//                 <h2>Have Questions?</h2>
//                 <p>Reach out to us by emailing at <a href="mailto:shareholders@zomato.com">shareholders@zomato.com</a>, and we’ll get back to you.</p>
//             </section>
//         </div>
//     );
// };

// export default InvestorRelations;

const InvestorRelations = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>

    <div className={css.heroBanner}>
            
            <div className={css.herobody}>
                
                <div className={css.title}>
                    <h1>Zomato</h1>
                    <h2>Investor Relations</h2>
                </div>

                <div className={css.navLinks}>
                    <button> Home </button>
                    <button> Finances </button>
                    <button> Announcements </button>
                    <button> Blog </button>
                    <button> Governance </button>
                    <button> ESG </button>
                    <button> Resources </button>
                </div>



            </div>

            <div className={css.container}>

                <div className={css.leftcontainer}>

                    <h1> Better food for more people</h1>
                    <h2> Zomato hyperpure </h2>
                    <h1> Instant commerce indistinguishable from magic </h1>
                    <h2>blinket</h2>
                    <h1> World class going-out experiences in India </h1>
                    <h2>district</h2>
                    <h1> Make India malnutrition free </h1>
                    <h2>feeding india</h2>
                </div>

                <div className={css.rightcontainer}>
                        
                    <div className={css.mainbox}>

                            <h1>company overview</h1>
                            <div className={css.box1}>
                                <img src="https://b.zmtcdn.com/data/o2_assets/e57a966283f35002a8e3bab05f2eb9dc1698913839.png"  />
                                <h2> Presentation </h2>
                                <FaCircleArrowRight />
                            </div>
                            <h1> Q3FY25 results </h1>

                            <div className={css.box1}>
                                <img src="https://b.zmtcdn.com/data/o2_assets/e57a966283f35002a8e3bab05f2eb9dc1698913839.png"  />
                                <h2> Presentation </h2>
                                <FaCircleArrowRight />
                            </div>


                            <div className={css.box1}>
                                <img src="https://b.zmtcdn.com/data/o2_assets/e57a966283f35002a8e3bab05f2eb9dc1698913839.png"  />
                                <h2> Presentation </h2>
                                <FaCircleArrowRight />
                            </div>

                            <div className={css.box1}>
                                <img src="https://b.zmtcdn.com/data/o2_assets/e57a966283f35002a8e3bab05f2eb9dc1698913839.png"  />
                                <h2> Presentation </h2>
                                <FaCircleArrowRight />
                            </div>

                    </div>
                        

                </div>

            </div>

    </div>

        <h1 className={css.tt} > Our core offerings </h1>
    <div className={css.ourCore}>
        
        <div className={css.boxContent}>
                <div className={css.leftC1}>
                    <h1> Food delivery </h1>
                    <p> Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly </p>
                    
                    <h2>Q3FY25</h2>
                    <div className={css.b2}>
                        
                        <div className={css.l1}>
                            <h4>INR 9,913 crore</h4>
                            {/* <p>Food delivery GOV</p> */}
                        </div>
                        <div className={css.r1}>
                            <h4>20.5 million</h4>
                            {/* <p>Avg. monthly transacting customers</p> */}
                        </div>
                    </div>
                </div>
                <div className={css.rightC1}>
                    <img src='https://b.zmtcdn.com/data/o2_assets/b51825c339e733d4d9b364df636d1ef11682669740.png'  />
                </div>
        </div>

        <div className={css.boxContent}>
                <div className={css.leftC1}>
                    <h1> Food delivery </h1>
                    <p> Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly </p>
                </div>
                <div className={css.rightC1}>
                    <img src='https://b.zmtcdn.com/data/o2_assets/b51825c339e733d4d9b364df636d1ef11682669740.png'  />
                </div>
        </div>

        <div className={css.boxContent}>
                <div className={css.leftC1}>
                    <h1> Food delivery </h1>
                    <p> Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly </p>
                </div>
                <div className={css.rightC1}>
                    <img src='https://b.zmtcdn.com/data/o2_assets/b51825c339e733d4d9b364df636d1ef11682669740.png'  />
                </div>
        </div>

        <div className={css.boxContent}>
                <div className={css.leftC1}>
                    <h1> Food delivery </h1>
                    <p> Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly </p>
                </div>
                <div className={css.rightC1}>
                    <img src='https://b.zmtcdn.com/data/o2_assets/b51825c339e733d4d9b364df636d1ef11682669740.png'  />
                </div>
        </div>

    </div>

    <div className={css.beyondBusiness}>

        <h1> Beyond business </h1>

        <p>At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include:</p>

        <div className={css.businessContainer}>

            <div className={css.b1}>
                <img src='https://b.zmtcdn.com/data/o2_assets/1ef4b31977addf56d67ede5f6eed18a91691498028.png' />
                <h2> Feeding India </h2>
                <p> A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India </p>
            </div>
            <div className={css.b1}>
                 <img src='https://b.zmtcdn.com/data/o2_assets/1ef4b31977addf56d67ede5f6eed18a91691498028.png' />
                <h2> Feeding India </h2>
                <p> A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India </p>
            </div>
            <div className={css.b1}>
                <img src='https://b.zmtcdn.com/data/o2_assets/1ef4b31977addf56d67ede5f6eed18a91691498028.png' />
                <h2> Feeding India </h2>
                <p> A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India </p>

            </div>

        </div>

    </div>
    
    {/* blogs */}
          <div className={css.fromBlog}>
            <h1> From our blog  </h1>
            <span> Explore our blog for insightful articles, personal reflections, impactful resources, and ideas that inspire us at Zomato </span>
          </div>
          <div className={css.blogs}>
    
              <div className={css.box}>
                  <img src="/images/blog1.png" />
                  <p>Shuvra Saha | 4 February 2025</p>
                  <h2>Idli, spice, and everything nice–Myso...</h2>
                  <span> Inspired by a chance meeting in a small town, Mysore Raman Idli has built a strong following by serving delicious South Indian dishes rooted in tradition </span>
              </div>
              <div className={css.box}>
                  <img src="/images/blog2.png" />   
                  <p>Shuvra Saha | 4 February 2025</p>
                  <h2> Q3FY25 shareholders’ letter and re... </h2>
                  <span> A quick capture of headline results from this quarter </span>       
              </div>
              <div className={css.box}>
                  <img src="/images/blog3.png" />
                  <p>Shuvra Saha | 4 February 2025</p>
                  <h2> The Big Brand Theory | Carving a spice </h2>
                  <span> Explore how the fusion of tradition and innovation shaped the creation of a legacy brand </span>
              </div>
          </div>

    <Footer />
    </div>
  )
}

export default InvestorRelations;
