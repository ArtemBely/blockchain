import React from 'react';
import loope from '../../public/images/Ellipse 40.svg';
import { getVacancies } from './fetchData';


class Offer extends React.Component {

  constructor() {
    super()

    let user;

    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
    }

    this.state = {
      vacancies: [],
      mergedVacs: [],
      user,
      query: '',
      filteredVacs: [],
      filter: [],
    }

    this.applForP = React.createRef();
    this.receiveForP = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
  }

      componentDidMount() {
        if(this.state.vacancies && this.state.vacancies.length < 1) {
          getVacancies()
          .then(vacancies => this.setState({ vacancies: vacancies }))
          .catch(err => console.log(err))
        }
          let a = setInterval(() => {
            if(this.state.vacancies) {
              var mergedVacs1 = [].concat.apply([], this.state.vacancies);
              this.setState({
                mergedVacs: mergedVacs1,
                filter: mergedVacs1,
              })
                this.state.mergedVacs.length > 1 ?
                clearInterval(a) :
                null
            }
          }, 1000);

       }

    handleChange(event) {
      let query = event.target.value;

      this.setState(prevState => {
        const filteredVacs = prevState.mergedVacs.filter(vacs => {
          return vacs.direction.toLowerCase().includes(query.toLowerCase()) ||
                 vacs.location.toLowerCase().includes(query.toLowerCase()) ||
                 vacs.experience.toLowerCase().includes(query.toLowerCase()) ||
                 vacs.salary.toLowerCase().includes(query.toLowerCase()) ||
                 vacs.requirements.toLowerCase().includes(query.toLowerCase());
        });

        return {
          query,
          filteredVacs,
        };
      });
    };

    applyFilters() {
      if (this.state.filteredVacs) {
        const filteredVacs = this.state.filteredVacs;
        this.setState({
          filter: filteredVacs,
        });
      }
    }


    changeStatusOfReceive = () => {
      this.receiveForP.current.classList.toggle('receiveForPColor');
    }
    changeStatusOfApply = () => {
      this.applForP.current.classList.toggle('receiveForPColor2');
    }

    eachVacancie = () => {
      if(this.state.vacancies) {
        return(
          <div className='inside_vacs'>
           <div className='doubleInside_vacs'>
             {this.state.filter.map((comp, index, arr) => (
               <div className='commVacs' style={{
                 borderRadius: index == 0 ? "20px 20px 0px 0px" :
                               index == arr.length - 1 ? "0px 0px 20px 20px" :
                               null
               }}>
                   <p className='eachVacs dir1'>{comp.direction}</p>
                   <p className='eachVacs loc1'>{comp.location}</p>
                   <p className='eachVacs sal1'>{comp.salary}</p>
                   <p className='eachVacs requir1'>{comp.requirements}</p>
                   <p className='eachVacs task1'>{comp.tasks}</p>
                   <p className='eachVacs exp1'>{comp.experience}</p>
               </div>
             ))}
             </div>
             <p className='afterHr'>These are all available vacancies for your request.
              If you do not find what you are looking for, please try another query.</p>
          </div>
        )
      }
    }

    render() {
      return (
        <div className='wrap_eachVac'>
            {this.eachVacancie()}
            <div className='wrap_searchPositions'>
                <div className='searchPositions'>
                <form onChange={this.handleChange} method='POST' id='searchForm'>
                     <input type='text' className='searchVacs' required placeholder='Position'/>
                     <input type='text' className='searchVacs' required placeholder='Region'/>
                     <input type='text' className='searchVacs' required placeholder='Work experience'/>
                     <input type='text' className='searchVacs' required placeholder='Starting salary'/>
                     <input type='text' className='searchVacs' required placeholder='Requirements'/>
                     <p className='applForP' ref={this.applForP} onClick={this.changeStatusOfApply}><input type='checkbox' id='applFor' className='searchVacsCheck'/></p>
                     <label htmlFor='applFor' className='lblsFor' id='applFor2'>Apply for internship</label>
                     <p className='receiveForP' ref={this.receiveForP} onClick={this.changeStatusOfReceive}><input type='checkbox' id='receiveList' className='searchVacsCheck'/></p>
                     <label htmlFor='receiveList' className='lblsFor' id='receiveList2'>Receive list of job opportunities</label>
                     <button onClick={this.applyFilters} type='button' id='req_but2'>Request</button>
                     <p id='resFil'>Reset filters </p>
                </form>
             </div>
          </div>
        </div>
      )
    }
}

export default Offer;