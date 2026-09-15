import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Impact } from './components/Impact';
import { HowWeWork } from './components/HowWeWork';
import { Volunteer } from './components/Volunteer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const [volunteerInterest, setVolunteerInterest] = useState('');

  const handleProgramSelectForVolunteer = (interestName) => {
    setVolunteerInterest(interestName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {/* Top Sticky Navbar */}
      <Navbar onGetInvolvedClick={() => {}} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => {}}
          onGetInvolvedClick={() => {}}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Programs Section */}
        <Programs
          onSelectProgramForVolunteer={handleProgramSelectForVolunteer}
        />

        {/* 4. Impact Section */}
        <Impact />

        {/* 5. How We Work Section */}
        <HowWeWork />

        {/* 6. Volunteer Section + Form */}
        <Volunteer
          preselectedInterest={volunteerInterest}
        />

        {/* 7. Contact Section + FAQs */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}
