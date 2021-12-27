import { Link, useLoaderData } from "remix";

export const loader = () => {
  return fetch(
    `https://api.convertkit.com/v3/forms?api_key=${CONVERTKIT_API_KEY}`
  );
};

type Form = {
  id: number;
  name: string;
  created_at: string;
  type: string;
  url: string;
  embed_js: string;
  embed_url: string;
  title: string;
  description: string;
  sign_up_button_text: string;
  success_message: string;
};

type Forms = {
  forms: Form[];
};

export default function Index() {
  let forms: Forms = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <Link to="/admin">Admin</Link>: Forms
      </h1>
      <ul>
        {forms.forms.map((form: Form) => (
          <li key={form.id}>{form.name}</li>
        ))}
      </ul>
    </div>
  );
}
