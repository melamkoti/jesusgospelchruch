import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <p>mppw school near, Machavaram Guntur, AP 522435</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <p>+ 91 9866237573</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <p>info@jesusgospelchurch.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400">Service Times</a></li>
              <li><a href="#events" className="hover:text-purple-400">Events</a></li>
              <li><a href="#" className="hover:text-purple-400">Ministries</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <footer className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
  <p>&copy; 2025 Jesus Gospel Church. All rights reserved.</p>
  <p>
    Website designed by <span className="font-semibold text-white">Melam Koteswaramma</span>
  </p>
</footer>

      </div>
    </footer>
  );
}