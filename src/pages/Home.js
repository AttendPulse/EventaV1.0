import React from 'react';
import Header from '../components/Header.js'; // Ensure correct path and extension
import Footer from '../components/Footer.js'; // Ensure correct path and extension
import Features from '../components/Features.js'; 
import Pricing from '../components/Pricing.js';   
import Services from '../components/Services.js'; 
import FAQ from '../components/FAQ.js';        
import CTA from '../components/CTA.js';         
const HomePage = () => {
  return (
    <>
      <Header />

      <div className="boxed_wrapper ltr">
        {/* Banner Section */}
        <section className="banner-style-five centred">
          <div className="pattern-layer">
            <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/shape-27.png)" }}></div>
            <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/shape-28.png)" }}></div>
            <div className="pattern-3 float-bob-y" style={{ backgroundImage: "url(/assets/images/shape/shape-29.png)" }}></div>
            <div className="pattern-4 rotate-me" style={{ backgroundImage: "url(/assets/images/shape/shape-30.png)" }}></div>
            <div className="pattern-5 float-bob-y" style={{ backgroundImage: "url(/assets/images/shape/shape-31.png)" }}></div>
            <div className="pattern-6" style={{ backgroundImage: "url(/assets/images/shape/shape-32.png)" }}></div>
          </div>
          <div className="auto-container">
            <div className="inner-box">
              <div className="content-box mb_80">
                <h2>Plan & Promote <span>Events in Kenya</span><br />All from one place</h2>
                <p>Eventa helps you create, manage, and promote events — from chama meetings to concerts — with ease and automation.</p>
                <div className="btn-box">
                  <a href="/create-event" className="theme-btn btn-one mr_20">Create Event</a>
                  <a href="/signup" className="theme-btn btn-two">Get Started Free</a>
                </div>
              </div>
              <figure className="image-box">
                <img src="/assets/images/resource/eventa-dashboard.png" alt="Eventa event management dashboard" />
              </figure>
            </div>
          </div>
        </section>

        {/* Clients Section (Placeholder) */}
        <section className="clients-section pt_150 pb_150">
          <div className="auto-container">
            {/* Client logos would go here */}
          </div>
        </section>

       {/* Render the extracted components */}
       <Features /> 
       <Services /> 
       <Pricing />   
       <FAQ />       
       <CTA />       
      </div> 

      <Footer /> 
    </>
  );
};

export default HomePage;