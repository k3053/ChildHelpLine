import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const ChildProtectionMap = () => {
  const [view, setView] = useState('map');

  return (
    <section className="py-10 px-4 bg-slate-50" id="child-protection-map">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">
          Child Protection Around the World
        </h2>
        <p className="text-gray-600 mt-2">
          Explore laws and treaties across different countries
        </p>
        <div className="mt-4 space-x-4">
          <button
            onClick={() => setView('map')}
            className={`px-4 py-2 rounded ${
              view === 'map' ? 'bg-blue-600 text-white' : 'bg-white border'
            }`}
          >
            🌍 Map View
          </button>
          <button
            onClick={() => setView('timeline')}
            className={`px-4 py-2 rounded ${
              view === 'timeline' ? 'bg-blue-600 text-white' : 'bg-white border'
            }`}
          >
            📜 Timeline of Child Rights
          </button>
        </div>
      </div>

      {view === 'map' ? (
        <div className="w-full max-w-4xl mx-auto">
          <ComposableMap projectionConfig={{ scale: 160 }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() =>
                      alert(`Selected: ${geo.properties.NAME}`)
                    }
                    style={{
                      default: { fill: '#D6D6DA', outline: 'none' },
                      hover: { fill: '#F53', outline: 'none' },
                      pressed: { fill: '#E42', outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto">
          {/* Replace this with your actual timeline UI */}
          <ul className="space-y-4 text-left">
            <li>
              <span className="font-semibold">1989:</span> UN Convention on the Rights of the Child (CRC) adopted.
            </li>
            <li>
              <span className="font-semibold">2000:</span> Optional Protocols added for child soldiers and trafficking.
            </li>
            <li>
              <span className="font-semibold">2015:</span> SDG Goal 16.2 to end abuse and trafficking of children.
            </li>
            {/* Add more years/events here */}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ChildProtectionMap;
