"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <footer className="bg-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Mourad's Portfolio</h2>
            <p className="text-gray-400">Crafting digital experiences with passion and precision.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item =="Home"? "/":`/${item.toLowerCase()}`}>
                    <motion.span
                      className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/moradlarbi" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mourad-larbimessaoudi-12828b1a9/" },
                { icon: Mail, href: "mailto:jm_larbimessaoudi@esi.dz" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                required
              />
              <motion.button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe <Send size={18} className="ml-2" />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mourad's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

