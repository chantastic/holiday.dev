import { Link, useLoaderData } from "remix";

export const loader = () => {
  return fetch(
    `https://api.convertkit.com/v3/tags?api_key=${CONVERTKIT_API_KEY}`
  );
};

type Tag = {
  id: number;
  name: string;
  created_at: string;
};

type Tags = {
  forms: Tag[];
};

export default function Index() {
  let tags: Tags = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <Link to="/admin">Admin</Link>: Tags
      </h1>
      <ul>
        {tags.tags.map((tag: Tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
}
