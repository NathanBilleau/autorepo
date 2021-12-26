import { VFC } from 'react'

interface SectionTitleProps {
    text: string
}

const SectionTitle: VFC<SectionTitleProps> = ({ text }) => {
    return (
        <div className='sectionTitleContainer'>
            <h2 className='sectionTitle'>
                {text}
            </h2>
        </div>
    )
}

export default SectionTitle