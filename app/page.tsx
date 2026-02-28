import Link from "next/link"

export default function Home() {

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        VC Intelligence Interface
      </h1>

      <Link href="/companies">

        <button className="mt-4
            bg-blue-600
            text-white
            px-5 py-2
            rounded-lg
            hover:bg-blue-700
            transition
            ">
          View Companies
        </button>

      </Link>

    </div>

  )

}