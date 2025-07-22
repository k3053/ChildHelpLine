
import React from "react";

const Emergency = () => {
  return (
    <div className="min-h-screen bg-blue-50 px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Emergency Contacts</h1>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>1098</strong> – Childline India (24x7 helpline for children)</li>
        <li><strong>112</strong> – National Emergency Number</li>
        <li><strong>100</strong> – Police</li>
        <li><strong>101</strong> – Fire Services</li>
        <li><strong>102</strong> – Ambulance</li>
      </ul>
    </div>
  );
};

export default Emergency;
