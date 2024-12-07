import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-orange-100 p-4 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-800">ConstitutionEdu</Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild><Link to="/">Home</Link></Button>
          <Button variant="ghost" asChild><Link to="/admin">Admin</Link></Button>
          <Button variant="ghost" asChild><Link to="/educator">Educator</Link></Button>
          <Button variant="ghost" asChild><Link to="/citizen">Citizen</Link></Button>
          <Button variant="ghost" asChild><Link to="/about">About Us</Link></Button>
          <Button variant="ghost" asChild><Link to="/contact">Contact</Link></Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar