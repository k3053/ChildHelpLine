import React from 'react';

const Japan = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        🇯🇵 Japan – Child Welfare Initiatives
      </h1>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Overview</h2>
        <p className="text-gray-600">
          Japan places strong emphasis on child welfare, education, and protection. The country has implemented various supportive policies for child development, mental health, and parental support.
        </p>
      </section>

      {/* Major Programs */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Major Government Programs</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li><strong>Child Allowance Program</strong>: Provides monthly financial support to families with children.</li>
          <li><strong>Angel Plan</strong>: Promotes work-life balance and child-rearing support for working parents.</li>
          <li><strong>Free Preschool Education</strong>: Ensures free access to early childhood education for all 3–5-year-olds.</li>
          <li><strong>Child Guidance Centers</strong>: Offers counseling, protection, and intervention services for children in need.</li>
          <li><strong>School Safety Policies</strong>: Strict safety and hygiene protocols in schools nationwide.</li>
        </ul>
      </section>

      {/* Quick Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Quick Stats</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Child poverty rate: ~13%</li>
          <li>Literacy rate: ~99%</li>
          <li>Focus areas: Low birthrate, mental health support, academic pressure</li>
        </ul>
      </section>

      {/* Useful Links */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Useful Links</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-1">
          <li>
            <a href="https://www.mhlw.go.jp/english/" target="_blank" rel="noreferrer" className="hover:underline">
              Ministry of Health, Labour and Welfare
            </a>
          </li>
          <li>
            <a href="https://www.jice.org/en/" target="_blank" rel="noreferrer" className="hover:underline">
              Japan International Cooperation Center (JICE)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Japan;
