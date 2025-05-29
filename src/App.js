import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Data for the charts (extracted from your HTML)

// Chart 1: Remote Work Application Volume (MODIFIED FOR CYBERSECURITY-SPECIFIC DATA)
const dataChart1 = [
  { name: 'On-site', value: 11, fill: '#e74c3c' }, // MODIFIED: 11% for cybersecurity [cite: 52]
  { name: 'Hybrid', value: 15, fill: '#f39c12' },  // MODIFIED: 15% for cybersecurity [cite: 52]
  { name: 'Remote', value: 53, fill: '#27ae60' },  // MODIFIED: 53% for cybersecurity [cite: 51]
];

// Chart 2: Compensation Comparison
const dataChart2 = [
  { name: 'Cybersecurity', value: 152700, fill: '#e74c3c' },
  { name: 'IT Security + DevSecOps', value: 160800, fill: '#3498db' },
  { name: 'Observability', value: 165400, fill: '#27ae60' },
];

// Chart 3: Equity Offerings
const dataChart3 = [
  { name: 'Cybersecurity (4%)', value: 4, fill: '#e74c3c' },
  { name: 'IT Security (10%)', value: 10, fill: '#3498db' },
  { name: 'Observability (15%)', value: 15, fill: '#27ae60' },
];

// Chart 4: Benefits Focus
const dataChart4 = [
  { name: 'Mental Health/Wellness', value: 10, fill: '#e74c3c' },
  { name: 'Professional Development', value: 56, fill: '#f39c12' },
  { name: 'Financial Benefits', value: 62, fill: '#3498db' },
  { name: 'Health Insurance', value: 70, fill: '#27ae60' },
];

// Chart 5: AI Requirements by Level
const dataChart5 = [
  { name: 'All Roles', value: 52, fill: '#34495e' },
  { name: 'Non-Mgmt', value: 52, fill: '#3498db' },
  { name: 'Supervisor', value: 55, fill: '#9b59b6' },
  { name: 'Manager', value: 48, fill: '#e67e22' },
  { name: 'Director+', value: 0, fill: '#e74c3c' },
];

// Chart 6: Job Duration by Location
const dataChart6 = [
  { name: 'Remote', value: 5, fill: '#27ae60' },
  { name: 'Hybrid', value: 5, fill: '#f39c12' },
  { name: 'On-site', value: 14, fill: '#e74c3c' },
];


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/*
        For Create React App, it's best practice to put these <script> and <link> tags
        in the <head> of your `public/index.html` file.
      */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }`}</style>

      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">2025 Enterprise Cybersecurity Talent Index</h1>
          <p className="text-lg text-gray-600">Supplemental charts and data visualizations</p>
        </div>

        {/* Chart 1: Remote Work Application Volume - MODIFIED FOR CYBERSECURITY AND SENTENCE CASE */}
        <div className="mb-12 py-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Remote roles attract significantly more applicants in cybersecurity</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Percentage of cybersecurity roles receiving 100+ applications by work location</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataChart1} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 60]} tickFormatter={(tick) => `${tick}%`} /> {/* MODIFIED: Max changed to 60 */}
              <Tooltip formatter={(value) => [`${value}%`, 'With 100+ Applicants']} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dataChart1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h4 className="font-semibold text-blue-700">Key insight</h4>
            <p className="text-sm text-blue-600">Remote work accounted for only 8% of open cybersecurity roles. Despite this, 53% of remote cybersecurity roles attracted 100+ applicants, compared to only 11% of on-site roles and 15% of hybrid roles.</p>
          </div>
        </div>

        {/* Chart 2: Compensation Comparison - SENTENCE CASE */}
        <div className="mb-12 py-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Cybersecurity roles offer lower compensation</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Average annual salary by role type (Fortune 100 companies)</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataChart2} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis domain={[145000, 170000]} tickFormatter={(tick) => `$${tick/1000}K`} width={80} />
              <Tooltip formatter={(value) => [`$${(value/1000).toFixed(1)}K`, 'Average salary']} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dataChart2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h4 className="font-semibold text-blue-700">Key insight</h4>
            <p className="text-sm text-blue-600">Cybersecurity roles pay $12,700 less than observability positions on average, potentially driving talent toward adjacent fields with similar skill requirements.</p>
          </div>
        </div>

        {/* Chart 3: Equity Offerings - SENTENCE CASE */}
        <div className="mb-12 py-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Cybersecurity roles rarely offer equity</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Percentage of job postings mentioning equity compensation</p>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={dataChart3}
                cx="50%"
                cy="50%"
                outerRadius={110}
                dataKey="value"
                nameKey="name"
              >
                {dataChart3.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} stroke="#fff" strokeWidth={2}/>
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [value, name.replace(/\s*\([^)]*\)/, '')]}/>
              <Legend wrapperStyle={{ marginTop: "20px" }}/>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h4 className="font-semibold text-blue-700">Key insight</h4>
            <p className="text-sm text-blue-600">Only 4% of cybersecurity roles mention equity, compared to 15% for observability positions - nearly 4x less likely to offer long-term financial incentives.</p>
          </div>
        </div>

        {/* Chart 4: Benefits Focus - SENTENCE CASE */}
        <div className="mb-12 py-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Mental health support severely underrepresented</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Benefit mentions in cybersecurity job descriptions</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataChart4} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 80]} tickFormatter={(tick) => `${tick}%`} />
              <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }}/>
              <Tooltip formatter={(value) => [`${value}%`, '% of job postings']} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {dataChart4.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h4 className="font-semibold text-blue-700">Key insight</h4>
            <p className="text-sm text-blue-600">Despite widespread burnout in cybersecurity, only 10% of job postings mention mental health support - far below health insurance (70%) and financial benefits (62%).</p>
          </div>
        </div>

        {/* Chart 5: AI Requirements by Level - SENTENCE CASE */}
        <div className="mb-12 py-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Senior leadership lacks AI strategy requirements</h2>
          <p className="text-sm text-gray-500 text-center mb-4">AI experience requirements by organizational level</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataChart5} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
              <YAxis domain={[0, 60]} tickFormatter={(tick) => `${tick}%`} />
              <Tooltip formatter={(value) => [`${value}%`, '% requiring AI experience']} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dataChart5.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h4 className="font-semibold text-blue-700">Key insight</h4>
            <p className="text-sm text-blue-600">While 52% of all IT security roles require AI knowledge, 0% of Senior Director+ positions do, creating a strategic gap in AI leadership.</p>
          </div>
        </div>

        {/* Chart 6: Job Duration by Location - SENTENCE CASE */}
        <div className="py-6">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Remote and hybrid roles fill faster</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Percentage of roles remaining open for over one month</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataChart6} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 16]} tickFormatter={(tick) => `${tick}%`} />
              <Tooltip formatter={(value) => [`${value}%`, '% open >1 month']} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dataChart6.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
            <h4 className="font-semibold text-blue-700">Key insight</h4>
            <p className="text-sm text-blue-600">On-site positions take nearly 3x longer to fill than remote/hybrid roles, indicating stronger candidate interest in flexible work arrangements.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;