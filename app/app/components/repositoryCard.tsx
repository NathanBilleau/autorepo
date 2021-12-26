import { VFC } from 'react'

import Button from '~/components/button'
import Info from '~/components/info'

interface RepositoryCardProps {
    id: number
    name: string
    url: string
    description?: string
    status: 'updating' | 'running' | 'stopped'
    branch?: string
    uptime?: number
}

const RepositoryCard: VFC<RepositoryCardProps> = ({ id, name, url, description, status, branch, uptime }) => {

    const manageRepository = () => { }

    return (
        <div className='repositoryCardContainer'>
            <h3 className='repositoryCardName'>
                {name}
                <span className='repositoryCardStatus'></span>
            </h3>
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
                    <Info icon='memory' text='memoire' />
                </div>
                <Button text='manage' color='primary' onClick={manageRepository} disabled={status === 'updating'} />
            </div>
        </div>
    )
}

export default RepositoryCard