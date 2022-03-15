import React from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collectionPreview/collectionPreview';

import { selectCollections } from '../../redux/shop/shopSelector';

import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
    console.log(collections);
    return(
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);