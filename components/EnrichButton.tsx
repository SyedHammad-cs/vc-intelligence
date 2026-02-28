"use client"

import { useState } from "react"

export default function EnrichButton({ website }: { website: string }) {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState("")

  async function handleEnrich() {

    setLoading(true)
    setError("")

    try {

      const res = await fetch("/api/enrich", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          website
        })

      })

      const result = await res.json()

      setData(result)

    } catch (err) {

      setError("Failed to enrich")

    }

    setLoading(false)

  }

  return (

    <div className="mt-6">

      <button
        onClick={handleEnrich}
        className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
      >

        {loading ? "Enriching..." : "Enrich"}

      </button>

      {error && (
        <p className="text-red-500 mt-3">
          {error}
        </p>
      )}

      {data && (

        <div className="mt-6 border p-4 rounded">

          <h3 className="font-bold text-lg mb-2">
            Summary
          </h3>

          <p>{data.summary}</p>

          <h3 className="font-bold mt-4">
            Keywords
          </h3>

          <p>{data.keywords?.join(", ")}</p>

          <h3 className="font-bold mt-4">
            Source
          </h3>

          <p className="text-blue-600">
            {data.source}
          </p>

        </div>

      )}

    </div>

  )

}