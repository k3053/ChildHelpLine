// Russia.jsx
import React from 'react';

const Russia = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇷🇺 Russia – Child Welfare Initiatives
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          Russia has implemented several federal programs focusing on child health, orphan care, and access to education
          and healthcare across its regions. Child protection is handled by both governmental and regional bodies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Maternal Capital Program</strong>: Financial support for families after the birth of a second child.</li>
          <li><strong>Federal Target Program for Children</strong>: Health and education support for children with disabilities.</li>
          <li><strong>Orphan Care Reforms</strong>: Aimed at deinstitutionalizing orphans and promoting foster care.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population (0–17 years): ~22% of total population</li>
          <li>Primary school enrollment: ~98%</li>
          <li>Challenges: Orphan care, remote region access, child health services</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li><a href="https://минпросвещения.рф" target="_blank" rel="noreferrer" className="hover:underline">Ministry of Education of Russia</a></li>
          <li><a href="https://минздрав.рф" target="_blank" rel="noreferrer" className="hover:underline">Ministry of Health of Russia</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Russia;

