import React from 'react'
import './homepage.scss'

import DirectoryMenu from '../../components/directory/directory'

function HomePage() {
  return (
    <div>
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    </div>
  )
}

export default HomePage