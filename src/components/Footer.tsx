import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                contact@sl-ipr.gov.sl
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +232 XX XXX XXX
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Freetown, Sierra Leone
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Our Services</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Office Hours</h3>
            <p>Monday - Friday</p>
            <p>8:00 AM - 4:00 PM</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sierra Leone IPR Registration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}