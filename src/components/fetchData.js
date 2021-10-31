import React, { Component } from "react";
import axios from 'axios';

async function getCompanies() {
  return await axios.get('https://gbn.rocks/api/eachCompany')
    .then(res => {
      let companies = res.data;
      return companies;
    })
    .catch(err => console.log(err))
}

getCompanies()
.then(companies => companies)
.catch(err => console.log(err))


async function getVacancies() {
  return await axios.get('http://localhost:8080/api/eachHr')
    .then(res => {
      let vacancies = res.data;
      return vacancies;
    })
    .catch(err => console.log(err))
}


getVacancies()
.then(vacancies => vacancies)
.catch(err => console.log(err))

export { getCompanies, getVacancies }
