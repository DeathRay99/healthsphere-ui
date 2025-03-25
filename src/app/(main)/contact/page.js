"use client";

import React from "react";
import Head from "next/head";

export default function Contact() {
  // Mock Data for Website Creators
  const creators = [
    {
      name: "Ashi Chhabra",
      email: "ashichhabra95@gmail.com",
      phone: "+91-8979218038",
    },
    {
      name: "Deepak Kumar Goel",
      email: "deepak84687@gmail.com",
      phone: "+91-9599799310",
    },
    {
      name: "Harshita Sharma",
      email: "sharmaharshita2010@gmail.com",
      phone: "+91-8959979399",
    },
    {
      name: "Ronit Kumar",
      email: "ronit20075@gmail.com",
      phone: "+91-9779422577",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | healthSphere</title>
        <meta name="description" content="Get in touch with the creators of healthSphere" />
      </Head>

      {/* Header */}
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto py-6 px-4 text-center">
          <h1 className="text-3xl font-extrabold">Contact Us</h1>
          <p className="mt-2 text-lg">
            Have questions about healthSphere? Reach out to our team!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 bg-gradient-to-br from-green-50 to-white">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Website Creators
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {creator.name}
              </h3>
              <p className="text-green-500 mb-2">{creator.email}</p>
              <p className="text-gray-500">{creator.phone}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; 2025 healthSphere. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
