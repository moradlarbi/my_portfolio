"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, FileText } from "lucide-react"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credential: string
  type: "url" | "pdf"
  image: string
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Front-End Web UI Frameworks and Tools",
    issuer: "Coursera - THE HONG KONG University",
    date: "2020",
    credential: "https://www.coursera.org/account/accomplishments/certificate/SW74DFS4XECV",
    type: "url",
    image: "/images/coursera.jpg",
  },
  {
    id: "2",
    title: "Learn ECMA Script 6+ with Modern JavaScript Explained",
    issuer: "Udemy",
    date: "2020",
    credential: "https://www.udemy.com/certificate/UC-e6fbf5b6-4e8d-48f8-a867-cec52fe63cc5/",
    type: "url",
    image: "/images/udemy.png",
  },
  {
    id: "3",
    title: "Certificate of appreciation",
    issuer: "GDG Algiers - WTM Algiers",
    date: "2021",
    credential: "Certificate-Morad-Larbi-Messaoudi.pdf",
    type: "pdf",
    image: "/images/gdg.jpg",
  },
  {
    id: "4",
    title: "TOEIC Certificate",
    issuer: "ETS GLOBAL BV Certificate",
    date: "2025",
    credential: "toeic.pdf",
    type: "pdf",
    image: "/images/toeic.png",
  },
]

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const openCertificate = (certificate: Certificate) => {
    if (certificate.type === "url") {
      window.open(certificate.credential, "_blank")
    } else {
      setSelectedCertificate(certificate)
    }
  }

  return (
    <section className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">Certificates</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => openCertificate(certificate)}
            >
              <div className="relative h-48">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {certificate.type === "url" ? (
                    <ExternalLink className="w-8 h-8 text-white" />
                  ) : (
                    <FileText className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                <p className="text-gray-400 mb-2">{certificate.issuer}</p>
                <p className="text-sm text-gray-500">{certificate.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {selectedCertificate && selectedCertificate.type === "pdf" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`${selectedCertificate.credential}#view=fit`}
                className="w-full h-full"
                title={selectedCertificate.title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates

