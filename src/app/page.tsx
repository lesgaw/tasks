import Link from "next/link";
import { tasksPath } from "../paths";

export default function HomePage() {
  return (
    <div>
      <h1>Tasks</h1>
      <p>Welcome to the Task application</p>
      <div>
        <Link href={tasksPath()} className="underline">View Tasks</Link>
      </div>
    </div>
  );
}
