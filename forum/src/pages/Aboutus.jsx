// eslint-disable-next-line no-unused-vars
import React from 'react';

const Aboutus = () => {
  return (
    <div className="bg-white shadow-2xs min-h-screen py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-xl rounded-xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
          About Vaarta-Laab
        </h1>

        <p className="text-lg text-gray-700 text-center leading-relaxed">
          <span className="font-semibold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
            Vaarta-Laab
          </span>{' '}
          is a knowledge-sharing and learning community where curiosity meets clarity. The name &quot;Vaarta-Laab&quot; comes from Sanskrit roots, meaning “gain through conversation” — symbolizing our core belief that every conversation is an opportunity to grow.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
            Our Purpose
          </h2>
          <p className="text-gray-700">
            Vaarta-Laab aims to bring together learners, experts, and thinkers across domains — from science and technology to philosophy, literature, and beyond. We believe in creating a respectful space where questions are welcomed, knowledge is shared freely, and diverse viewpoints are appreciated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Well-organized Q&A system with topic-based discussions</li>
            <li>Support for Markdown formatting and threaded replies</li>
            <li>Profile customization and reputation-building through helpful answers</li>
            <li>Badges and milestones to celebrate your journey</li>
            <li>Admin and moderator support for a safe and positive experience</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
            Our Vision
          </h2>
          <p className="text-gray-700">
            We envision Vaarta-Laab as a digital gurukul — a space for modern minds to connect through meaningful dialogue, respectful debate, and shared curiosity. It’s not just about answers; it’s about understanding.
          </p>
        </section>

        <div className="text-center pt-6">
          <p className="text-lg font-medium bg-gradient-to-r from-sky-700 to-blue-600 bg-clip-text text-transparent">
            Join <span className="font-bold">Vaarta-Laab</span> and be part of a growing community that values learning, sharing, and mutual respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
