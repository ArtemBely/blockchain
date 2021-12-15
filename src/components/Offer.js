import React from 'react';
import loope from '../../public/images/Ellipse 40.svg';


class Offer extends React.Component {

  constructor( props )
  {
    super( props );

    console.log( 'constructor offer' );

    this.applForP = React.createRef();
    this.receiveForP = React.createRef();
  }

  componentDidMount()
  {
    console.log( 'componentDidMount offer' );
    console.log( 'this.props' );
    console.log( this.props );
  }

  changeStatusOfReceive = () => {
    this.receiveForP.current.classList.toggle('receiveForPColor');
  }

  changeStatusOfApply = () => {
    this.applForP.current.classList.toggle('receiveForPColor2');
  }

  render ()
  {
    return (
      <div className='wrap_eachVac'>
        {this.props.eachVacancie()}

        <div className='wrap_searchPositions'>
          <div className='searchPositions'>
            <form onChange={ ( event ) => this.props.handleChange( event ) } method='POST' id='searchForm'>
              <input type='text' className='searchVacs' required placeholder='Position'/>
              <input type='text' className='searchVacs' required placeholder='Region'/>
              <input type='text' className='searchVacs' required placeholder='Work experience'/>
              <input type='text' className='searchVacs' required placeholder='Starting salary'/>
              <input type='text' className='searchVacs' required placeholder='Requirements'/>
              <p className='applForP' ref={this.applForP} onClick={this.changeStatusOfApply}><input type='checkbox' id='applFor' className='searchVacsCheck'/></p>
              <label htmlFor='applFor' className='lblsFor' id='applFor2'>Apply for internship</label>
              <p className='receiveForP' ref={this.receiveForP} onClick={this.changeStatusOfReceive}><input type='checkbox' id='receiveList' className='searchVacsCheck'/></p>
              <label htmlFor='receiveList' className='lblsFor' id='receiveList2'>Receive list of job opportunities</label>
              <button onClick={ () => this.props.applyFilters() } type='button' id='req_but2'>Request</button>
              <p onClick={ () => this.props.resetFilters() } id='resFil'>Reset filters </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer;