import Link from "next/link"

export default function Home() {

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        VC Intelligence Interface
      </h1>

      <Link href="/companies">

        <button className="bg-black text-white px-4 py-2 rounded">
          View Companies
        </button>

      </Link>

    </div>

  )

}