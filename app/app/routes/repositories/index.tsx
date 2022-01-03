import { VFC } from 'react'

import Title from '~/components/title'
import Button from '~/components/button'
import RepositoryCard from '~/components/repositoryCard'

const Repositories: VFC = () => {

    const addRepository = () => { }

    return (
        <>
            <Title text="Repositories" />
            <div className="actionsContainer">
                <Button color='primary' onClick={addRepository} text='add a repository' shortcut='cmd + v' />
                <Button color='secondary' onClick={addRepository} text='clean' disabled shortcut='cmd + shift + k' />
            </div>
            <div className="repositoriesContainer">
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
            </div>
        </>
    )
}

export default Repositories