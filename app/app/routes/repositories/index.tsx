import { useLoaderData, useNavigate } from "remix"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import db from '~/utils/db.server'

import Title from '~/components/title'
import Button from "~/components/button"
import Info from "~/components/info"
import Field from "~/components/field"
import SectionTitle from "~/components/sectionTitle"
import RepositoryCard from "~/components/repositoryCard"

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
      <Button text="auto pull" toggle color="secondary" onClick={cleanRepositories} />
      <Info icon={"memory"} text="memoire" />
      <SectionTitle text="commands" />
      <Field onChange={() => {}} placeholder="domain name" defaultValue="ok" icon={"globe"} erase={() => {}} label="Domain name" />
      <RepositoryCard
        id={1}
        name={'repository name'}
        url={'https://github.com/remix-js/remix'}
        description={'description'}
        status={'running'}
        branch={'master'}
        uptime={120}
      />
    </div>
  );
}
