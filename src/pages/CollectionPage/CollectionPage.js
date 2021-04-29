import React from 'react';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { useSelector } from 'react-redux'

import './CollectionPage.scss';



function CollectionPage({ match }) {

 
    const collections = useSelector(state => state.shop.collections[match.params.categoryId] )
    
    const { title, items } = collections;
    
    return (
        <div className='collection-page'>
           <h2 className='title' >{title}</h2>
           <div className='items'>
               {
                   items.map(item => (
                       <CollectionItem key={item.id} item={item} />
                   ))
               }
            </div> 
        </div>
    );
}

export default CollectionPage;