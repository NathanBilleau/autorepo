import { useState, VFC } from 'react'

import Title from '~/components/title'
import Button from '~/components/button'
import RepositoryCard from '~/components/repositoryCard'
import Popup from '~/components/popup'
import Field from '~/components/field'

const Repositories: VFC = () => {

    const [addingPopup, setAddingPopup] = useState({
        isVisible: false,
    })

    const addRepository = () => { }
    const toggleAddingPopup = () => {
        setAddingPopup({
            ...addingPopup,
            isVisible: !addingPopup.isVisible
        })
    }

    const clean = () => {}
    return (
        <>
            <Title text="Repositories" />
            <div className="actionsContainer">
                <Button color='primary' onClick={toggleAddingPopup} text='add a repository' shortcut='cmd + v' />
                <Button color='secondary' onClick={clean} text='clean' disabled shortcut='cmd + shift + k' />
            </div>
            <div className="repositoriesContainer">
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
                <RepositoryCard id={123} name='asali-server' status='running' url='https://github.com/nathanbilleau/asali-server' branch='main' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' uptime={120} />
            </div>
            {
                addingPopup.isVisible && (
                    <Popup onSubmit={addRepository} onCancel={toggleAddingPopup}>
                        <Field erase={() => {}} onChange={() => {}} placeholder='repository url' icon={['fab', 'github']} />
                    </Popup>
                )
            }
        </>
    )
}

export default Repositories