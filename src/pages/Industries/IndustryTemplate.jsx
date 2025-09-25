import React from 'react';

export default function IndustryTemplate({ title, subtitle, description }) {
  return (
    <section className="py-16 min-h-screen relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        <header className="mb-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-white/80 leading-relaxed">
              {description || 'This industry page is scaffolded. Replace this content with tailored copy, case studies, and services relevant to this industry.'}
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-semibold text-white mb-4">Core Services</h2>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li>Discovery and strategy workshops</li>
              <li>Design and rapid prototyping</li>
              <li>Full-stack development and integrations</li>
              <li>SEO, analytics and optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


