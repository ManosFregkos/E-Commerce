import React from 'react';
import {connect} from 'react-redux';
import PreviewCollection from '../preview-collection/preview-collection.component'
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors.js'
import './collections.overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
                        {
                //mesa sto otherProps exw to id, title , imageUrl kai items ta opoia parexw sto previewCollection
                        collections.map(({id, ...otherCollectionProps}) => (
                            <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);