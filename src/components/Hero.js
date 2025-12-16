import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import LaptopDisplay from './LaptopDisplay';

const fadeUpPreset = (delay = 0, duration = 1.2) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease: "easeOut" }
});

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return (
      <section className="min-h-screen hero-gradient relative overflow-hidden">
        <div className="purple-circle w-96 h-96 -top-48 -left-48"></div>
        <div className="purple-circle w-64 h-64 -bottom-32 -right-32"></div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 text-shadow">
              ДЛЯ ВЧИТЕЛІВ
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
              ЯКІ ЦІНУЮТЬ СВІЙ ЧАС
            </p>
            
            <div className="bg-brand-yellow rounded-3xl p-6 md:p-8 mb-12 inline-block">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-purple mb-2">
                ГОТОВІ УРОКИ
              </h2>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-dark-purple mb-2">
                ЕЛЕКТРОННІ ПІДРУЧНИКИ
              </h3>
              <p className="text-lg md:text-xl text-brand-dark-purple">
                згідно з програмою МОН України
              </p>
            </div>
          </div>
          
          <LaptopDisplay />
          
          <div className="text-center mt-12">
            <div className="bg-brand-yellow rounded-3xl p-6 md:p-8 inline-block">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-purple">
                Ознайомтесь за посиланням
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <motion.section 
      {...fadeUpPreset(0, 0.8)}
      className="min-h-screen hero-gradient relative overflow-hidden"
    >
      <div className="purple-circle w-96 h-96 -top-48 -left-48"></div>
      <div className="purple-circle w-64 h-64 -bottom-32 -right-32"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div {...fadeUpPreset(0.2, 1.0)} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 text-shadow">
            ДЛЯ ВЧИТЕЛІВ
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
            ЯКІ ЦІНУЮТЬ СВІЙ ЧАС
          </p>
          
          <div className="bg-brand-yellow rounded-3xl p-6 md:p-8 mb-12 inline-block">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-purple mb-2">
              ГОТОВІ УРОКИ
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-dark-purple mb-2">
              ЕЛЕКТРОННІ ПІДРУЧНИКИ
            </h3>
            <p className="text-lg md:text-xl text-brand-dark-purple">
              згідно з програмою МОН України
            </p>
          </div>
        </motion.div>
        
        <motion.div {...fadeUpPreset(0.4, 1.2)}>
          <LaptopDisplay />
        </motion.div>
        
        <motion.div {...fadeUpPreset(0.6, 1.0)} className="text-center mt-12">
          <div className="bg-brand-yellow rounded-3xl p-6 md:p-8 inline-block">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark-purple">
              Ознайомтесь за посиланням
            </h3>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;