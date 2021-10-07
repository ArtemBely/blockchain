import React from 'react';
import loope from '../../public/images/Ellipse 40.svg';
import { getVacancies } from './fetchData';


class Offer extends React.Component {

  constructor() {
    super()

    this.state = {
      vacancies: [],
      mergedVacs: []
    }
  }

      componentDidMount() {
        if(this.state.vacancies && this.state.vacancies.length < 1) {
          getVacancies()
          .then(vacancies => this.setState({ vacancies: vacancies }))
          .catch(err => console.log(err))
        }
          setTimeout(() => {
            if(this.state.vacancies) {
              var mergedVacs1 = [].concat.apply([], this.state.vacancies);
              this.setState({
                mergedVacs: mergedVacs1
              })
              console.log(this.state.mergedVacs);
            }
          }, 300);
       }

    eachVacancie = () => {
      if(this.state.mergedVacs) {
        return(
          <div className='inside_vacs'>
             {this.state.mergedVacs.map(comp => (
               <div className='commVacs'>
                   <p className='eachVacs'>{comp.direction}</p>
                   <p className='eachVacs'>{comp.location}</p>
                   <p className='eachVacs'>{comp.salary}</p>
                   <p className='eachVacs'>{comp.requirements}</p>
                   <p className='eachVacs'>{comp.tasks}</p>
                   <p className='eachVacs'>{comp.experience}</p>
               </div>
             ))}
          </div>
        )
      }
    }

    render() {
      return (
        <div className='wrap_eachVac'>
            {this.eachVacancie()}
        </div>
      )
    }
}

export default Offer;
