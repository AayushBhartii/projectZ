import React, { useState, useEffect } from "react";
import styles from "./Whoweare.module.css";
import { TbSquareRoundedChevronLeft } from "react-icons/tb";
import { TbSquareRoundedChevronRight } from "react-icons/tb";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

// const WhoWeAre = () => {
//   const content = {
//     title: "Delivering Happiness, One Meal at a Time",
//     subtitle: "Zomato connects you with the best food and grocery delivery services in your city.",
//     mission: "Our mission is to empower communities through food delivery services, ensuring convenience, quality, and satisfaction in every order.",
//     history: [
//       {
//         title: "Founded in 2008",
//         description: "Zomato started as a small initiative to connect people with their favorite restaurants. It has grown exponentially to become a global brand recognized for its reliability and service.",
//         year: "2008",
//         placeholder: "This marks the year Zomato was founded."
//       },
//       {
//         title: "Global Expansion",
//         description: "By 2015, we reached over 20 countries with millions of satisfied customers. This milestone reflects our commitment to spreading joy across the globe.",
//         year: "2015",
//         placeholder: "This marks the year of our global expansion."
//       },
//     ],
//     values: [
//       { title: "Customer First", description: "We prioritize your needs above all else." },
//       { title: "Innovation", description: "Continuously enhancing the food delivery experience." },
//       { title: "Sustainability", description: "Building a greener, more sustainable future." },
//     ],
//     team: [
//       { name: "John Doe", position: "CEO", bio: "John has led Zomato since its inception with a vision to revolutionize food delivery services.", placeholder: "Image of CEO John Doe." },
//       { name: "Jane Smith", position: "CTO", bio: "Jane drives technological innovation, ensuring Zomato stays ahead in the tech space.", placeholder: "Image of CTO Jane Smith." },
//       { name: "Emily Brown", position: "Head of Marketing", bio: "Emily oversees global marketing, crafting campaigns that resonate with millions.", placeholder: "Image of Head of Marketing Emily Brown." },
//     ],
//   };

//   const [selectedHistory, setSelectedHistory] = useState("all");
//   const [selectedTeamMember, setSelectedTeamMember] = useState(null);
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [selectedHistoryItem, setSelectedHistoryItem] = useState(null);

//   const filteredHistory =
//     selectedHistory === "all"
//       ? content.history
//       : content.history.filter((item) => item.year === selectedHistory);

//   return (
//     <div className={styles.container}>
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <div className={styles.heroText}>
//           <h1>{content.title}</h1>
//           <p>{content.subtitle}</p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className={styles.missionSection}>
//         <h2>Our Mission</h2>
//         <p>{content.mission}</p>
//       </section>

//       {/* History Section */}
//       <section className={styles.historySection}>
//         <h2>Our History</h2>
//         <select
//           className={styles.filterDropdown}
//           value={selectedHistory}
//           onChange={(e) => setSelectedHistory(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="2008">2008</option>
//           <option value="2015">2015</option>
//         </select>
//         <div className={styles.historyGrid}>
//           {filteredHistory.map((item, index) => (
//             <div
//               key={index}
//               className={styles.historyItem}
//               onClick={() => setSelectedHistoryItem(item)}
//             >
//               <div className={styles.placeholder}>{item.placeholder}</div>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         {selectedHistoryItem && (
//           <div className={styles.modal}>
//             <div className={styles.modalContent}>
//               <h3>{selectedHistoryItem.title}</h3>
//               <p>{selectedHistoryItem.description}</p>
//               <button
//                 className={styles.closeModal}
//                 onClick={() => setSelectedHistoryItem(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Values Section */}
//       <section className={styles.valuesSection}>
//         <h2>Our Values</h2>
//         <div className={styles.valuesCarousel}>
//           {content.values.map((value, index) => (
//             <div
//               key={index}
//               className={`${styles.valueItem} ${
//                 selectedValue === value.title ? styles.activeValue : ""
//               }`}
//               onClick={() =>
//                 setSelectedValue(
//                   selectedValue === value.title ? null : value.title
//                 )
//               }
//             >
//               <h3>{value.title}</h3>
//               <p>{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className={styles.teamSection}>
//         <h2>Meet Our Team</h2>
//         <div className={styles.teamGrid}>
//           {content.team.map((member, index) => (
//             <div
//               key={index}
//               className={styles.teamMember}
//               onClick={() => setSelectedTeamMember(member)}
//             >
//               <div className={styles.placeholder}>{member.placeholder}</div>
//               <h3>{member.name}</h3>
//               <p>{member.position}</p>
//             </div>
//           ))}
//         </div>
//         {selectedTeamMember && (
//           <div className={styles.modal}>
//             <div className={styles.modalContent}>
//               <h3>{selectedTeamMember.name}</h3>
//               <p>{selectedTeamMember.position}</p>
//               <p>{selectedTeamMember.bio}</p>
//               <button
//                 className={styles.closeModal}
//                 onClick={() => setSelectedTeamMember(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default WhoWeAre;



const Whoweare = () => {
  
  const blogImages  = ["https://zomatoblog.com/wp-content/uploads/2025/02/Mysore-Raman-Blog-1.jpg","https://zomatoblog.com/wp-content/uploads/2025/01/Q3FY25-Blog-cover.png","https://zomatoblog.com/wp-content/uploads/2024/12/Resize-1-1.jpg"]
  const imageSwitch = ["https://b.zmtcdn.com/web_assets/7e2c9e22ffe284beaec828fb62c4bfef1563875343.jpeg","https://b.zmtcdn.com/web_assets/cfa63c11504ffe735afd3ef0383a06de1563875358.jpeg","https://b.zmtcdn.com/web_assets/0e000a058ca6e5b84d5e6b486cfd00651563875325.jpeg","https://b.zmtcdn.com/web_assets/4c4754484b185afd6d88e357de72f7de1563874934.jpeg"]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className={styles.who_we_are} >
      {/* top section */}
      <div className={styles.topSection}>
            <h4>Zomato</h4>

            <div className={styles.navigationLinks}>
                    <Link to="/"   >Home</Link>
                    <button>Who we are</button>
                    <Link to="/workwithus" >Work with us</Link>
            </div>
      </div>
      {/* Better style */}
      <div className={styles.better}>
              <h3>Better food for more people </h3>
              <p>scroll for more</p>
      </div>
        {/* who we are image */}
      <div className={styles.imageSec}>
        <img src="https://b.zmtcdn.com/web/about/48fc8d7806d6a947fd041a8a1cf83bac1563875757.png" alt="whoe we are"  />
      </div>

      {/* AAAO */}

      <div className={styles.aaaoBox}>

          <div className={styles.imgSwitchSec}>
              <img src={imageSwitch[0]} />
          </div>
          <div className={styles.buttonMovements}>
                <div className={styles.leftClick}>
                  <TbSquareRoundedChevronLeft />
                </div>
                <div className={styles.rightClick}>
                  <TbSquareRoundedChevronRight/>
                </div>
          </div>

          <div className={styles.aaaoMove}>
              <div className={styles.inActive}>
                 <p>A</p>
              </div>
              <div className={styles.inActive}>
                 <p>A</p>
              </div>
              <div className={styles.inActive}>
                 <p>A</p>
              </div>
              <div className={styles.round}>
                 <p>Quality</p>
              </div>
          </div>

          <div className={styles.aaaoTitle}>

              <h2> Improving <span> quality </span> of food </h2>
              <p>We are committed to nurturing a neutral platform and are helping food establishments maintain high standards through Hyperpure. Food Hygiene Ratings is a coveted mark of quality among our restaurant partners.
              </p>
          </div>

      </div>

      {/* who are we title */}
      
      <div className={styles.container}>

          <div className={styles.leftContainer}>
             <h2><span>Who</span> are we ?</h2>
             <p> Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities. </p>
          </div>

          <div className={styles.rightContainer}>
              <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg" />
          </div>  

      </div>

      {/* blogs */}
      <div className={styles.fromBlog}>
        <h1> From our blog  </h1>
        <span> Explore our blog for insightful articles, personal reflections, impactful resources, and ideas that inspire us at Zomato </span>
      </div>
      <div className={styles.blogs}>

          <div className={styles.box}>
              <img src="/images/blog1.png" />
              <p>Shuvra Saha | 4 February 2025</p>
              <h2>Idli, spice, and everything nice–Myso...</h2>
              <span> Inspired by a chance meeting in a small town, Mysore Raman Idli has built a strong following by serving delicious South Indian dishes rooted in tradition </span>
          </div>
          <div className={styles.box}>
              <img src="/images/blog2.png" />   
              <p>Shuvra Saha | 4 February 2025</p>
              <h2> Q3FY25 shareholders’ letter and re... </h2>
              <span> A quick capture of headline results from this quarter </span>       
          </div>
          <div className={styles.box}>
              <img src="/images/blog3.png" />
              <p>Shuvra Saha | 4 February 2025</p>
              <h2> The Big Brand Theory | Carving a spice </h2>
              <span> Explore how the fusion of tradition and innovation shaped the creation of a legacy brand </span>
          </div>
      </div>

      {/* Glimpses of life at Zomato */}

      <div className={styles.lifeAtZomato}>

        <h1> Glimpses of life at Zomato </h1>

        <div className={styles.container1}>

              <div className={styles.leftc1}>
                    <img src="/images/life1.png" />
              </div>

              <div className={styles.rightc1}>
                    <div className={styles.rc1}>
                         <img src="/images/life2.png" />
                    </div>
                    <div className={styles.rc2}>
                         <img src="/images/life3.png" />
                    </div>
              </div>

        </div>
        <div className={styles.container1}>
              <div className={styles.rightc1}>
                    <div className={styles.rc1}>
                         <img src="/images/life4.png" />
                    </div>
                    <div className={styles.rc2}>
                         <img src="/images/life5.png" />
                    </div>
              </div>

              <div className={styles.leftc1}>
                    <img src="/images/life6.png" />
             </div>

        </div>

      </div>

      <div className={styles.gapfor}>

      </div>

    </div>


    <Footer />
    </>
  )
}

export default Whoweare