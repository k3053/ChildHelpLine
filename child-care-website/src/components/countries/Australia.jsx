import React from 'react';

const Australia = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇦🇺 Australia – Child Welfare Initiatives
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          Australia prioritizes child well-being through national strategies focused on health, safety, and education. Government and non-profit sectors work together to support children from early development to adolescence.
        </p>
      </section>

      {/* Major Programs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>National Framework for Protecting Australia's Children</strong>: Provides a coordinated national approach to child protection.</li>
          <li><strong>Child Care Subsidy</strong>: Financial support for families to access early childhood education and care.</li>
          <li><strong>My School Portal</strong>: Transparency for school performance and educational standards.</li>
          <li><strong>Kids Helpline</strong>: 24/7 counseling and support service for children and teens.</li>
          <li><strong>National Disability Insurance Scheme (NDIS)</strong>: Supports children with disabilities and their families.</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population: ~19% of total population</li>
          <li>Literacy rate: ~99%</li>
          <li>Challenges: Indigenous child welfare, rural healthcare, mental health</li>
        </ul>
      </section>

      {/* Useful Links */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="https://www.dss.gov.au/" target="_blank" rel="noreferrer" className="hover:underline">
              Department of Social Services – Children & Families
            </a>
          </li>
          <li>
            <a href="https://kidshelpline.com.au/" target="_blank" rel="noreferrer" className="hover:underline">
              Kids Helpline Australia
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Australia;
