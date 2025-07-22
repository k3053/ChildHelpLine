
import React from "react";

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Cybersecurity for Children</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔐 Safe Internet Practices</h2>
        <ul className="list-disc list-inside">
          <li>Use strong and unique passwords.</li>
          <li>Don't share personal information online.</li>
          <li>Enable multi-factor authentication.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📱 Device Usage Guides</h2>
        <ul className="list-disc list-inside">
          <li>Manage screen time using apps and tools.</li>
          <li>Install parental control software.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🌐 Social Media Safety</h2>
        <p>Teach children about privacy settings and online etiquette.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🚨 Reporting Cybercrime</h2>
        <p>Report incidents at <a className="text-blue-700 underline" href="https://cybercrime.gov.in">cybercrime.gov.in</a>.</p>
      </section>
    </div>
  );
};

export default Cybersecurity;
