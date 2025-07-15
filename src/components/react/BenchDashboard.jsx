import React from "react";
import {
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const JSONSchemaBenchDashboard = () => {
  // Efficiency data
  const efficiencyData = [
    {
      name: "Kubernetes",
      "LLM only": 16,
      Guidance: 9,
      XGrammar: 65,
      Llamacpp: 28,
      Outlines: 46,
    },
    {
      name: "Washington Post",
      "LLM only": 17,
      Guidance: 10,
      XGrammar: 66,
      Llamacpp: 29,
      Outlines: 48,
    },
    {
      name: "GitHub Easy",
      "LLM only": 16,
      Guidance: 7,
      XGrammar: 66,
      Llamacpp: 27,
      Outlines: 40,
    },
  ];

  // Coverage data
  const coverageData = [
    {
      subject: "GitHub Easy",
      "LLM only": 65,
      Guidance: 86,
      XGrammar: 79,
      Llamacpp: 75,
      Outlines: 59,
    },
    {
      subject: "Washington Post",
      "LLM only": 40,
      Guidance: 86,
      XGrammar: 64,
      Llamacpp: 94,
      Outlines: 22,
    },
    {
      subject: "GitHub Hard",
      "LLM only": 13,
      Guidance: 41,
      XGrammar: 28,
      Llamacpp: 39,
      Outlines: 3,
    },
    {
      subject: "Kubernetes",
      "LLM only": 56,
      Guidance: 91,
      XGrammar: 7,
      Llamacpp: 76,
      Outlines: 57,
    },
  ];

  // Quality data
  const qualityData = [
    {
      name: "Last Letters",
      "LLM only": 50.7,
      Guidance: 54.0,
      XGrammar: 51.2,
      Llamacpp: 52.0,
      Outlines: 53.3,
    },
    {
      name: "Shuffle Objects",
      "LLM only": 52.6,
      Guidance: 55.9,
      XGrammar: 52.7,
      Llamacpp: 52.6,
      Outlines: 53.0,
    },
    {
      name: "GSM8K",
      "LLM only": 80.1,
      Guidance: 83.8,
      XGrammar: 83.7,
      Llamacpp: 82.4,
      Outlines: 81.6,
    },
  ];

  // Colors for frameworks - Original colors with adjusted opacity
  const colorMap = {
    "LLM only": "#94a3b8",
    Guidance: "url(#guidanceGradient)", // Will use gradient defined in the chart
    XGrammar: "#f472b6",
    Llamacpp: "#fb923c",
    Outlines: "#34d399",
  };

  // Opacity for non-Guidance frameworks
  const opacityMap = {
    "LLM only": 0.5,
    Guidance: 1,
    XGrammar: 0.5,
    Llamacpp: 0.5,
    Outlines: 0.5,
  };

  const frameworkOrder = [
    "LLM only",
    "Guidance",
    "XGrammar",
    "Llamacpp",
    "Outlines",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      {/* Background gradient */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-md py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-bold text-blue-400">
              JSONSchemaBench
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
              A comprehensive benchmark for evaluating structured output
              generation in Large Language Models. This benchmark tests 6
              state-of-the-art constrained decoding frameworks across 10K
              real-world JSON schemas.
            </p>

            <div className="flex flex-wrap gap-3 my-4">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-900/50 text-blue-300 border border-blue-800">
                10K Schemas
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-900/50 text-purple-300 border border-purple-800">
                6 Frameworks
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-800">
                3 Dimensions
              </span>
              <a
                href="https://github.com/guidance-ai/jsonschemabench"
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors border border-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                GitHub
              </a>
            </div>

            <a
              href="https://arxiv.org/abs/2501.10868"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors mt-2 max-w-max"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span className="font-medium">Read Full Paper</span>
            </a>
          </div>
        </div>
      </header>

      {/* See Guidance in Action Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-4 text-gray-200">
            See Guidance in Action
          </h2>
          <p className="text-center text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore how Guidance AI outperforms other LLM control tools in
            accuracy, efficiency, and output guarantees.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-52 text-center">
              <div className="text-xl font-bold text-gray-200 mb-1">
                Accuracy ↑
              </div>
              <div className="text-gray-400 text-sm">JSON task:</div>
              <div className="text-lg font-bold text-blue-400">97.3%</div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-52 text-center">
              <div className="text-xl font-bold text-gray-200 mb-1">Cost ↓</div>
              <div className="text-gray-400 text-sm">Tokens used</div>
              <div className="text-lg font-bold text-green-400">
                reduced by 45%
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-52 text-center">
              <div className="text-xl font-bold text-gray-200 mb-1">
                Speed ↑
              </div>
              <div className="text-gray-400 text-sm">Structured tasks:</div>
              <div className="text-lg font-bold text-purple-400">
                2.3x faster
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 w-52 text-center">
              <div className="text-xl font-bold text-gray-200 mb-1">
                Control Fidelity ↑
              </div>
              <div className="text-gray-400 text-sm">Regex/CFG</div>
              <div className="text-lg font-bold text-indigo-400">
                success rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-200">
            Benchmark Results
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Efficiency */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-800 to-blue-700 flex items-center justify-center text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Efficiency
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Constrained decoding speeds up generation by 50% over
                unconstrained approaches.
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={efficiencyData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.3}
                    />
                    <XAxis dataKey="name" tick={{ fill: "#9ca3af" }} />
                    <YAxis
                      label={{
                        value: "ms/token",
                        angle: -90,
                        position: "insideLeft",
                        fill: "#9ca3af",
                      }}
                      tick={{ fill: "#9ca3af" }}
                    />
                    <Tooltip
                      cursor={{ fill: "#1F2E4F" }}
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.9)",
                        borderColor: "#4b5563",
                        color: "#e5e7eb",
                      }}
                    />
                    <Legend
                      wrapperStyle={{ color: "#9ca3af" }}
                      formatter={(value) => {
                        return (
                          <span
                            style={{
                              color:
                                value === "Guidance" ? "#8b5cf6" : "#9ca3af",
                              fontWeight:
                                value === "Guidance" ? "bold" : "normal",
                            }}
                          >
                            {value}
                          </span>
                        );
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="guidanceGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    {frameworkOrder.map((framework) => (
                      <Bar
                        key={framework}
                        dataKey={framework}
                        fill={colorMap[framework]}
                        fillOpacity={opacityMap[framework]}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Coverage */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-800 to-indigo-700 flex items-center justify-center text-indigo-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                  Coverage
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Guidance supports twice as many schemas as lower-performing
                frameworks.
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={coverageData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                    />
                    <PolarRadiusAxis tick={{ fill: "#9ca3af", fontSize: 10 }} />
                    <defs>
                      <linearGradient
                        id="guidanceRadarGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    {frameworkOrder.map((framework) => (
                      <Radar
                        key={framework}
                        name={framework}
                        dataKey={framework}
                        stroke={
                          framework === "Guidance"
                            ? "#8b5cf6"
                            : colorMap[framework]
                        }
                        fill={
                          framework === "Guidance"
                            ? "url(#guidanceRadarGradient)"
                            : colorMap[framework]
                        }
                        fillOpacity={framework === "Guidance" ? 0.6 : 0.2}
                        strokeWidth={framework === "Guidance" ? 2 : 1}
                      />
                    ))}
                    <Legend
                      wrapperStyle={{ fontSize: "12px", color: "#9ca3af" }}
                      formatter={(value) => {
                        return (
                          <span
                            style={{
                              color:
                                value === "Guidance" ? "#8b5cf6" : "#9ca3af",
                              fontWeight:
                                value === "Guidance" ? "bold" : "normal",
                            }}
                          >
                            {value}
                          </span>
                        );
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.9)",
                        borderColor: "#4b5563",
                        color: "#e5e7eb",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quality */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 shadow-md p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-800 to-purple-700 flex items-center justify-center text-purple-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  Quality
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Up to 4% improvement in task performance, even with minimal
                structure.
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={qualityData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.3}
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                    />
                    <YAxis
                      domain={[40, 90]}
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                    />
                    <Tooltip
                      cursor={{ fill: "#1F2E4F" }}
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.9)",
                        borderColor: "#4b5563",
                        color: "#e5e7eb",
                      }}
                    />
                    <Legend
                      wrapperStyle={{ fontSize: "12px", color: "#9ca3af" }}
                      formatter={(value) => {
                        return (
                          <span
                            style={{
                              color:
                                value === "Guidance" ? "#8b5cf6" : "#9ca3af",
                              fontWeight:
                                value === "Guidance" ? "bold" : "normal",
                            }}
                          >
                            {value}
                          </span>
                        );
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="guidanceQualityGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    {frameworkOrder.map((framework) => (
                      <Bar
                        key={framework}
                        dataKey={framework}
                        fill={
                          framework === "Guidance"
                            ? "url(#guidanceQualityGradient)"
                            : colorMap[framework]
                        }
                        fillOpacity={opacityMap[framework]}
                        strokeWidth={framework === "Guidance" ? 1 : 0}
                        stroke={framework === "Guidance" ? "#8b5cf6" : "none"}
                      />
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/50">
            <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Key Takeaways
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">
                  Guidance outperforms other frameworks across efficiency,
                  coverage, and quality.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">
                  Constrained decoding accelerates generation while providing
                  output guarantees.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">
                  Different frameworks have different failure modes, but
                  Guidance provides the strongest guarantees.
                </span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-800/50">
              <div className="flex items-center text-sm text-gray-400">
                <div className="bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm font-medium mr-3 border border-blue-800/70">
                  Try it yourself
                </div>
                <code className="font-mono text-sm bg-gray-900/70 px-3 py-1 rounded border border-gray-800">
                  pip install guidance
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          <p>
            JSONSchemaBench: A Comprehensive Benchmark for Structured Outputs in
            LLMs
          </p>
          <p className="mt-2">Created by the Guidance AI team</p>
        </div>
      </footer>
    </div>
  );
};

export default JSONSchemaBenchDashboard;
