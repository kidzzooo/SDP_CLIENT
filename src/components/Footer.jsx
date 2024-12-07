import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-200 p-4 mt-8"
    >
      <div className="container mx-auto text-center text-orange-800">
        <p>&copy; 2023 ConstitutionEdu. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer