import companies from "../../data/companies.json"
import Link from "next/link"

export default function CompaniesPage() {

  return (

    <div>

      <h1 className="text-2xl font-semibold mb-6">
        Companies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {companies.map(company => (

          <Link key={company.id} href={`/companies/${company.id}`}>

            <div className="
              card
              hover-card
              transition
              cursor-pointer
            ">

              <div className="font-semibold mb-1">
                {company.name}
              </div>

              <div className="text-sm text-slate-500 mb-3">
                {company.industry}
              </div>

              <div className="text-sm text-blue-600">
                View profile →
              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  )
}