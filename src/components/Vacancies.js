import React from 'react';
import Offer from './Offer';
import loope from '../../public/images/Ellipse 40.svg';
import arrow from '../../public/images/Vector 8.svg';
import close from '../../public/images/Vector (1) — копия 2.svg';
import _close from '../../public/images/Union.svg';
import _ from 'lodash';
import { getVacancies } from './fetchData';


class Vacancies extends React.Component {

  constructor ()
  {
    console.log( 'constructor' );

    super()

    let user;

    if( __isBrowser__ )
    {
      user = window.__INITIAL_USER__;
    }

    this.searchBar  = React.createRef();
    this.cl3        = React.createRef();
    this.cl2        = React.createRef();
    this.cl         = React.createRef();
    this.state      = {
      vacancies     : [],
      mergedVacs    : [],
      user,
      query         : '',
      filteredVacs  : [],
      filter        : [],
      greenFilter   : '',

      showed        : false,
      titel         : 'test titel',
      company       : 'test company',
      location      : 'test location',
      direction     : 'test direction',
      experience    : 'test experience',
      salary        : 'test salary',
      tasks         : 'test tasks',
      requirements  : 'test requirements',
    };

    this.sortBy = {
      column    : 'Industry',
      direction : true,
    };

    // für testen
    /*this.state      = {
      vacancies     : [
        [
          {
            direction     : "Head of Development Department",
            experience    : "Over 2 years",
            location      : "Zug, Switzerland",
            requirements  : "Quantizer GmbH",
            salary        : "€14000 +",
            tasks         : "IT",
            _id           : "617ee3d35b25fe0e05c043af",
          }
        ],

        [
          {
            direction     : "Systemintegration",
            experience    : "Over 5 years",
            location      : "Korbach, Deutschland",
            requirements  : "Continental AG",
            salary        : "€13500 +",
            tasks         : "IT",
            _id           : "617ee3d35b25fe0e05c043af",
          }
        ],

        [
          {
            direction     : "Anwendungsentwicklung",
            experience    : "Over 3 years",
            location      : "Saarbrücken, Deutschland",
            requirements  : "Software AG",
            salary        : "€11000 +",
            tasks         : "IT",
            _id           : "617ee3d35b25fe0e05c043af",
          }
        ],

        [
          {
            direction     : "Wirtschaftsinformatik",
            experience    : "Over 1 years",
            location      : "Köln, Deutschland",
            requirements  : "Telekom AG De",
            salary        : "€13000 +",
            tasks         : "IT",
            _id           : "617ee3d35b25fe0e05c043af",
          }
        ],
      ],
      mergedVacs    : [],
      user,
      query         : '',
      filteredVacs  : [],
      filter        : [],
      greenFilter   : '',

      showed        : false,
      titel         : 'test titel',
      company       : 'test company',
      location      : 'test location',
      direction     : 'test direction',
      experience    : 'test experience',
      salary        : 'test salary',
      tasks         : 'test tasks',
      requirements  : 'test requirements',
    };*/
  }

  componentDidMount ()
  {
    console.log( 'componentDidMount Vacancies' );

    getVacancies().then( vacancies => {
      console.log( 'vacancies' );
      console.log( vacancies );

      this.setState( { vacancies: vacancies } );

      var mergedVacs1 = [].concat.apply([], this.state.vacancies);

      this.setState({
        mergedVacs: mergedVacs1,
        filter: mergedVacs1,
      });
    } )
                  .catch( err => console.log( err ) );

    ////////////// für testen
    /*let mergedVacs1 = [].concat.apply([], this.state.vacancies);

    this.setState({
      mergedVacs: mergedVacs1,
      filter: mergedVacs1,
    });*/
    ////////////////

    console.log( 'this.state' );
    console.log( this.state );
  }

  searchBarChange = () => {
    this.searchBar.current.classList.toggle('receiveForPColor3');
  }

  closeModal = () => {
    this.cl.current.classList.contains('disp_change') ? this.cl.current.classList.remove('disp_change') : this.cl.current.classList.add('disp_change');
  }

  sortVacancies ( sortBy, id )
  {
    console.log( 'sortVacancies: ' + sortBy );
    console.log( 'id: ' + id );

    this.hiddenVacancyCard();

    if ( sortBy === this.sortBy.column )
    {
      this.sortBy.direction = !this.sortBy.direction;
    }
    else
    {
      this.sortBy.column    = sortBy;
      this.sortBy.direction = true;
    }

    console.log( 'col: ' + this.sortBy.column );
    console.log( 'dir: ' + this.sortBy.direction );

    this.sortierenList( this.sortBy.column, this.sortBy.direction );

    _.forEach(
      document.querySelectorAll( `.js-sortable` ),

      function( value ) {
        value.classList.remove( "sorted" );
      }
    );

    if ( this.sortBy.direction )
    {
      document.querySelector( `.js-sortable[data-id="${id}"]` ).classList.add( "sorted" );
    }
  }

  sortierenList = ( col, dir ) => {
    console.log( `sortierenList: ${col} ${dir}` );

    let richtung = dir ? 'asc' : 'desc';

    console.log( 'richtung: ' + richtung );

    let mergedVacs1 = _.orderBy( this.state.filter, [ col ], [ richtung ] );

    console.log( 'sorted mergedVacs1' );
    console.log( mergedVacs1 );

    this.setState(
      {
        mergedVacs  : mergedVacs1,
        filter      : mergedVacs1,
      }
    );
  }

  vacancyCard ( index )
  {
    console.log( 'vacancyCard' );
    console.log( 'index: ' + index );
    console.log( 'vacancy' );
    console.log( this.state.filter[ index ] );

    this.setState(() => {
      // Важно: используем `state` вместо `this.state` при обновлении.
      return {
        showed        : true,
        titel         : this.state.filter[ index ].direction,
        company       : this.state.filter[ index ].requirements,
        location      : this.state.filter[ index ].location,
        direction     : this.state.filter[ index ].tasks,
        experience    : this.state.filter[ index ].experience,
        salary        : this.state.filter[ index ].salary,
        tasks         : this.state.filter[ index ].tasks,
        requirements  : this.state.filter[ index ].requirements,
      }
    });

    //this.showVacancyCard()
  }

  hiddenVacancyCard = () => {
    //this.cl3.current.classList.contains('disp_change') ? this.cl3.current.classList.remove('disp_change') : this.cl3.current.classList.add('disp_change');

    this.setState(
      () => {
        return {
          showed  : false,
        }
      }
    );
  }

  eachVacancie = () => {
    console.log( 'eachVacancie from vac' );
    console.log( this.state );

    if( this.state.vacancies )
    {
      console.log( 'render list of vac' );

      console.log( 'this.state.filter' );
      console.log( this.state.filter );

      return(
        <div className='inside_vacs'>
          <div className='doubleInside_vacs'>
            {
              this.state.filter.map(
                ( comp, index, arr ) => (
                  <div className='commVacs' style={
                    {
                      borderRadius : index == 0 ? "20px 20px 0px 0px" : index == arr.length - 1 ? "0px 0px 20px 20px" : null
                    }
                  }>
                    <p className='eachVacs dir1'    data-index={ index } onClick={ () => this.vacancyCard( index ) }> {comp.direction}          </p>
                    <p className='eachVacs loc1'    data-index={ index } onClick={ ( e ) => { this.setGreenFilter( e ) } }> {comp.location}     </p>
                    <p className='eachVacs sal1'    data-index={ index } onClick={ ( e ) => { this.setGreenFilter( e ) } }> {comp.salary}       </p>
                    <p className='eachVacs requir1' data-index={ index } onClick={ ( e ) => { this.setGreenFilter( e ) } }> {comp.requirements} </p>
                    <p className='eachVacs task1'   data-index={ index } onClick={ ( e ) => { this.setGreenFilter( e ) } }> {comp.tasks}        </p>
                    <p className='eachVacs exp1'    data-index={ index } onClick={ ( e ) => { this.setGreenFilter( e ) } }> {comp.experience}   </p>
                  </div>
                )
              )
            }
          </div>

          <p className='afterHr'>
            These are all available vacancies for your request. If you do not find what you are looking for, please try another query.
          </p>
        </div>
      )
    }
  }

  handleChange = ( event ) => {
    console.log( 'handleChange from vac' );

    console.log( 'this.test' );
    console.log( this.test );

    let query = event.target.value;

    console.log( 'query' );
    console.log( query );

    this.filternListe( query );
  }

  filternListe ( query )
  {
    console.log( 'filternListe' );
    console.log( 'query: ' + query );

    this.setState(
      prevState => {
        const filteredVacs = prevState.mergedVacs.filter(
          vacs => {
            return  vacs.direction.toLowerCase().replaceAll( ' ', '' ).includes( query.toLowerCase().replaceAll( ' ', '' ) )
                      ||
                    vacs.location.toLowerCase().replaceAll( ' ', '' ).includes( query.toLowerCase().replaceAll( ' ', '' ) )
                      ||
                    vacs.experience.toLowerCase().replaceAll( ' ', '' ).includes( query.toLowerCase().replaceAll( ' ', '' ) )
                      ||
                    vacs.salary.toLowerCase().replaceAll( ' ', '' ).includes( query.toLowerCase().replaceAll( ' ', '' ) )
                      ||
                    vacs.requirements.toLowerCase().replaceAll( ' ', '' ).includes( query.toLowerCase().replaceAll( ' ', '' ) ) ;
          }
        );

        return {
          query,
          filteredVacs,
        };
      }
    );

    console.log( 'this.state.filteredVacs' );
    console.log( this.state.filteredVacs );
  }

  setGreenFilter = ( event ) => {
    console.log( 'setGreenFilter' );
    console.log( event );

    this.hiddenVacancyCard();

    let query = event.target.textContent;

    console.log( 'query ' + query );

    this.setState(
      {
        greenFilter : query
      }
    );

    this.filternListe( query );
    
    setTimeout( () => { this.applyFilters() }, 1000 );
  }

  resetGreenFilter = ( query ) => {
    console.log( 'resetGreenFilter' );

    this.setState(
      {
        greenFilter : ''
      }
    );

    this.resetFilters();
  }

  applyFilters = () => {
    console.log( 'applyFilters from vac' );
    console.log( this.state );
    console.log( 'this.props' );
    console.log( this.props );

    console.log( 'filteredVacs' );
    console.log( this.state.filteredVacs );

    if ( this.state.filteredVacs.length )
    {
      const filteredVacs = this.state.filteredVacs;

      this.setState({
        filter: filteredVacs,
      });
    }
    else
    {
      this.setState({
        filter: [],
      });
    }
  }

  resetFilters = () => {
    let mergedVacs1 = [].concat.apply( [], this.state.vacancies );

    this.setState(
      {
        mergedVacs  : mergedVacs1,
        filter      : mergedVacs1,
      }
    );
  }

  render ()
  {
    return (
      <div className='wrap_vac'>
        <div className='wrap_modal1_dark' ref={this.cl}>
          <div className='wrap_modal1 modelAddComp2'>
            <div className='modal1 insideAddModal2'>
              <p id='comp_reg'>HR Help</p>
              <p id='fill_in'>Fill in the form details. Our manager will contact you to clarify the details.</p>
              <form action='/database/sendRequest' method='POST' className='companyForm'>
                <input type='text' name='vacancy' className='com_inp' placeholder='Required vacancy'  required/>
                <input type='text' name='phone'   className='com_inp' placeholder='Your phone number' required/>
                <input type='text' name='email'   className='com_inp' placeholder='Your email'        required/>

                <button type='submit' id='req_but'>Request</button>
              </form>
              <p id='by_click' className='forCompReg'>By clicking on the «Request» button you confirm your consent to
              the processing of data and agree to the privacy policy</p>
            </div>
            <span id='close2' className='closeDataModal2' ref={this.cl2} onClick={this.closeModal}><img src={_close} /></span>
          </div>
        </div>

        <div className='vac'>
          <div className='industry_vac'>
            <div className='left_ind'>
              <p id='block_hr'>Blockchain industry vacancies from the best community</p>
              <p id='for_hr'>For employers and job seekers</p>
              <input type='text' id='job_hr' placeholder='Start writing your job title' /><img src={loope} id='loope'/>
            </div>
            <div className='right_ind'>
              <p className='all_vac'>Systems Analyst</p><p className='all_vac'>С#</p><p className='all_vac'>Risk manager</p><p className='all_vac'>Mobile developer</p><p className='all_vac'>Web developer</p>
              <p className='all_vac'>Blockchain engineer</p><p className='all_vac'>Big Data Analyst</p><p className='all_vac'>Blockchain Marketing Specialist</p><p className='all_vac'>С++</p>
            </div>
          </div>

          <div className='wrap_hrHelp'>
            <div className='hrHelp'>
              <span id='sp1'>HR HELP</span> <span id='sp2'>Take your time and get results</span> <span id='sp3' onClick={this.closeModal}>Help me</span>
            </div>
          </div>

          <div className='wrap_Filters'>
            <div className='searchBar'>
              <span className='searchBarElement' onClick={ () => { this.sortVacancies( 'salary', 1 ) } }>Salary<img src={arrow}               data-id="1"  className='arrowsSearch js-sortable'/></span>
              <span className='searchBarElement' onClick={ () => { this.sortVacancies( 'direction', 2 ) } }>Industry<img src={arrow}          data-id="2"  className='arrowsSearch js-sortable'/></span>
              <span className='searchBarElement' onClick={ () => { this.sortVacancies( 'requirements', 3 ) } }>Company<img src={arrow}        data-id="3"  className='arrowsSearch js-sortable'/></span>
              <span className='searchBarElement' onClick={ () => { this.sortVacancies( 'experience', 4 ) } }>Work experience<img src={arrow}  data-id="4"  className='arrowsSearch js-sortable'/></span>
              <span className='searchBarElement' onClick={ () => { this.sortVacancies( 'recently', 5 ) } }>Recently<img src={arrow}           data-id="5"  className='arrowsSearch js-sortable'/></span>
              <span className='searchBarElement' onClick={ () => { this.sortVacancies( 'location', 6 ) } }>Location<img src={arrow}           data-id="6"  className='arrowsSearch js-sortable'/></span>

              <span className='searchBarElement searchCombo'>
                <p className='wrapSearchBarInput' ref={this.searchBar} onClick={this.searchBarChange}>
                  <input type='checkbox' className='searchBarElement' id='searchBarInput'/>
                </p>

                <label htmlFor='searchBarInput' id='searchLabel'>Apply for internship</label>
              </span>

              <span className={ this.state.greenFilter !== '' ? 'searchBarElement searchCity' : 'searchBarElement searchCity hidden-green-filter' }>
                <span className='js-green-filter'> { this.state.greenFilter } </span>

                <img src={close} id='closeSearchBar' onClick={ this.resetGreenFilter }/>
              </span>
            </div>
          </div>

          <Offer
            handleChange      ={ this.handleChange }
            eachVacancie      ={ this.eachVacancie }
            applyFilters      ={ this.applyFilters }
            resetFilters      ={ this.resetFilters }
            hiddenVacancyCard ={ this.hiddenVacancyCard }
            cardVacancy       ={ this.state }
          />
        </div>
      </div>
    )
  }
}

export default Vacancies;
