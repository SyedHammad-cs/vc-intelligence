"use client";

import { useState } from "react";

interface EnrichResult {
  summary: string;
  keywords: string[];
  source: string;
  timestamp: string;
}

export default function EnrichButton({ website }: { website: string }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<EnrichResult | null>(null);
  const [error, setError] = useState("");

  async function handleEnrich() {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch("/api/enrich", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ website }),
      });

      if (!res.ok) {
        throw new Error("Enrichment failed");
      }

      const result = await res.json();

      setData(result);
    } catch (err) {
      setError("Failed to enrich company. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="mt-6">
      {/* Enrich Button */}
      <button
        onClick={handleEnrich}
        disabled={loading}
        className="
            mt-4
            bg-blue-600
            text-white
            px-5 py-2
            rounded-lg
            hover:bg-blue-700
            transition
          "
      >
        {loading ? "Enriching..." : "Enrich Company"}
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Result Card */}
      {data && (
        <div
          className="
          mt-6
          bg-white
          p-6
          rounded-xl
          border
          shadow-sm
        "
        >
          {/* Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p className="text-gray-700">{data.summary}</p>
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Keywords</h3>

            <div className="flex flex-wrap gap-2">
              {data.keywords?.map((keyword, index) => (
                <span
                  key={index}
                  className="
                    bg-blue-100
                    text-blue-700
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Metadata */}
          <div className="text-sm text-gray-500 border-t pt-4">
            <p>
              <span className="font-medium">Source:</span>{" "}
              <a
                href={data.source}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {data.source}
              </a>
            </p>

            <p className="mt-1">
              <span className="font-medium">Enriched at:</span>{" "}
              {new Date(data.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
