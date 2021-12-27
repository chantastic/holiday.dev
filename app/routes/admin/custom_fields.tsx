import { Link, useLoaderData } from "remix";

export const loader = () => {
  return fetch(
    `https://api.convertkit.com/v3/custom_fields?api_key=${CONVERTKIT_API_KEY}`
  );
};

type CustomField = {
  id: number;
  name: string;
  key: string;
  label: string;
};

type CustomFields = {
  custom_fields: CustomField[];
};

export default function Index() {
  let customFields: CustomFields = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <Link to="/admin">Admin</Link>: Custom fields
      </h1>
      <ul>
        {customFields["custom_fields"].map((customField: CustomField) => (
          <li key={customField.id}>{customField.name}</li>
        ))}
      </ul>
    </div>
  );
}
