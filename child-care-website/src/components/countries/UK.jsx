import React from 'react';

const UK = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇬🇧 United Kingdom – Child Welfare Initiatives
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          The United Kingdom has a comprehensive system for protecting children's rights and well-being. The country ensures access to education, health care, and social services, while child protection agencies work to safeguard vulnerable children.
        </p>
      </section>

      {/* Major Programs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Child Benefit</strong>: Financial support for families raising children.</li>
          <li><strong>Sure Start</strong>: Provides early education and childcare services.</li>
          <li><strong>Children and Families Act 2014</strong>: Supports children with special needs and promotes adoption reform.</li>
          <li><strong>Safeguarding and Child Protection</strong>: Ensures legal frameworks and social services for child safety.</li>
          <li><strong>Free School Meals</strong>: Available to eligible children from low-income households.</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population (0–14 years): ~17% of total population</li>
          <li>Literacy rate: ~99%</li>
          <li>Challenges: Child poverty, mental health, foster care capacity</li>
        </ul>
      </section>

      {/* Useful Links */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="https://www.gov.uk/childrens-services" target="_blank" rel="noreferrer" className="hover:underline">
              UK Government – Children's Services
            </a>
          </li>
          <li>
            <a href="https://www.nspcc.org.uk/" target="_blank" rel="noreferrer" className="hover:underline">
              NSPCC – National Society for the Prevention of Cruelty to Children
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default UK;
