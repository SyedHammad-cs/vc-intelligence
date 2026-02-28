import companies from "../../../data/companies.json";
import EnrichButton from "../../../components/EnrichButton";

export default async function CompanyProfile({ params }: any) {
  const { id } = await params;

  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <div className="p-10 text-red-600 font-semibold">Company not found</div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h1 className="text-3xl font-bold mb-4">{company.name}</h1>

        <div className="space-y-3">
          <div>
            <span className="text-gray-500">Industry</span>
            <p className="font-semibold">{company.industry}</p>
          </div>

          <div>
            <span className="text-gray-500">Website</span>
            <p>
              <a
                href={company.website}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {company.website}
              </a>
            </p>
          </div>
        </div>

        <EnrichButton website={company.website} />
      </div>
    </div>
  );
}
