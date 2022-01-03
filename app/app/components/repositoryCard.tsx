import { VFC } from 'react'
import { useNavigate } from 'remix'

import Button from '~/components/button'
import Info from '~/components/info'
import Status from './status'

interface RepositoryCardProps {
    id: number
    name: string
    url: string
    description?: string
    status: 'updating' | 'running' | 'stopped'
    branch: string
    uptime: number
}

const RepositoryCard: VFC<RepositoryCardProps> = ({ id, name, url, description, status, branch, uptime }) => {

    const navigate = useNavigate()

    const manageRepository = () => {
        navigate(`/repositories/${id}`)
    }

    return (
        <div className='repositoryCardContainer'>
            <div className="textStatusContainer">
                <h3 className='repositoryCardName'>
                    {name}
                </h3>
                <Status status='running' />
            </div>
            <h4 className="repositoryCardUrl">
                <a href={url} target="_blank" rel='noreferrer noopener'>
                    {url}
                </a>
            </h4>
            <p className='repositoryCardDescription'>
                {description}
            </p>
            <div className='repositoryCardFooter'>
                <div className='repositoryCardFooterInfoContainer'>
                    <Info icon='code-branch' text={branch} />
                    <Info icon='clock' text={uptime.toString()} />
                </div>
                <Button text='manage' color='primary' onClick={manageRepository} disabled={status === 'updating'} />
            </div>
        </div>
    )
}

export default RepositoryCard