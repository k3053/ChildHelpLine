import React from 'react';

const Germany = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇩🇪 Germany – Child Welfare Initiatives
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          Germany offers a well-established child welfare system focused on child rights, protection, healthcare, and education. The government collaborates with both federal and local agencies to support children and families.
        </p>
      </section>

      {/* Major Programs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Kindergeld</strong>: Monthly allowance to support families raising children.</li>
          <li><strong>Elterngeld</strong>: Financial aid for parents taking care of newborns during their first year.</li>
          <li><strong>Jugendamt Services</strong>: Municipal youth welfare offices provide support in education, custody, and family counseling.</li>
          <li><strong>Free Education</strong>: Public schools and universities are tuition-free for all residents, including children.</li>
          <li><strong>Preventive Healthcare</strong>: Regular child check-ups, vaccinations, and developmental screenings.</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child population (0–14 years): ~13% of total population</li>
          <li>Literacy rate: ~99%</li>
          <li>Challenges: Integration of migrant children, child poverty, and digital safety</li>
        </ul>
      </section>

      {/* Useful Links */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="https://www.bmfsfj.de/" target="_blank" rel="noreferrer" className="hover:underline">
              Federal Ministry for Family Affairs, Senior Citizens, Women and Youth (BMFSFJ)
            </a>
          </li>
          <li>
            <a href="https://www.kindergesundheit-info.de/" target="_blank" rel="noreferrer" className="hover:underline">
              Child Health Information – Germany
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Germany;
