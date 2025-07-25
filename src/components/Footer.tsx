import { Church, MapPin, Phone, Mail, Clock, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-church-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-church-gold" />
              <div>
                <h3 className="text-xl font-bold">ACK St. Michael & All Angels</h3>
                <p className="text-sm text-gray-300">Ruiru Parish</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              "But as for me and my house, we will serve the Lord" - Joshua 24:15
            </p>
            <p className="text-gray-300 text-sm">
              A welcoming Anglican community in Ruiru, dedicated to worship, fellowship, 
              and serving our community with God's love.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-church-gold mt-1" />
                <div className="text-sm text-gray-300">
                  <p>ACK St. Michael</p>
                  <p>Ruiru Town, Kiambu County</p>
                  <p>Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-church-gold" />
                <span className="text-sm text-gray-300">+254 7XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-church-gold" />
                <span className="text-sm text-gray-300">ackstmichaelruiru@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Service Times & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Times</h4>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-church-gold" />
                <span className="text-sm text-gray-300">Sunday 8:00 AM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-church-gold" />
                <span className="text-sm text-gray-300">Sunday 10:00 AM</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-church-gold hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-church-gold hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-6 mb-4 sm:mb-0">
            <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/ministries" className="text-sm text-gray-300 hover:text-white transition-colors">Ministries</Link>
            <Link to="/events" className="text-sm text-gray-300 hover:text-white transition-colors">Events</Link>
            <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-gray-300">
            © 2024 ACK St. Michael & All Angels Church - Ruiru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;