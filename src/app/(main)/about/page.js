import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us | healthSphere</title>
        <meta
          name="description"
          content="Learn about healthSphere's mission and team"
        />
      </Head>

      {/* Hero Section */}
      <div className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About <span className="text-green-500">healthSphere</span>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Created in 2025, healthSphere was born out of a passion for
              nutrition, fitness, and technology with a mission to bring
              personalized health and wellness solutions into everyone’s life.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Mission
            </h2>
            <div className="mt-8 text-lg text-gray-500 max-w-3xl mx-auto">
              <p className="mb-4">
                We understand that no two people are the same. Health goals,
                body types, lifestyles, and preferences are incredibly diverse,
                making generic diets and exercise plans fall short. People need
                solutions that adapt to their unique journey—not the other way
                around.
              </p>
              <p>
                Powered by expert insights and cutting-edge technology, our
                platform delivers personalized wellness experiences tailored to
                you—because your health should revolve around your life, not the
                other way around. With healthSphere, you’re not just following a
                plan—you’re part of a journey built for you, by you, and with
                your goals at heart.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personalization
                </h3>
                <p className="text-gray-500">
                  Our solutions adapt to your unique needs, ensuring your health
                  journey revolves around you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Science-Based
                </h3>
                <p className="text-gray-500">
                  Everything we deliver is grounded in research and
                  evidence-based practices for maximum results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-green-100 rounded-md flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Holistic Wellness
                </h3>
                <p className="text-gray-500">
                  Our platform encompasses nutrition, fitness, recovery, and
                  mental wellbeing for a complete approach to health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Interested in learning more about healthSphere? Reach out to us!
            </p>
            <div className="max-w-lg mx-auto">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {/* Social Links */}
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                {/* Insert Facebook SVG */}
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                {/* Insert Instagram SVG */}
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
