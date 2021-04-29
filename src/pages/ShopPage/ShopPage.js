import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

function ShopPage({match}) {

    return (

        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;