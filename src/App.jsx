import React from 'react';
import styles from './style';
import {CTA, Footer, GetStarted, Hero, Navbar, Stats, Testimonials,} from './components';

export const App = () => {
  return (
    <div className="bg-background light:bg-background w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary light:bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary light:bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Testimonials />
          <GetStarted /> 
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
