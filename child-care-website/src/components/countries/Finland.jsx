import React from 'react';

const Finland = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇫🇮 Finland – Child Welfare Initiatives
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          Finland is globally recognized for its strong child welfare policies and education system. The government provides universal access to health care, education, and social services to ensure holistic child development.
        </p>
      </section>

      {/* Major Programs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Maternity and Child Health Clinics</strong>: Free pre- and postnatal services for all families.</li>
          <li><strong>Universal Daycare</strong>: Government-funded early childhood education and care for all children.</li>
          <li><strong>Basic Education Act</strong>: Ensures free and equal access to education for every child.</li>
          <li><strong>Student Welfare Services</strong>: Mental health and well-being support in schools.</li>
          <li><strong>Child Welfare Act</strong>: Guides intervention and support in case of child endangerment.</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population: ~18% of total population</li>
          <li>Literacy rate: ~100%</li>
          <li>Challenges: Youth mental health, immigration integration</li>
        </ul>
      </section>

      {/* Useful Links */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="https://stm.fi/en/frontpage" target="_blank" rel="noreferrer" className="hover:underline">
              Finnish Ministry of Social Affairs and Health
            </a>
          </li>
          <li>
            <a href="https://www.oph.fi/en" target="_blank" rel="noreferrer" className="hover:underline">
              Finnish National Agency for Education (EDUFI)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Finland;
