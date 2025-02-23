import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, CalendarIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] select-none overflow-hidden" aria-hidden="true">
        <div className="relative w-full h-full">
          {/* Diagonal repeating text */}
          <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
            {[...Array(10)].map((_, rowIndex) => (
              <div 
                key={rowIndex} 
                className="absolute whitespace-nowrap"
                style={{ 
                  top: `${rowIndex * 150}px`,
                  left: '-100%',
                  right: '-100%',
                  textAlign: 'center'
                }}
              >
                {[...Array(10)].map((_, colIndex) => (
                  <span 
                    key={colIndex}
                    className="inline-block px-8 py-4 text-4xl md:text-6xl font-bold text-red-500/20"
                  >
                    DEMO ONLY
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <Disclosure as="header" className="bg-white shadow-sm fixed w-full top-0 z-50">
        {({ open }) => (
          <>
            <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src="http://www.aliciashouse.org/s/misc/logo.jpg?t=1732226299" alt="Alicia's House" className="h-10 w-10 object-contain" />
                  <h1 className="text-gray-900 font-semibold text-xl">Alicia's House</h1>
                </div>
                
                {/* Desktop menu */}
                <div className="hidden sm:flex sm:space-x-6">
                  <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                  <a href="#events" className="text-gray-600 hover:text-gray-900">Events</a>
                  <a href="#news" className="text-gray-600 hover:text-gray-900">News</a>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                  <a href="https://login.1and1-editor.com/29111455/www.aliciashouse.org/us?pageId=55405" target='_blank' className="text-gray-600 hover:text-gray-900">Login</a>
                </div>

                {/* Mobile menu button */}
                <div className="sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </nav>

            {/* Mobile menu panel */}
            <Disclosure.Panel className="sm:hidden absolute w-full bg-white shadow-lg">
              <div className="space-y-1 px-4 pb-3 pt-2">
                <Disclosure.Button
                  as="a"
                  href="#about"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  About
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#events"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Events
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#news"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  News
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#contact"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="https://login.1and1-editor.com/29111455/www.aliciashouse.org/us?pageId=55405"
                  target='_blank'
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Login
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Add a spacer div to prevent content from hiding under fixed header */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center py-16 sm:py-24"
        style={{ backgroundImage: 'url(http://www.aliciashouse.org/s/img/emotionheader.jpg?1528740286)', height: '550px' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white bg-opacity-75 p-8 rounded-md">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Feeding Families with Love
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Continuing Alicia's legacy of helping those in need through our food pantry service.
            </p>
            <div className="mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=A3YA9XP47PR4U&ssrt=1740288257350"
                target='_blank'
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Donate Now
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600">
                Alicia loved people and loved helping people. She would spend hours working with her Grandma Stella, at the church food pantry, making bags of food to hand out to people in need. Although her Grandma had a specific way to nutritionally pack the bags, Alicia would always add her special touch by making sure each bag would contain a special treat, usually candy.
              </p>
              <br></br>
              <p className="text-gray-600">
                To honor the memory of Alicia. who passed away at the age of 4, January 14th, 2001. Her Grandma Stella and Poppy Juan started a non-for profit food pantry called Alicia's House. Alicia's House will continue to feed hundreds of hungry families and each bag of food will contain Alicia's special loving touch.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="http://www.aliciashouse.org/s/misc/logo.jpg?t=1732226299" 
                alt="Alicia's House Logo" 
                className="h-65 w-65 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <CalendarIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Food Distribution</h4>
              <p className="text-gray-600">Every Wednesday, 9 AM - 12 PM</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <CalendarIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Volunteer Orientation</h4>
              <p className="text-gray-600">First Saturday of each month, 10 AM</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id='news' className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Latest News</h3>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              Due to the current pandemic and all the safety guidelines needed to be followed, Alicia's House is now a drive up pantry operation.
            </p>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">The guidelines are as follows:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Pull your car in to join the line.</li>
                <li>Stay in your vehicle.</li>
                <li>A volunteer will come to your vehicle to gather your information.</li>
                <li>When directed pull up to the available table.</li>
                <li>Volunteers will load your vehicle.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Column */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <h4 className="text-lg font-semibold">Location</h4>
                </div>
                <p className="text-gray-600">
                  Alicia's House<br />
                  17 Paulsen Ave<br />
                  South Chicago Heights, IL 60411
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <h4 className="text-lg font-semibold">Mailing Address</h4>
                </div>
                <p className="text-gray-600">
                  Alicia's House<br />
                  P.O. Box 1232<br />
                  Beecher, IL 60401
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <PhoneIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <h4 className="text-lg font-semibold">Phone</h4>
                </div>
                <p className="text-gray-600">708-946-3002</p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <EnvelopeIcon className="h-8 w-8 text-blue-600 mr-4" />
                  <h4 className="text-lg font-semibold">Email</h4>
                </div>
                <p className="text-gray-600">
                  <a href="mailto:aliciashousepantry@sbcglobal.net" className="hover:text-blue-600">
                    aliciashousepantry@sbcglobal.net
                  </a>
                </p>
              </div>
            </div>

            {/* Third Column */}
            <div className="lg:pl-8">
              <div className="flex items-center mb-4">
                <svg className="h-8 w-8 text-blue-600 mr-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <h4 className="text-lg font-semibold">Facebook</h4>
              </div>
              <p className="text-gray-600">
                <a 
                  href="https://www.facebook.com/Alicias-House-Food-Pantry-135222333187412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Follow Us on Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Alicia's House Food Pantry. All rights reserved.</p>
            <div className="mt-2">
              <a href="https://smile.amazon.com/ch/36-4463701" target='_blank' className="text-blue-600 hover:text-blue-700">
                Support us through Amazon Smile
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;