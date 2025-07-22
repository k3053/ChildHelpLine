
import React from "react";

const LegalResources = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Legal Resources</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📜 Child Protection Laws</h2>
        <ul className="list-disc list-inside">
          <li>POCSO (Protection of Children from Sexual Offences Act)</li>
          <li>Juvenile Justice (JJ) Act</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🌍 International Child Rights</h2>
        <ul className="list-disc list-inside">
          <li>UNCRC (United Nations Convention on the Rights of the Child)</li>
          <li>Key Articles related to Indian law</li>
        </ul>
      </section>
    </div>
  );
};

export default LegalResources;
