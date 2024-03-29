import React from 'react';
import { NavLink } from 'react-router-dom';
import table from '../../public/images/Group 167.png';
import table2 from '../../public/images/Group 181.png';
import table3 from '../../public/images/Rectangle 177.png';
import tableMobile from '../../public/images/Group 238.png';

function Table1() {
    return (
      <div className='table1'>
        <img src={tableMobile} id='table_mobile' />
          <img src={table} id='table_1'/>
            <img src={table2} id='table_2'/>
             <img src={table3} id='table_3'/>
		         <div className='table_glass'></div>
             <NavLink to='/database' id='full_database'>Full database</NavLink>
            <NavLink to='/database/showpopup' id='register'>Register a company</NavLink>
		      <p className='table_text'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
      </div>
    )
}

export default Table1;
