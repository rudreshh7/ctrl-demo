"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import NextImage from "next/image";

const CtrlApp = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">ctrl</div>
          <div className="flex space-x-6">
            <button className="bg-white text-black px-4 py-2 flex gap-2 rounded-lg hover:bg-gray-200 transition-colors">
              <NextImage
                src="/icons8-apple-inc.svg"
                alt="Download Icon"
                width={20}
                height={20}
              />
              Download
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Control your life
            <br />
            <span className="text-gray-400">like never before</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            The ultimate productivity app that puts you in complete control of
            your digital life, tasks, and workflows with unprecedented
            simplicity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start w-full px-4">
            {/* Windows Download Button */}
            <button
              onClick={() => {
                window.open(
                  "https://drive.usercontent.google.com/u/0/uc?id=1q6-klthOFvTWpnlvRbtorKF1S7ZphdFX&export=download",
                  "_blank"
                );
              }}
              className="w-full sm:w-auto bg-white cursor-pointer text-black px-4 py-3 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <NextImage
                src="/icons8-windows-50.png"
                alt="Download Icon"
                width={20}
                height={20}
              />
              Download for Windows
            </button>

            {/* Mac Download Button */}
            <button
              onClick={() => {
                // Add Mac download link here
              }}
              className="w-full sm:w-auto bg-white text-black px-4 py-3 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm font-medium"
            >
              <NextImage
                src="/icons8-apple-inc.svg"
                alt="Download Icon"
                width={20}
                height={20}
              />
              Download for Mac
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">See ctrl in Action</h2>

          <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video">
            <iframe
              className="w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DxZq0IzBPuQ?si=qt7GfZCw7zeT8KjI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            >
              Your browser does not support iframes.
            </iframe>

            <div className="absolute bottom-4 left-4 text-sm text-gray-400 z-10">
              Watch Demo • 2:34
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Features that matter</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to take control, streamlined into one powerful
              application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature Block Template */}
            {[
              {
                title: "Feature Snippet Manager",
                description:
                  "Save, organize, and instantly access your most-used code snippets, text templates, and quick notes with lightning-fast search.",
              },
              {
                title: "One-Click Document Download",
                description:
                  "Download any document, file, or resource with a single click. No more navigating through complex menus or waiting.",
              },
              {
                title: "Open Any Link Instantly",
                description:
                  "Launch any website, application, or local file with one click. Create custom shortcuts for your most-visited destinations.",
              },
              {
                title: "External Tools and APIs",
                description:
                  "No need to open any app , You can do it here with ctrl",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
              >
                <div className="mb-6 flex justify-center">
                  <NextImage
                    src="/ctrlapp.png"
                    alt={feature.title}
                    width={400}
                    height={400}
                    className="rounded-xl object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What users are saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              <div className="flex mb-4"></div>
              <p className="text-gray-300 mb-4">
                &quot;ctrl has completely transformed how I work. The snippet
                manager alone saves me hours every week.&quot;
              </p>
              <div className="text-sm text-gray-500">Sarah Chen, Developer</div>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              <div className="flex mb-4"></div>
              <p className="text-gray-300 mb-4">
                &quot;Finally, an app that actually makes me more productive
                instead of adding complexity to my workflow.&quot;
              </p>
              <div className="text-sm text-gray-500">
                Marcus Rodriguez, Designer
              </div>
            </div>

            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              <div className="flex mb-4"></div>
              <p className="text-gray-300 mb-4">
                &quot;The automation features are incredible. I&apos;ve
                automated my entire morning routine with just a few
                clicks.&quot;
              </p>
              <div className="text-sm text-gray-500">
                Alex Thompson, Manager
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does ctrl differ from other productivity apps?",
                a: "ctrl focuses on simplicity and speed. While other apps add complexity, we eliminate friction between you and your tasks.",
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. All data is encrypted locally and we never store your personal information on our servers.",
              },
              {
                q: "Can I use ctrl on multiple devices?",
                a: "Not now we are adding sync feature in future releases.",
              },
              {
                q: "Do you offer a free trial?",
                a: "It free and Open Source, you can use it for free forever.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-800 rounded-lg">
                <button className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-900 transition-colors">
                  <span className="font-semibold">{faq.q}</span>
                  <ChevronDown className="w-5 h-5" />
                </button>
                <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to take control?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join hundred of users who have already transformed their
            productivity with ctrl.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Download ctrl
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
              Join Waitlist for Mac
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">ctrl</div>
              <p className="text-gray-400 text-sm">
                Control your life like never before with the ultimate
                productivity app.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Features</div>
                <div>Pricing</div>
                <div>Updates</div>
                <div>Support</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Privacy</div>
                <div>Terms</div>
                <div>Security</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>ctrl. Made with ❤️ in India by rudr</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div>Twitter</div>
              <div>GitHub</div>
              <div>Discord</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CtrlApp;
