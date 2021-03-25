import React from 'react';
import { NavLink } from 'react-router-dom';
import table from '../../public/images/Group 167.png';


function Table1() {
    return (
      <div className='table1'>
        <img src={table} id='table_1'/>
		        <div className='table_glass'></div>
             <NavLink to='#' id='full_database'>Full database</NavLink>
            <NavLink to='#' id='register'>Register a company</NavLink>
		      <p className='table_text'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
      </div>
    )
}

export default Table1;
