// pages/features.js
"use client";
// pages/features.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Calendar, Users, MessageCircle, Video } from 'lucide-react';
// Import icons needed for the components
const Leaf = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 4 13c0-3.45 2.71-6.84 6-7.76V4h4v1.24c3.29.92 6 4.31 6 7.76a7 7 0 0 1-7 7z" />
    <path d="M12 10v6" />
    <path d="m8 13 4 3 4-3" />
  </svg>
);

const Dumbbell = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
);

const Target = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const ArrowRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Check = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

// Button component
const Button = ({ children, className }) => (
  <button
    className={`bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg flex items-center transition-colors ${className}`}
  >
    {children}
  </button>
);

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Features | healthSphere</title>
        <meta name="description" content="healthSphere features" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      {/* <nav className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center">
          <div className="bg-green-500 rounded-full p-1 mr-2">
            <span className="text-white font-bold text-lg">h</span>
          </div>
          <span className="font-bold text-lg">healthSphere</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/features" className="font-medium">Features</Link>
          <Link href="/diet-plans" className="font-medium">Diet Plans</Link>
          <Link href="/workouts" className="font-medium">Workouts</Link>
          <Link href="/daily-goals" className="font-medium flex items-center">
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
            Daily Goals
          </Link>
          <Link href="/testimonials" className="font-medium">Testimonials</Link>
        </div>
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">
            Get Started
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Features designed for your{" "}
          <span className="text-green-500">wellness</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform offers a comprehensive suite of tools to support your
          health journey
        </p>
      </div>

      {/* Custom CSS class for floating animation and glass effect */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .glass {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .dark .glass {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .font-display {
          font-family: "Inter", sans-serif;
        }
        .text-muted-foreground {
          color: #6b7280;
        }
        .dark .text-muted-foreground {
          color: #9ca3af;
        }
        .bg-health-100 {
          background-color: #dcfce7;
        }
        .bg-health-200 {
          background-color: #bbf7d0;
        }
        .text-health-600 {
          color: #16a34a;
        }
        .text-health-800 {
          color: #166534;
        }
      `}</style>

      {/* Diet Plans Section */}
      <section id="diet" className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-health-100 text-health-800 rounded-full text-sm font-medium mb-6">
              <div className="flex items-center">
                <Leaf className="h-4 w-4 mr-2" />
                <span>Nutrition</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Personalized <span className="text-health-600">diet plans</span>{" "}
              for your unique needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our nutrition experts create customized meal plans based on your
              dietary preferences, restrictions, and goals. Whether you're
              looking to lose weight, gain muscle, or simply eat healthier,
              we've got you covered.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Personalized meal recommendations",
                "Nutritional analysis and tracking",
                "Dietary restriction accommodations",
                "Grocery lists and meal prep guides",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-health-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L4.5 7.5L11 1"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button>
              Explore Diet Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80"
                alt="Healthy meal"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-10 right-10 glass p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-health-100 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-health-600" />
                </div>
                <div>
                  <div className="font-medium">100+ Recipes</div>
                  <div className="text-sm text-muted-foreground">
                    tailored to your needs
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-10 -right-10 h-64 w-64 bg-health-200 rounded-full filter blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Workout Section */}
      <section
        id="workouts"
        className="py-20 px-6 md:px-10 lg:px-20 bg-white-50 dark:bg-white-900"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
                alt="Person exercising"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="absolute -top-10 left-10 glass p-4 rounded-lg shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-health-100 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-health-600" />
                </div>
                <div>
                  <div className="font-medium">50+ Workouts</div>
                  <div className="text-sm text-muted-foreground">
                    for all fitness levels
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-10 -left-10 h-64 w-64 bg-health-200 rounded-full filter blur-3xl opacity-40" />
          </div>

          <div>
            <div className="inline-block px-3 py-1 bg-health-100 text-health-800 rounded-full text-sm font-medium mb-6">
              <div className="flex items-center">
                <Dumbbell className="h-4 w-4 mr-2" />
                <span>Fitness</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Custom <span className="text-health-600">workout routines</span>{" "}
              tailored to your goals
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a beginner or an experienced athlete, our platform
              offers customized workout plans designed to help you achieve your
              fitness goals efficiently and safely.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Personalized exercise programs",
                "Video demonstrations of exercises",
                "Progress tracking and analytics",
                "Adaptive difficulty based on performance",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-health-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L4.5 7.5L11 1"
                        stroke="#16a34a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button>
              Discover Workouts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Goals Section */}
      <section id="goals" className="py-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 bg-health-100 text-health-800 rounded-full text-sm font-medium mb-6">
              <div className="flex items-center">
                <Target className="h-4 w-4 mr-2" />
                <span>Daily Goals Tracker</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Track your daily <span className="text-health-600">progress</span>{" "}
              and stay motivated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Set personalized daily goals for nutrition, exercise, water
              intake, and more. Our intuitive tracker helps you build consistent
              habits and celebrate your achievements.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Set customizable daily targets",
                "Track your progress with visual indicators",
                "Receive motivational reminders and tips",
                "Earn rewards and badges for consistency",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-health-100 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-health-600" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button>
              Start Tracking Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80"
                alt="Person tracking goals on phone"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-10 right-10 glass p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-health-100 flex items-center justify-center">
                  <Target className="h-5 w-5 text-health-600" />
                </div>
                <div>
                  <div className="font-medium">Daily Streaks</div>
                  <div className="text-sm text-muted-foreground">
                    build consistency
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-10 -right-10 h-64 w-64 bg-health-200 rounded-full filter blur-3xl opacity-40" />
          </div>
        </div>
      </section>
      <section id="consultations" className="py-20 px-6 md:px-10 lg:px-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-1 lg:order-1 relative">
        <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
            alt="Health consultation" 
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="absolute -bottom-10 left-10 glass p-4 rounded-lg shadow-lg animate-float">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-health-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-health-600" />
            </div>
            <div>
              <div className="font-medium">Expert Team</div>
              <div className="text-sm text-muted-foreground">certified professionals</div>
            </div>
          </div>
        </div>
        
        <div className="absolute -z-10 -top-10 -left-10 h-64 w-64 bg-health-200 rounded-full filter blur-3xl opacity-40" />
      </div>
      
      <div className="order-2 lg:order-2">
        <div className="inline-block px-3 py-1 bg-health-100 text-health-800 rounded-full text-sm font-medium mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Expert Support</span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          One-on-one <span className="text-health-600">consultations</span> with certified experts
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Connect with our certified nutritionists and fitness professionals for personalized guidance tailored to your health journey. Get expert advice, customized recommendations, and ongoing support to help you achieve your wellness goals.
        </p>
        
        <div className="space-y-4 mb-8">
          {['Personalized one-on-one sessions', '24/7 chat support for quick queries', 'Video or phone consultations', 'Specialized guidance for specific health concerns'].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="h-6 w-6 rounded-full bg-health-100 flex items-center justify-center mr-3 mt-0.5">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L4.5 7.5L11 1" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        
        <Button>
          Book a Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </section>
      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2025 healthSphere. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
