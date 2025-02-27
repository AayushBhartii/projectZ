import React, { useState,useEffect } from "react";
import styles from "./WorkWithUs.module.css";
import WhatMakeUs from "./WhatMakeUs";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
// const WorkWithUs = () => {
//   const jobCategories = [
//     {
//       id: 1,
//       title: "Engineering",
//       description: "Building innovative solutions to enhance user experiences.",
//     },
//     {
//       id: 2,
//       title: "Marketing",
//       description: "Crafting campaigns to drive customer engagement.",
//     },
//     {
//       id: 3,
//       title: "Operations",
//       description: "Ensuring seamless execution of services globally.",
//     },
//     {
//       id: 4,
//       title: "Customer Support",
//       description: "Delivering exceptional service to customers worldwide.",
//     },
//   ];

//   const teamSpotlight = [
//     {
//       id: 1,
//       name: "Sophia Taylor",
//       position: "Software Engineer",
//       bio: "Sophia specializes in building scalable systems for real-time delivery.",
//       placeholder: "Image of Software Engineer Sophia Taylor.",
//     },
//     {
//       id: 2,
//       name: "Liam Johnson",
//       position: "Marketing Lead",
//       bio: "Liam designs global campaigns that resonate with millions.",
//       placeholder: "Image of Marketing Lead Liam Johnson.",
//     },
//     {
//       id: 3,
//       name: "Olivia Brown",
//       position: "Operations Manager",
//       bio: "Olivia oversees day-to-day operations ensuring flawless service delivery.",
//       placeholder: "Image of Operations Manager Olivia Brown.",
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedTeamMember, setSelectedTeamMember] = useState(null);

//   return (
//     <div className={styles.container}>
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <h1>Join Our Team</h1>
//         <p>
//           At Zomato, we're passionate about making a difference. Explore exciting
//           career opportunities and be part of our journey.
//         </p>
//       </section>

//       {/* Job Categories Section */}
//       <section className={styles.categoriesSection}>
//         <h2>Explore Job Categories</h2>
//         <div className={styles.categoriesGrid}>
//           {jobCategories.map((category) => (
//             <div
//               key={category.id}
//               className={styles.categoryCard}
//               onClick={() => setSelectedCategory(category)}
//             >
//               <h3>{category.title}</h3>
//               <p>{category.description}</p>
//             </div>
//           ))}
//         </div>
//         {selectedCategory && (
//           <div className={styles.categoryDetails}>
//             <h3>Opportunities in {selectedCategory.title}</h3>
//             <p>{selectedCategory.description}</p>
//             <button onClick={() => setSelectedCategory(null)}>Close</button>
//           </div>
//         )}
//       </section>

//       {/* Team Spotlight Section */}
//       <section className={styles.teamSection}>
//         <h2>Team Spotlight</h2>
//         <div className={styles.teamGrid}>
//           {teamSpotlight.map((member) => (
//             <div
//               key={member.id}
//               className={styles.teamCard}
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
//               <div className={styles.placeholder}>
//                 {selectedTeamMember.placeholder}
//               </div>
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

// export default WorkWithUs;


const WorkWithUs = () => {
  const titles = ["customer obsession","start with why","grit","continuous learning"]
  const descriptions = ["always start with the customer and do what’s best for them"," before we do anything, always ask “why are we doing this?” ","focus on the goals you set out to achieve and have the courage to see them through","the biggest competitive advantage is our ability to learn (and unlearn) faster"]
  const employeeBenift = [
    {
      img : "https://b.zmtcdn.com/data/o2_assets/d4f69d4716faf5a71093b87fac1c45f31659589465.png",
      title : "Period Leave",
      desc : "Zomato's Period Leave Policy has been designed to give our female and transgender employees the necessary time off to cater to their health when needed, during their menstrual cycle. Eligible zomans can avail up to 10 days of period leaves in a year."
    },
    {
      img : "https://b.zmtcdn.com/data/o2_assets/6b21acbc84ce1ae1bb8d3b6d4f8bca211659589491.png",
      title : "Health and Fitness",
      desc : "At Zomato, we believe it's important to focus on one's health. Our in-house fitness coaches and nutritionist focus on creating a healthier work environment for all."
    },
    {
      img : "https://b.zmtcdn.com/data/o2_assets/c6e69c0f57802e3f4e5152f075fed08c1659589516.png",
      title : "No Probation Period",
      desc : "There's no probation period for anyone who works with us at Zomato."
    },
    {
      img : "https://b.zmtcdn.com/data/o2_assets/be8e2e8c6a99fe895a31ef966fae21b61659589545.png",
      title : "Medical Coverage",
      desc :"All Zomans (including spouse and children) are covered under an extensive medical health insurance policy. In India, they also have access to unlimited telehealth consultations with a doctor."
    },
    {
      img : "https://b.zmtcdn.com/data/o2_assets/029645238077010b6db5ef5b7fce75321659589567.png",
      title : "Paternity and Maternity Leave",
      desc :"For men and women at Zomato, we offer 26 weeks paid leave. This policy also applies to non-birthing parents, and in cases of surrogacy, adoption, and same-sex partners."
    },
    {
      img :"https://b.zmtcdn.com/data/o2_assets/3a3bf55bfb44f108fdfc777c5770eabd1659589590.png",
      title:"In-house Wellness Support",
      desc:"We all experience challenging situations in our lives. To manage these stressors and concerns, both at a personal and professional level, one can always reach out to our in-house team of counsellors.",
    },
    {
      img :"https://b.zmtcdn.com/data/o2_assets/69963755d428dcc83c7f7bdee7db0f691659589614.png",
      title:"In-house Creche",
      desc:"We have an in-house creche in our Gurgaon office and have partnered with day cares in other cities.",
    },
    {
      img :"https://b.zmtcdn.com/data/o2_assets/185d1a63264f12676ce7fdb5b516916a1659589636.png",
      title:"Flexi Benefits",
      desc:"Our flexi benefit plan enables zomans to modify the components of their compensation based on benefits such as newspaper and periodical allowance, leave and travel allowance, vehicle running and maintenance, telephone bill expenses, etc.",
    }

  ]
  const [ mouseOver , setMouseOver ] = useState(false)
  const [ mouseOver1 , setMouseOver1 ] = useState(false)
  const [ mouseOver2 , setMouseOver2 ] = useState(false)
  const handleMouseOver = ()=>{
    setMouseOver(true)
    setTimeout( ()=>{
        setMouseOver(false)
    },1000 )

  }

  const handleMouseOver1 = ()=>{
    setMouseOver1(true)
    setTimeout( ()=>{
        setMouseOver1(false)
    },1000 )

  }

  const handleMouseOver2 = ()=>{
    setMouseOver2(true)
    setTimeout( ()=>{
        setMouseOver2(false)
    },1000 )

  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

        <div className={styles.bodyForWorkWithUs}>

            <div className={styles.mainScreen}>

                <h1> Zomato </h1>

                <div className={styles.linkingList}>
                  
                  <Link to="/" >Home</Link>
                  <Link to="/whoweare" >Who we are</Link>
                  <button> Work with us </button>
                </div>

            </div>

            <div className={styles.listenOne}>
                  <h1>we listen more </h1>
                  <h1> when people root  </h1>
                  <h1>  for you </h1>
                  <p>We only accept applications through employee referrals.</p>
            </div>

            <div className={styles.heroImage}>
                  <img src="/images/workwithus.png" alt="Hero image" />
            </div>

        </div>

        <div className={styles.whatMakeUs}>

          <h1> what makes us who we are </h1>

          <div className={styles.boxes}>

              <div className={styles.box}>
                  <div className={styles.image}>
                    <img src="https://b.zmtcdn.com/data/o2_assets/9e1c5ce0772e0387f9d74f9ac8fb7d271659417276.png" />
                  </div>
                  <h2> customer obsession </h2>
                  <p> always start with the customer and do what’s best for them </p>
              </div>

              <div className={styles.box}>

              <div className={styles.image}>
                    <img src="https://b.zmtcdn.com/data/o2_assets/8dbae9624cc1964bfa5966b4f4a2151a1659417312.png" />
                  </div>
                  <h2>{titles[1]}</h2>
                  <p> {descriptions[1]} </p>
              </div>

              <div className={styles.box}>

                  <div className={styles.image}>
                    <img src="https://b.zmtcdn.com/data/o2_assets/bb48e7c08e4f1a54070dfac177b717c81659417457.png" />
                  </div>
                  <h2> {titles[2]} </h2>
                  <p>  {descriptions[2]} </p>
              </div>



          </div>
        </div>

        <div className={styles.employeeBenefits}>
              <h2>employee benefits </h2>
              {
                employeeBenift.map( (item,idx)=>(
                  <WhatMakeUs key={idx} item={item}  />
                ) )
              }
        </div>

        {/* Bulding zomato together */}
        <div className={styles.buildTogether}>

              <h1> building Zomato together </h1>

              <div className={styles.imgContainers}>

                      <div onMouseOver={handleMouseOver}   className={styles.box1}>
                          {

                            (mouseOver) ? 

                            <div className={styles.content1}>

                                <p> I joined Zomato as a Sales Manager and cut to five years later, I am now managing our entire restaurant dining team in Abu Dhabi.I started my journey by interacting with a diverse se.. </p>

                            </div>

                            : <img src="https://b.zmtcdn.com/data/o2_assets/a7f85a53bbe2120919c577d88484832c1661235791.png" />

                          }
                      </div>
                      
                      <div  onMouseOver={handleMouseOver1}  className={styles.box1}>
                        {
                           (mouseOver1) ? 
                            <div className={styles.content1}>
                                <p> What I look forward to at the end of each day is a sense of accomplishment – what I have learnt and what I did to make a difference. It’s been three beautiful years and Zomato has given me a comfortable space to learn, grow, and prosper everyday </p>
                            </div>:
                         <img src="https://b.zmtcdn.com/data/o2_assets/1e3adfe97f3384f28d3a65a1dfffc4d11661434076.png" />
                        }
                      </div>

                      <div  onMouseOver={handleMouseOver2}  className={styles.box1}>
                        {
                               (mouseOver2) ? 
                               <div className={styles.content1}>
                                   <p> I’ve been at Zomato for about 5 years now. Right after my graduation, I joined Z as a noob and learnt from the greatest minds. From building customer experiences team to strategising logistics and then to creating perfect  </p>
                               </div>:
                           <img src="https://b.zmtcdn.com/data/o2_assets/79fb2b4984ea571d3b56482c199fdb991661405190.png" />  
                        }
                      </div>

              </div>

        </div>
        
          {/* glimpse of life at zomato */}

        <div className={styles.lifeAtZomato}>

          <h1> glimpses of life at Zomato </h1>

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
        
        
        <div className={styles.everyDay}>

          <div className={styles.extraorinary}>
            
            <h1> everyday  </h1>
            <h1> extraordinary </h1>

            <p> The right people got us here, and we are on the lookout for those who will bring us closer to our vision, and make a difference. </p>
            <p> If you know someone at Zomato, reach out to them and share why you would be a great fit. </p>            

          </div>

          <img src="https://b.zmtcdn.com/data/o2_assets/60a2ed05c65decc1afc09adc7ecc68c81659679957.png" />             

        </div>

        <Footer />
        </div>
  )
}

export default WorkWithUs
