import React from 'react';

const India = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">
          🇮🇳 India – Child Welfare Initiatives
        </h1>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            India has implemented numerous national programs focusing on child safety, nutrition, education,
            and protection. These initiatives aim to improve the overall well-being of children across the country,
            from urban metros to remote villages.
          </p>
        </section>

        {/* Major Programs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Major Government Programs</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li><strong>POSHAN Abhiyaan</strong>: Nutrition program for children and mothers.</li>
            <li><strong>Integrated Child Protection Scheme (ICPS)</strong>: Offers protection and shelter services.</li>
            <li><strong>Beti Bachao, Beti Padhao</strong>: Supports gender equality and girl child education.</li>
            <li><strong>Mid-Day Meal Scheme</strong>: Provides free school meals to improve nutrition and attendance.</li>
            <li><strong>Right to Education Act (RTE)</strong>: Ensures free, compulsory education for ages 6–14.</li>
          </ul>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Quick Stats</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>👶 Child population (0–14 years): ~26% of India’s total population</li>
            <li>📚 Literacy rate (age 7+): ~77%</li>
            <li>⚠️ Key challenges: Malnutrition, Child Labor, and Educational Access</li>
          </ul>
        </section>

        {/* Useful Links */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Useful Links</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 text-lg">
            <li>
              <a href="https://wcd.nic.in/" target="_blank" rel="noreferrer" className="hover:underline">
                Ministry of Women and Child Development
              </a>
            </li>
            <li>
              <a href="https://poshan.abhiyaan.gov.in/" target="_blank" rel="noreferrer" className="hover:underline">
                POSHAN Abhiyaan Portal
              </a>
            </li>
            <li>
              <a href="https://ncpcr.gov.in/" target="_blank" rel="noreferrer" className="hover:underline">
                National Commission for Protection of Child Rights (NCPCR)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default India;
