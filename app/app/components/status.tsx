import React, { VFC } from 'react'

interface StatusProps {
    status: 'running' | 'stopped' | 'updating'
    size?: 'small' | 'large'
}

const Status: VFC<StatusProps> = ({ status, size = 'small' }) => (
    <div className={`status status-${size} status-${status}`} title={status}></div>
)

export default Status