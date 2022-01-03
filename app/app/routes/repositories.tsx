import { useLoaderData, useNavigate, Outlet,  LinksFunction } from "remix"
import db from '~/utils/db.server'

import respositoriesStyle from '~/styles/repositories.css'

import Button from "~/components/button"

// export const loader = () => {
//   const repositories = db.repository.findMany()
//   return repositories
// } 

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: respositoriesStyle,
    }
  ]
}

export default function Repositories() {
  const navigate = useNavigate()
  // const repositories = useLoaderData()

  const logout = () => {
    navigate('/')
  }

  return (
    <div>
      <header className="headerContainer">
        <div className="userContainer">
          <img src="https://avatars.githubusercontent.com/u/18512499?v=4" alt="nathan" className="userImage" />
          <div className="userInfo">
            <p>Hey, nathan</p>
            <a href="https://github.com/nathanbilleau" target="_blank" rel="noreferrer noopener" className="userLink">
              https://github.com/nathanbilleau
            </a>
          </div>
        </div>

        <Button text="logout" color="red" onClick={logout} />
      </header>
      <Outlet />
    </div>
  );
}
