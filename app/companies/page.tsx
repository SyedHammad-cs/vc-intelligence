import companies from "../../data/companies.json";
import Link from "next/link";

export default function CompaniesPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Companies</h1>

      <div className="grid gap-4">
        {companies.map((company) => (
          <Link key={company.id} href={`/companies/${company.id}`}>
            <div className="border p-5 rounded-lg hover:bg-gray-100 cursor-pointer">
              <h2 className="text-xl font-semibold">{company.name}</h2>

              <p className="text-gray-600">{company.industry}</p>

              <p className="text-blue-600 text-sm">{company.website}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
