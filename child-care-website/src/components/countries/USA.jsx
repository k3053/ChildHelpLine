// Example: USA.jsx
import React from 'react';

const USA = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8 text-center">
          🇺🇸 USA – Child Welfare Initiatives
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The United States offers a broad network of child welfare programs at both federal and state levels, 
            aimed at ensuring children's safety, education, and healthcare access.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Key Programs</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li><strong>Head Start</strong>: Early childhood education for low-income families.</li>
            <li><strong>CHIP (Children’s Health Insurance Program)</strong>: Affordable health coverage for children.</li>
            <li><strong>Child Protective Services (CPS)</strong>: Responds to abuse and neglect cases.</li>
            <li><strong>SNAP and WIC</strong>: Nutritional assistance for families and children.</li>
            <li><strong>Free/Reduced Lunch Program</strong>: Provides meals to school children in need.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Quick Stats</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Child population (0–17 years): ~22% of total population</li>
            <li>Child poverty rate: ~16%</li>
            <li>Major concerns: Access to mental health services, educational gaps, foster care system reforms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Useful Links</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 text-lg">
            <li><a href="https://www.acf.hhs.gov/cb" target="_blank" rel="noreferrer" className="hover:underline">Children’s Bureau – HHS</a></li>
            <li><a href="https://www.childwelfare.gov/" target="_blank" rel="noreferrer" className="hover:underline">Child Welfare Information Gateway</a></li>
            <li><a href="https://www.healthcare.gov/" target="_blank" rel="noreferrer" className="hover:underline">HealthCare.gov for CHIP & Medicaid</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default USA;
