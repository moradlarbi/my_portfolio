'use client';

import { motion,useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const Landing = () => {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 300], [0, -50]);
  
    return (
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
        {/* Image de fond avec effet de parallaxe */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: yOffset }}
        >
          <Image
            src={"/images/background.webp"}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-70"
          />
        </motion.div>
  
        {/* Contenu principal */}
        <motion.div
          className="text-center text-white p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Hello, je suis Mourad
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Ingénieur en Génie Logiciel et passionné par le monde du Web 🌐
          </motion.p>
  
          {/* Bouton avec effet lumineux */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link href="/projects">
            <button className="relative px-8 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:border-gray-300 transition-all duration-300 ease-in-out group">
              
              Découvrir mes projets
              
              <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white animate-pulse"></span>
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    );
  };

export default Landing;
