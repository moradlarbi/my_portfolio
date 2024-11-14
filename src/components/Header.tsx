'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Header */}
      <header className="fixed w-full flex justify-between items-center bg-white shadow-md py-4 px-8 z-20">
        <div className="text-2xl font-bold">My Portfolio</div>
        <button onClick={toggleSidebar} className="text-3xl">
          <AiOutlineMenu />
        </button>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center text-2xl space-y-8"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20 }}
          >
            <button
              onClick={toggleSidebar}
              className="absolute top-6 right-6 text-3xl"
            >
              <AiOutlineClose />
            </button>
            <nav className="flex flex-col items-center space-y-6">
              <Link href="/" className="hover:text-blue-500" onClick={toggleSidebar}>
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-500" onClick={toggleSidebar}>
                About
              </Link>
              <Link href="/projects" className="hover:text-blue-500" onClick={toggleSidebar}>
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-500" onClick={toggleSidebar}>
                Contact
              </Link>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
