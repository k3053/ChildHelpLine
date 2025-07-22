
import React from "react";

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Food & Nutrition</h1>
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">🍎 Balanced Diet Tips</h2>
        <ul className="list-disc list-inside">
          <li>Include fruits, vegetables, proteins, and grains</li>
          <li>Avoid sugary and processed foods</li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">💧 Hydration</h2>
        <p>Ensure children drink enough clean water daily.</p>
      </section>
    </div>
  );
};

export default Nutrition;
