// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-auto w-full bg-black  max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <Link to="/" className="flex items-center justify-center">
        <span className="relative   inline-block px-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-blue-600">
              &quot; VARTA LAAB &quot;
            </span>
            <p className=' text-white' > मात्र चर्चा नहीं, संस्कारों का संवाहक;</p>
        </Link>
        <p className="mt-5 text-center text-sm leading-6 text-white">
          © {new Date().getFullYear()} वार्ता-लाप. All rights reserved.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-white">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <Link to="/changelog">Changelog</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
