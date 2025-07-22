// Sample component for China
import React from 'react';

const China = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-red-600 mb-6">🇨🇳 China Child Welfare Initiatives</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          China has made significant progress in improving child welfare through legislation and national programs focusing on education, health, and poverty alleviation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>National Program of Action for Children</strong>: Strategic goals in health, education, environment, and legal protection.</li>
          <li><strong>Compulsory Education Law</strong>: Mandates 9 years of free education.</li>
          <li><strong>Rural Student Nutrition Improvement Program</strong>: Provides school meals to children in rural areas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population (0–14 years): ~17.9%</li>
          <li>Literacy rate (age 15+): ~96.8%</li>
          <li>Major challenges: Urban-rural disparity, child poverty, left-behind children</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li><a href="http://www.nhc.gov.cn/" target="_blank" rel="noreferrer" className="hover:underline">National Health Commission of China</a></li>
          <li><a href="http://www.moe.gov.cn/" target="_blank" rel="noreferrer" className="hover:underline">Ministry of Education of China</a></li>
        </ul>
      </section>
    </div>
  );
};

export default China;
