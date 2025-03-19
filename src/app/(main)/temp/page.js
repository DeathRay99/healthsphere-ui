
"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Custom icon components to replace Heroicons
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} 
       stroke={filled ? "none" : "currentColor"} className="w-5 h-5">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "HealthSphere completely transformed my approach to fitness. I've lost 30 pounds and have never felt better!",
    image: "/testimonial1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "The personalized workout plans are incredible. I've gained muscle and improved my overall health in just 6 weeks.",
    image: "/testimonial2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "As a busy mom, I appreciate how the diet plans are flexible and actually fit into my lifestyle. Down 15 pounds!",
    image: "/testimonial3.jpg",
    rating: 4,
  },
];

const successStories = [
  {
    id: 1,
    title: "Weight Loss Journey",
    image: "/success1.jpg",
    stats: "+28lbs lost in 8 weeks",
  },
  {
    id: 2,
    title: "Muscle Transformation",
    image: "/success2.jpg",
    stats: "+15% muscle gain",
  },
  {
    id: 3,
    title: "Marathon Training",
    image: "/success3.jpg",
    stats: "First marathon completed",
  },
];

const features = [
  {
    title: "Personalized Diet Plans",
    description: "Nutrition guidance tailored to your specific goals and dietary preferences.",
    icon: "🥗",
  },
  {
    title: "Custom Workout Routines",
    description: "Exercise plans designed for your fitness level and available equipment.",
    icon: "💪",
  },
  {
    title: "Daily Progress Tracking",
    description: "Monitor your achievements and stay motivated with visual progress charts.",
    icon: "📈",
  },
  {
    title: "Expert Support",
    description: "Access to certified trainers and nutritionists for guidance at every step.",
    icon: "👩‍⚕️",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % successStories.length);
    }, 4000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <>
      <Head>
        <title>HealthSphere - Your Journey to a Healthier You</title>
        <meta name="description" content="Discover personalized diet plans and workout routines tailored to your unique needs and goals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <Link href="/">
            <span className="text-2xl font-bold hover:cursor-pointer">health<span className="text-green-500">Sphere</span></span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-500">Features</a>
            <a href="#diet-plans" className="text-gray-700 hover:text-green-500">Diet Plans</a>
            <a href="#workouts" className="text-gray-700 hover:text-green-500">Workouts</a>
            <a href="#daily-goals" className="text-gray-700 hover:text-green-500">Daily Goals</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-500">Testimonials</a>
          </nav>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 mb-4">
                Personalized Health Solutions
              </div>
              <h1 className="text-5xl font-bold mb-4">Your journey to a <span className="text-green-500">healthier you</span> starts here</h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover personalized diet plans and workout routines tailored to your unique needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center">
                  Start Your Journey <span className="ml-2">→</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="mt-12">
                <p className="text-gray-500 mb-2">Join 10,000+ users</p>
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white"></div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
                <div className="relative h-72 mb-4 overflow-hidden rounded-lg">
                  <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-green-500 font-bold z-10">
                    95% Success Rate
                  </div>
                  <div className="absolute bottom-2 left-2 bg-green-500 px-3 py-1 rounded-full text-white font-bold z-10">
                    +28lbs <span className="text-sm font-normal">after 4 weeks</span>
                  </div>
                  <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How HealthSphere Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive approach to health combines nutrition, fitness, and lifestyle changes tailored to your individual needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Slideshow */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Transformation Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">See how our members transformed their lives with HealthSphere's personalized approach.</p>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg">
                {successStories.map((story, index) => (
                  <div 
                    key={story.id}
                    className={`transition-opacity duration-500 ${currentSlide === index ? 'block' : 'hidden'}`}
                  >
                    <div className="relative h-96 bg-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                        <p className="text-xl font-semibold text-green-400">{story.stats}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronLeftIcon />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronRightIcon />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real results from real people who have transformed their lives with HealthSphere.</p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-opacity duration-500 ${currentTestimonial === index ? 'block' : 'hidden'}`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>
                            <StarIcon filled={i < testimonial.rating} />
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronLeftIcon />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronRightIcon />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-green-500' : 'bg-gray-300'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Begin Your Health Journey Today</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of people who have already transformed their lives with our personalized health programs.
            </p>
            <button className="bg-white text-green-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold">h</span>
                </div>
                <h3 className="text-xl font-bold">health<span className="text-green-500">Sphere</span></h3>
              </div>
              <p className="text-gray-400">Your complete health and wellness solution, personalized just for you.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">About Us</a></li>
                <li><a href="#" className="hover:text-green-400">Careers</a></li>
                <li><a href="#" className="hover:text-green-400">Blog</a></li>
                <li><a href="#" className="hover:text-green-400">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Support Center</a></li>
                <li><a href="#" className="hover:text-green-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500">
                  <span>F</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500">
                  <span>T</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500">
                  <span>I</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-500">
                  <span>Y</span>
                </a>
              </div>
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex mt-2">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-full focus:outline-none text-gray-800" />
                <button className="bg-green-500 text-white px-4 py-2 rounded-r-full hover:bg-green-600">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
            <p>© 2025 HealthSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}