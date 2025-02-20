"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const form = useRef<HTMLFormElement>(null)

  const { scrollY } = useScroll()
  const yOffset = useTransform(scrollY, [0, 300], [0, -100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-black text-white">
      <motion.div className="absolute inset-0 -z-10" style={{ y: yOffset }}>
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

      {/* Main text with animation */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Let's Start a New Project Together 🚀
      </motion.h1>

      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto flex flex-col gap-8 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white focus:outline-none py-4 px-2 text-white placeholder-gray-500 transition-all duration-300"
          />
        </motion.div>

        <motion.div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white focus:outline-none py-4 px-2 text-white placeholder-gray-500 transition-all duration-300"
          />
        </motion.div>

        <motion.div className="relative">
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border-b-2 border-gray-600 focus:border-white focus:outline-none py-4 px-2 text-white placeholder-gray-500 transition-all duration-300"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="relative py-3 px-8 bg-transparent border border-white text-white font-semibold rounded-lg overflow-hidden hover:bg-white hover:text-black transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-400 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>

        {submitStatus === "success" && <p className="text-green-500 text-center">Message sent successfully!</p>}
        {submitStatus === "error" && (
          <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
        )}
      </motion.form>
    </section>
  )
}

export default Contact

