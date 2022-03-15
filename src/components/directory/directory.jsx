import React from 'react'
import MenuItem from '../menuItem/menuItem'
import './directory.scss'
import { selectDirectorySections } from '../../redux/directory/directorySelector'

import { connect } from 'react-redux'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps} ) => (
      <MenuItem key={id} {...otherSectionProps} /> 
  ))}
  </div>
)

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory)