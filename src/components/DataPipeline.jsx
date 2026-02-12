import React from "react";

export default function DataPipeline() {
  return (
    <section id="pipeline" className="py-16 px-5 relative">
      <h3 className="text-4xl font-bold mb-12 text-center text-green-600">Interactive Data Pipeline</h3>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
        {/* Raw Data */}
        <div className="pipeline-node animate-pulse">Raw Data</div>

        {/* Arrow */}
        <div className="pipeline-arrow hidden md:block"></div>

        {/* Processed */}
        <div className="pipeline-node animate-pulse">Processed</div>

        {/* Arrow */}
        <div className="pipeline-arrow hidden md:block"></div>

        {/* Dashboards */}
        <div className="pipeline-node animate-pulse">Dashboards</div>
      </div>
    </section>
  );
}
