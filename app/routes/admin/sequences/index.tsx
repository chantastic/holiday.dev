import { Link, useLoaderData } from "remix";

export const loader = () => {
  return fetch(
    `https://api.convertkit.com/v3/sequences?api_key=${CONVERTKIT_API_KEY}`
  );
};

type Course = {
  id: number;
  name: string;
  hold: boolean;
  repeat: boolean;
  created_at: string;
};

type Sequences = {
  courses: Course[];
};

export default function Index() {
  let sequences: Sequences = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <Link to="/admin">Admin</Link>: Sequences
      </h1>
      <ul>
        {sequences.courses.map((sequence: Course) => (
          <li key={sequence.id} id={sequence.id.toString()}>
            <a href={`/admin/sequences/${sequence.id}`}>{sequence.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
