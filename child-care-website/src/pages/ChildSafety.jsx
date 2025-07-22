import React from "react";

const ChildSafety = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Child Safety Education</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏠 Physical Safety</h2>
        <ul className="list-disc list-inside">
          <li>Home safety guidelines</li>
          <li>School transport safety tips</li>
          <li>Stranger danger awareness</li>
          <li>Missing child prevention steps</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛡️ Sexual Abuse Prevention</h2>
        <ul className="list-disc list-inside">
          <li>Understanding POCSO Act</li>
          <li>Teaching good touch and bad touch</li>
          <li>Parent and teacher awareness programs</li>
        </ul>
      </section>
    </div>
  );
};

export default ChildSafety;
