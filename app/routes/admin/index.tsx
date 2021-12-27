import { Link } from "remix";

export default function Index() {
  return (
    <div>
      <h1>Admin</h1>
      <ul>
        <li>
          <Link to="/admin/sequences">Sequences</Link>
        </li>
        <li>
          <Link to="/admin/forms">Forms</Link>
        </li>
        <li>
          <Link to="/admin/tags">Tags</Link>
        </li>
        <li>
          <Link to="/admin/custom_fields">Custom Fields</Link>
        </li>
      </ul>
    </div>
  );
}
