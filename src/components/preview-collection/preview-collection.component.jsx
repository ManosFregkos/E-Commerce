import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

//pernw ta props apo to shopComponent mesa ston items array exw id , name , url kai price
const PreviewCollection = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()} </h1>
            <div className="preview">
                {
                    items
                        .filter((item,index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
    </div>
)

export default PreviewCollection;