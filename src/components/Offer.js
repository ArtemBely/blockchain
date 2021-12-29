import React from 'react';
import loope from '../../public/images/Ellipse 40.svg';
import _close from '../../public/images/Union.svg';


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
            <form className={ !this.props.cardVacancy.showed ? '' : 'hidden' } onChange={ ( event ) => this.props.handleChange( event ) } method='POST' id='searchForm'>
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

            <div className={ this.props.cardVacancy.showed ? 'card-of-vacancy_wrapper' : 'hidden' }>
              <div className='card-of-vacancy'>
                <div className='titel js-titel'>
                  { this.props.cardVacancy.titel }
                </div>
                
                <div className='section1'>
                  <div className='item'>
                    <div className='unter-titel'>
                      Company
                    </div>

                    <div className='unter-titel-wert js-company'>
                      { this.props.cardVacancy.company }
                    </div>
                  </div>

                  <div className='item'>
                    <div className='unter-titel'>
                      Location
                    </div>

                    <div className='unter-titel-wert js-location'>
                      { this.props.cardVacancy.location }
                    </div>
                  </div>

                  <div className='item'>
                    <div className='unter-titel'>
                      Direction
                    </div>

                    <div className='unter-titel-wert js-direction'>
                      { this.props.cardVacancy.direction }
                    </div>
                  </div>

                  <div className='item'>
                    <div className='unter-titel'>
                      Experience
                    </div>

                    <div className='unter-titel-wert js-experience'>
                      { this.props.cardVacancy.experience }
                    </div>
                  </div>

                  <div className='item'>
                    <div className='unter-titel'>
                      Salary
                    </div>

                    <div className='unter-titel-wert js-salary'>
                      { this.props.cardVacancy.salary }
                    </div>
                  </div>
                </div>

                <div className='section2'>
                  <div className='unter-titel'>
                    Tasks
                  </div>

                  <div className='unter-titel-wert js-tasks'>
                    { this.props.cardVacancy.tasks }
                  </div>
                </div>

                <div className='section3'>
                  <div className='unter-titel'>
                    Requirements
                  </div>

                  <div className='unter-titel-wert js-requirements'>
                    { this.props.cardVacancy.requirements }
                  </div>
                </div>

                <button type='submit' className='btn'>
                  Apply for job
                </button>
              </div>
              <span className='close-card' onClick={ this.props.hiddenVacancyCard }><img src={_close} /></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Offer;