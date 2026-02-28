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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{company.name}</h1>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Industry:</span> {company.industry}
        </p>

        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={company.website}
            target="_blank"
            className="text-blue-600 underline"
          >
            {company.website}
          </a>
        </p>
      </div>
      <EnrichButton website={company.website} />
    </div>
  );
}
