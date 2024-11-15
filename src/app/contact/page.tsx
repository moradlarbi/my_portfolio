'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -100]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message !');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">
      {/* Image de fond avec effet de parallaxe */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: yOffset }}
      >
        <Image
          src="/images/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-20"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 -z-10"
        style={{ y: yOffset }}
      />

      {/* Texte principal avec animation */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Let's Start a New Project Together 🚀
      </motion.h1>

      {/* Formulaire de contact avec animations fluides */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto flex flex-col gap-8 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Champ Nom */}
        <motion.div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white focus:outline-none py-4 px-2 text-white placeholder-gray-500 transition-all duration-300"
          />
        </motion.div>

        {/* Champ Email */}
        <motion.div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white focus:outline-none py-4 px-2 text-white placeholder-gray-500 transition-all duration-300"
          />
        </motion.div>

        {/* Champ Message */}
        <motion.div className="relative">
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white focus:outline-none py-4 px-2 text-white placeholder-gray-500 transition-all duration-300"
          />
        </motion.div>

        {/* Bouton d'envoi avec effet de surbrillance */}
        <motion.button
          type="submit"
          className="relative py-3 px-8 bg-transparent border border-white text-white font-semibold rounded-lg overflow-hidden hover:bg-white hover:text-black transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-400 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
          Envoyer le message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
