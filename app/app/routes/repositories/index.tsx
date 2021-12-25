import { useLoaderData } from "remix"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import db from '~/utils/db.server'


export const loader = () => {
  const repositories = db.repository.findMany()
  return repositories
} 

export default function Repositories () {
  const repositories = useLoaderData()

  return (
    <div>
      <h1>Repositories</h1>
      <FontAwesomeIcon icon={'code-branch'} />
      <pre>
        {JSON.stringify(repositories, null, 2)}
      </pre>
    </div>
  );
}
