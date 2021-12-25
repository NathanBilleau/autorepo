import { useLoaderData, useNavigate } from "remix"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import db from '~/utils/db.server'

import Title from '~/components/title'
import Button from "~/components/button";

// export const loader = () => {
//   const repositories = db.repository.findMany()
//   return repositories
// } 

export default function Repositories () {
  // const repositories = useLoaderData()

  const addNewRepository = () => {
    console.log('addNewRepository')
  }

  const cleanRepositories = () => {
    console.log('cleanRepositories')
  }

  return (
    <div>
      <Title text='Repositories' />
      <Button text="add a new repository" shortcut="cmd + v" color="primary" onClick={addNewRepository} />
      <Button text="clean" shortcut="cmd + shift + k" color="secondary" disabled onClick={cleanRepositories} />
    </div>
  );
}
