import React, {useState} from 'react';

import SHOP_DATA from './ShopData';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

function ShopPage(props) {

    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );
}

export default ShopPage;