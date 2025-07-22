import React from 'react';

const Canada = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇨🇦 Canada – Child Welfare Initiatives
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          Canada places a strong emphasis on the rights and welfare of children. Through provincial and federal initiatives, the country provides robust healthcare, education, and protection services to support children's physical, emotional, and social development.
        </p>
      </section>

      {/* Major Programs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Canada Child Benefit (CCB)</strong>: Monthly tax-free payment to help families with the cost of raising children.</li>
          <li><strong>Early Learning and Child Care Agreements</strong>: Expands affordable child care services in partnership with provinces.</li>
          <li><strong>Indigenous Child Welfare Reform</strong>: Supports culturally appropriate care and self-determination for Indigenous children.</li>
          <li><strong>Safe Kids Canada</strong>: National program to reduce preventable injuries in children.</li>
          <li><strong>Public Health Services</strong>: Provides immunization, mental health services, and nutritional guidance for children.</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population (0–14 years): ~16% of total population</li>
          <li>Literacy rate: ~99%</li>
          <li>Challenges: Indigenous child services, child poverty, access in rural areas</li>
        </ul>
      </section>

      {/* Useful Links */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="https://www.canada.ca/en/services/benefits/child-family/child-benefit.html" target="_blank" rel="noreferrer" className="hover:underline">
              Canada Child Benefit – Government of Canada
            </a>
          </li>
          <li>
            <a href="https://cwrp.ca/" target="_blank" rel="noreferrer" className="hover:underline">
              Canadian Child Welfare Research Portal
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Canada;
