"use client"

// Import necessary React and Next.js components
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


import { 
  Leaf,       
  Dumbbell,   
  Target,     
  ArrowRight, 
  Check,      
  Users,      
  Facebook,   
  Instagram, 
  Twitter 
} from 'lucide-react';

export default function HealthFeaturesPage() {
  
  const featureSections = [
    {
      id: "diet",
      icon: Leaf,
      badge: "Nutrition",
      title: "Custom Diet Plans Just for You",
      description: "Get meal plans designed specifically for your body and goals.",
      features: [
        "Personalized meal recommendations",
        "Easy nutritional tracking",
        "Supports all dietary needs",
        "Simple grocery lists"
      ],
      buttonText: "Explore Diet Plans",
      buttonLink: "/",
      imageSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
      floatText: "100+ Recipes"
    },
    {
      id: "workouts",
      icon: Dumbbell,
      badge: "Fitness",
      title: "Custom Workout Plans for Every Level",
      description: "Tailored exercise routines to help you reach your fitness goals.",
      features: [
        "Personalized exercise programs",
        "Video exercise guides",
        "Progress tracking",
        "Adaptive difficulty levels"
      ],
      buttonText: "View Workout Plans",
      buttonLink: "/",
      imageSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
      floatText: "50+ Workouts"
    },
    {
      id: "goals",
      icon: Target,
      badge: "Daily Goals Tracker",
      title: "Track your daily progress and stay motivated",
      description: "Set personalized daily goals for nutrition, exercise, water intake, and more. Our intuitive tracker helps you build consistent habits and celebrate your achievements.",
      features: [
        "Set customizable daily targets",
        "Track your progress with visual indicators",
        "Receive motivational reminders and tips",
        "Earn rewards and badges for consistency"
      ],
      buttonText: "Start Tracking Today",
      buttonLink: "/",
      imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80",
      floatText: "Daily Streaks"
    },
    {
      id: "consultations",
      icon: Users,
      badge: "Expert Support",
      title: "One-on-one consultations with certified experts",
      description: "Connect with our certified nutritionists and fitness professionals for personalized guidance tailored to your health journey. Get expert advice, customized recommendations, and ongoing support.",
      features: [
        "Personalized one-on-one sessions",
        "24/7 chat support for quick queries",
        "Video or phone consultations",
        "Specialized guidance for specific health concerns"
      ],
      buttonText: "Book a Consultation",
      buttonLink: "/",
      imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
      floatText: "Expert Team"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <Head>
        <title>healthSphere - Your Wellness Companion</title>
        <meta name="description" content="Simple, personalized health and fitness tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your Health, 
          <span className="text-green-500"> Simplified</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Easy-to-use tools to help you become your healthiest self
        </p>
      </div>

      {featureSections.map((section) => (
        <section key={section.id} className="py-20 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-6">
                <div className="flex items-center">
                  <section.icon className="h-4 w-4 mr-2 text-green-500" />
                  <span>{section.badge}</span>
                </div>
              </div>

              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {section.title}
              </h2>

             
              <p className="text-lg text-gray-600 mb-8">
                {section.description}
              </p>

             
              <div className="space-y-4 mb-8">
                {section.features.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              
              <Link 
                href={section.buttonLink} 
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center transition-colors"
              >
                {section.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            
            <div className="relative">
              <img
                src={section.imageSrc}
                alt={section.badge}
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ))}

      
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            © 2025 healthSphere. Your Wellness, Our Passion.
          </p>
          
          
          <div className="flex justify-center space-x-4">
            {[
              { name: 'Facebook', Icon: Facebook, href: "https://facebook.com" },
              { name: 'Instagram', Icon: Instagram, href: "https://instagram.com" },
              { name: 'Twitter', Icon: Twitter, href: "https://twitter.com" }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} profile`}
                className="text-gray-400 hover:text-gray-600"
              >
                <social.Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}