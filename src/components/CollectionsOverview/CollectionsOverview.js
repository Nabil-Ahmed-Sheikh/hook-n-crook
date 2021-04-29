import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import "./CollectionsOverview.scss";

function CollectionsOverview(props) {

    const collections = useSelector(state => Object.keys(state.shop.collections).map(key=> state.shop.collections[key]) );


    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );
}

export default CollectionsOverview;

