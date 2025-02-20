import React from 'react';
import css from './InvestorRelations.module.css';

const InvestorRelations = () => {
    return (
        <div className={css.investorRelations}>
            {/* Hero Section */}
            <section className={css.heroSection}>
                <div className={css.heroText}>
                    <h1>Better food for more people</h1>
                </div>
                <div className={css.heroDescription}>
                    <h2>Instant commerce indistinguishable from magic</h2>
                    <p>Make India malnutrition free</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className={css.companyOverview}>
                <h2>Company Overview</h2>
                <div className={css.companyContent}>
                    <div className={css.companyDetails}>
                        <h3>Presentation</h3>
                        <a href="/investors/presentation" className={css.viewMore}>See all</a>
                    </div>
                    <div className={css.companyDetails}>
                        <h3>Q2FY25 Results</h3>
                        <a href="/investors/q2fy25" className={css.viewMore}>See all</a>
                    </div>
                    <div className={css.companyDetails}>
                        <h3>Shareholders' Letter</h3>
                        <a href="/investors/shareholders-letter" className={css.viewMore}>See all</a>
                    </div>
                </div>
            </section>

            {/* Core Offerings */}
            <section className={css.coreOfferings}>
                <h2>Our Core Offerings</h2>
                <div className={css.offerings}>
                    <div className={css.offering}>
                        <h3>Food Delivery</h3>
                        <p>Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly.</p>
                    </div>
                    <div className={css.offering}>
                        <h3>Quick Commerce</h3>
                        <p>Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes.</p>
                    </div>
                    <div className={css.offering}>
                        <h3>Hyperpure</h3>
                        <p>Hyperpure is a B2B platform supplying high-quality food ingredients and other products.</p>
                    </div>
                    <div className={css.offering}>
                        <h3>Going-out</h3>
                        <p>Going-out enables discovery and ticketing of offline experiences such as in-restaurant dining and live events.</p>
                    </div>
                </div>
            </section>

            {/* ESG Section */}
            <section className={css.esgSection}>
                <h2>Beyond Business</h2>
                <p>Our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone.</p>
                <ul className={css.esgList}>
                    <li><strong>Feeding India:</strong> A not-for-profit organisation designing interventions to reduce hunger and malnutrition.</li>
                    <li><strong>Net Zero Emissions:</strong> We aim to achieve net zero emissions by 2033.</li>
                    <li><strong>Reducing Plastic Waste:</strong> Ensuring completely plastic-neutral deliveries since April 2022.</li>
                </ul>
            </section>

            {/* Blog Section */}
            <section className={css.blogsSection}>
                <h2>From Our Blogs</h2>
                <div className={css.blogsList}>
                    <div className={css.blogPost}>
                        <h3>Technology</h3>
                        <p>Apache Flink Journey @Zomato: From Inception to Innovation</p>
                    </div>
                    <div className={css.blogPost}>
                        <h3>Restaurants</h3>
                        <p>The Big Brand Theory: How Ma’s Recipes Became a Leading Burmese Cuisine Brand</p>
                    </div>
                    <div className={css.blogPost}>
                        <h3>Product</h3>
                        <p>Food Rescue: Our Initiative to Minimize Food Wastage</p>
                    </div>
                </div>
            </section>

            {/* Email Subscription */}
            <section className={css.subscriptionSection}>
                <h2>Subscribe to Our Email Alerts</h2>
                <form className={css.subscriptionForm}>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </section>

            {/* Contact Us */}
            <section className={css.contactSection}>
                <h2>Have Questions?</h2>
                <p>Reach out to us by emailing at <a href="mailto:shareholders@zomato.com">shareholders@zomato.com</a>, and we’ll get back to you.</p>
            </section>
        </div>
    );
};

export default InvestorRelations;
