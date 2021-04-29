import React from 'react';
import MenuItem from "../MenuItem/MenuItem";

import { useSelector } from 'react-redux'

import './Directory.scss';

function Directory(props) {

    const sections = useSelector(state => state.directory.sections)

    return (
        <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionProps }) => {
                    return (
                        <MenuItem key={id}  {...otherSectionProps}/>
                    )
                    
                })
            }
        </div>
    );
}

export default Directory;