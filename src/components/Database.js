import React from 'react';
import { NavLink } from 'react-router-dom';

class Database extends React.Component {

    // constructor() {
    //     super()
    //     this.RunDatabase = React.createRef();
    // }
    // componentDidMount()
    // RunDatabase1 = () => {
    //     let but1 = document.querySelector("#first_button");
    //     let but1FirstText = document.querySelector("#first_list");
    //     let but1Card = document.querySelector("#first_card");
    //     let cross1 = document.querySelector("#cross_black1");
    //     but1.onclick = function() {
    //         but1.classList.add("companyInside_btn-active");
    //         but1FirstText.style.display = "none";
    //         but1Card.style.display = "flex";
    //         but1.setAttribute("disabled", "true");
    //     }
    //     cross1.onclick = function() {
    //         but1.classList.remove("companyInside_btn-active");
    //         but1FirstText.style.display = "grid";
    //         but1Card.style.display = "none";
    //         // but1.removeAttribute("disabled");
    //         // Почему-то не работает
    //     }
    // }
    // RunDatabase2 = () => {
    //     let but2 = document.querySelector("#second_button");
    //     let but2FirstText = document.querySelector("#second_list");
    //     let but2Card = document.querySelector("#second_card");
    //     let cross2 = document.querySelector("#cross_black2");
    //     but2.onclick = function() {
    //         but2.classList.add("companyInside_btn-active");
    //         but2FirstText.style.display = "none";
    //         but2Card.style.display = "flex";
    //         but2.setAttribute("disabled", "true");
    //     }
    //     cross2.onclick = function() {
    //         but2.classList.remove("companyInside_btn-active");
    //         but2FirstText.style.display = "grid";
    //         but2Card.style.display = "none";
    //         // but2.removeAttribute("disabled");
    //         //Почему-то не работает
    //     }
    // }
    // RunDatabase3 = () => {
    //     let but3 = document.querySelector("#third_button");
    //     let but3FirstText = document.querySelector("#third_list");
    //     let but3Card = document.querySelector("#third_card");
    //     let cross3 = document.querySelector("#cross_black3");
    //     but3.onclick = function() {
    //         but3.classList.add("companyInside_btn-active");
    //         but3FirstText.style.display = "none";
    //         but3Card.style.display = "flex";
    //         but3.setAttribute("disabled", "true");
    //     }
    //     cross3.onclick = function() {
    //         but3.classList.remove("companyInside_btn-active");
    //         but3FirstText.style.display = "grid";
    //         but3Card.style.display = "none";
    //         // but3.removeAttribute("disabled");
    //         //Почему-то не работает
    //     }
    // }

    render() {

    return (
      <div className="wraper">
        <div className="container">
            <div className="wrap_header">
                <div className="header">
                    <div id="bg_gif"></div>
                    <div className="nav">
                        <img src="./images/logotypeDatabase.svg" alt="logo"></img>
                        <ul className="header_list">
                            <li className="header_item"><NavLink to='#' className="header_link">Conference</NavLink></li>
                            <li className="header_item"><NavLink to='#' className="header_link">Database</NavLink></li>
                            <li className="header_item"><NavLink to='#' className="header_link">HR</NavLink></li>
                            <li className="header_item"><NavLink to='#' className="header_link">Сommunity news</NavLink></li>
                            <li className="header_item"><NavLink to='#' className="header_link">Blog</NavLink></li>
                            <li className="header_item"><NavLink to='#' className="header_link">About GBN</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wrap_main">
                <div className="main">
                    <div className="global">
                        <h2 className="global_title">Global Blockchain <br></br> Network database</h2>
                        <h3 className="global_subtitle">Community of open <br></br> blockchain companies</h3>
                        <button className="global_btn">Add company →</button>
                        <NavLink to='#' className="global_link">More about GBN →</NavLink>
                    </div>
                    <div className="company">
                        <div className="company_navigation">
                            <ul className="company_list">
                                <li className="company_item">
                                    <button className="company_btn">Company</button>
                                    <img src="./images/arrow.svg" className="company_logo-left" alt="icons"></img>
                                </li>
                                <li className="company_item">
                                    <button className="company_btn">Request</button>
                                    <img src="./images/arrow.svg" className="company_logo-left" alt="icons"></img>
                                </li>
                                <li className="company_item">
                                    <button className="company_btn">Industry</button>
                                    <img src="./images/arrow.svg" className="company_logo-left" alt="icons"></img>
                                </li>
                                <li className="company_item">
                                    <button className="company_btn">Jurisdiction</button>
                                    <img src="./images/arrow.svg" className="company_logo-left" alt="icons"></img>
                                </li>
                                <li className="company_item">
                                    <button className="company_btn">Hiring</button>
                                    <img src="./images/arrow.svg" className="company_logo-left" alt="icons"></img>
                                </li>
                                <li className="company_item">
                                    <img src="./images/filter_icon.svg" className="company_logo-right" alt="icons"></img>
                                    <button className="company_btn">Filter</button>
                                </li>
                                <li className="company_item">
                                    <img src="./images/input_icon.svg" className="company_logo-right" alt="icons"></img>
                                    <input type="text" id="input_company"></input>
                                </li>
                            </ul>
                        </div>
                        <div className="companyInside">
                            <ul className="companyInside_list">
                                <li className="companyInside_item">
                                    <button className="companyInside_btn" id="first_button">
                                        <ul className="companyInside_btn-list" id="first_list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                        <div className="companyInside_card" id="first_card">
                                            <div className="card_header">
                                                <div className="card_header-btn" id="cross_black1">
                                                    <img src="./images/cross_black.svg" className="cross_black" alt=""></img>
                                                </div>
                                                <div className="card_nav">
                                                    <ul className="card_header-list">
                                                        <li className="card_header-item">Alfa Business Development</li>
                                                        <li className="card_header-item">Request</li>
                                                        <li className="card_header-item">Industry</li>
                                                        <li className="card_header-item">Jurisdiction</li>
                                                        <li className="card_header-item">Hiring</li>
                                                        <li className="card_header-item"><img src="./images/card_logo.svg" className="card_header-logo" alt="logo"></img></li>
                                                        <li className="card_header-item">Business growth</li>
                                                        <li className="card_header-item">Metallurgy</li>
                                                        <li className="card_header-item">Managment</li>
                                                        <li className="card_header-item">Design</li>
                                                        <li className="card_header-item">RU, UA, SP,</li>
                                                        <li className="card_header-item">DE, FR</li>
                                                        <li className="card_header-item">Yes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card_section-one">
                                                <div className="company_description">
                                                    <h3 className="description_title card_title">Company description</h3>
                                                    <div className="description_paragraph card_par">
                                                        At vero eos et accusamus et iusto odio <br></br>
                                                        dignissimos ducimus qui blanditiis <br></br>
                                                        praesentium voluptatum deleniti atque <br></br>
                                                        corrupti quos dolores et quas molestias <br></br>
                                                        excepturi sint occaecati cupiditate non.
                                                    </div>
                                                </div>
                                                <div className="problem_solved">
                                                    <h3 className="problem_title card_title">Problem solved</h3>
                                                    <p className="problem_paragraph card_par">
                                                        At vero eos et accusamus et iusto odio <br></br>
                                                        dignissimos ducimus qui blanditiis <br></br>
                                                        praesentium voluptatum deleniti atque <br></br>
                                                        corrupti quos dolores et quas molestias <br></br>
                                                        excepturi sint occaecati cupiditate non.
                                                    </p>
                                                </div>
                                                <div className="card_contacts">
                                                    <h3 className="contacts_title card_title">Contacts</h3>
                                                    <div className="contacts_paragraph card_par">
                                                        +1 123 123 456 45 <br></br>
                                                        example@email.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_section-two">
                                                <h3 className="section_two-title card_title">Managment and representatives</h3>
                                                <div className="card_two-contacts">
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_1.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_one-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_one-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_2.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_two-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_two-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_3.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_three-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_two-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_documents">
                                                <h3 className="documents_title">Documents</h3>
                                                <div className="documents_list">
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">One pager</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="one_pager-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">About company</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="about_company-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">Price-list</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="price_list-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">Presentation</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="presentation-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="companyInside_btn" id="second_button">
                                        <ul className="companyInside_btn-list" id="second_list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                        <div className="companyInside_card" id="second_card">
                                            <div className="card_header">
                                                <div className="card_header-btn" id="cross_black2">
                                                    <img src="./images/cross_black.svg" className="cross_black" alt=""></img>
                                                </div>
                                                <div className="card_nav">
                                                    <ul className="card_header-list">
                                                        <li className="card_header-item">Alfa Business Development</li>
                                                        <li className="card_header-item">Request</li>
                                                        <li className="card_header-item">Industry</li>
                                                        <li className="card_header-item">Jurisdiction</li>
                                                        <li className="card_header-item">Hiring</li>
                                                        <li className="card_header-item"><img src="./images/card_logo.svg" className="card_header-logo" alt="logo"></img></li>
                                                        <li className="card_header-item">Business growth</li>
                                                        <li className="card_header-item">Metallurgy</li>
                                                        <li className="card_header-item">Managment</li>
                                                        <li className="card_header-item">Design</li>
                                                        <li className="card_header-item">RU, UA, SP,</li>
                                                        <li className="card_header-item">DE, FR</li>
                                                        <li className="card_header-item">Yes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card_section-one">
                                                <div className="company_description">
                                                    <h3 className="description_title card_title">Company description</h3>
                                                    <div className="description_paragraph card_par">
                                                        At vero eos et accusamus et iusto odio <br></br>
                                                        dignissimos ducimus qui blanditiis <br></br>
                                                        praesentium voluptatum deleniti atque <br></br>
                                                        corrupti quos dolores et quas molestias <br></br>
                                                        excepturi sint occaecati cupiditate non.
                                                    </div>
                                                </div>
                                                <div className="problem_solved">
                                                    <h3 className="problem_title card_title">Problem solved</h3>
                                                    <p className="problem_paragraph card_par">
                                                        At vero eos et accusamus et iusto odio <br></br>
                                                        dignissimos ducimus qui blanditiis <br></br>
                                                        praesentium voluptatum deleniti atque <br></br>
                                                        corrupti quos dolores et quas molestias <br></br>
                                                        excepturi sint occaecati cupiditate non.
                                                    </p>
                                                </div>
                                                <div className="card_contacts">
                                                    <h3 className="contacts_title card_title">Contacts</h3>
                                                    <div className="contacts_paragraph card_par">
                                                        +1 123 123 456 45 <br></br>
                                                        example@email.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_section-two">
                                                <h3 className="section_two-title card_title">Managment and representatives</h3>
                                                <div className="card_two-contacts">
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_1.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_one-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_one-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_2.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_two-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_two-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_3.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_three-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_two-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_documents">
                                                <h3 className="documents_title">Documents</h3>
                                                <div className="documents_list">
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">One pager</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="one_pager-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">About company</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="about_company-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">Price-list</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="price_list-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">Presentation</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="presentation-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="companyInside_btn" id="third_button">
                                        <ul className="companyInside_btn-list" id="third_list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                        <div className="companyInside_card" id="third_card">
                                            <div className="card_header">
                                                <div className="card_header-btn" id="cross_black3">
                                                    <img src="./images/cross_black.svg" className="cross_black" alt=""></img>
                                                </div>
                                                <div className="card_nav">
                                                    <ul className="card_header-list">
                                                        <li className="card_header-item">Alfa Business Development</li>
                                                        <li className="card_header-item">Request</li>
                                                        <li className="card_header-item">Industry</li>
                                                        <li className="card_header-item">Jurisdiction</li>
                                                        <li className="card_header-item">Hiring</li>
                                                        <li className="card_header-item"><img src="./images/card_logo.svg" className="card_header-logo" alt="logo"></img></li>
                                                        <li className="card_header-item">Business growth</li>
                                                        <li className="card_header-item">Metallurgy</li>
                                                        <li className="card_header-item">Managment</li>
                                                        <li className="card_header-item">Design</li>
                                                        <li className="card_header-item">RU, UA, SP,</li>
                                                        <li className="card_header-item">DE, FR</li>
                                                        <li className="card_header-item">Yes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card_section-one">
                                                <div className="company_description">
                                                    <h3 className="description_title card_title">Company description</h3>
                                                    <div className="description_paragraph card_par">
                                                        At vero eos et accusamus et iusto odio <br></br>
                                                        dignissimos ducimus qui blanditiis <br></br>
                                                        praesentium voluptatum deleniti atque <br></br>
                                                        corrupti quos dolores et quas molestias <br></br>
                                                        excepturi sint occaecati cupiditate non.
                                                    </div>
                                                </div>
                                                <div className="problem_solved">
                                                    <h3 className="problem_title card_title">Problem solved</h3>
                                                    <p className="problem_paragraph card_par">
                                                        At vero eos et accusamus et iusto odio <br></br>
                                                        dignissimos ducimus qui blanditiis <br></br>
                                                        praesentium voluptatum deleniti atque <br></br>
                                                        corrupti quos dolores et quas molestias <br></br>
                                                        excepturi sint occaecati cupiditate non.
                                                    </p>
                                                </div>
                                                <div className="card_contacts">
                                                    <h3 className="contacts_title card_title">Contacts</h3>
                                                    <div className="contacts_paragraph card_par">
                                                        +1 123 123 456 45 <br></br>
                                                        example@email.com
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_section-two">
                                                <h3 className="section_two-title card_title">Managment and representatives</h3>
                                                <div className="card_two-contacts">
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_1.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_one-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_one-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_2.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_two-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_two-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                    <div className="inna">
                                                        <img src="./images/Inna Ivanova_3.svg" className="card_two-photo" alt="photo"></img>
                                                        <h3 className="inna_title">Inna Ivanova</h3>
                                                        <div className="inna_three-paragraph">
                                                            Quas molestias vero eos <br></br>
                                                            et accusamus et iusto
                                                        </div>
                                                        <div className="inna_contacts">
                                                            <img src="./images/contact_IN.svg" className="card_in" alt=""></img>
                                                            <div className="inna_two-email">i.ivanova@alfadev.ch</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card_documents">
                                                <h3 className="documents_title">Documents</h3>
                                                <div className="documents_list">
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">One pager</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="one_pager-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">About company</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="about_company-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">Price-list</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="price_list-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                    <div className="documents_column">
                                                        <h3 className="documents_title">Presentation</h3>
                                                        <div className="card_documents-btn">
                                                            <img src="./images/cross_gray.svg" alt="" className="cross_gray"></img>
                                                        </div>
                                                        <div className="presentation-content">
                                                            Quas molestias accusamus <br></br>
                                                            iusto. Quas molestias vero
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="companyInside_btn">
                                        <ul className="companyInside_btn-list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                    </button>
                                    <button className="companyInside_btn">
                                        <ul className="companyInside_btn-list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                    </button>
                                    <button className="companyInside_btn">
                                        <ul className="companyInside_btn-list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                    </button>
                                    <button className="companyInside_btn">
                                        <ul className="companyInside_btn-list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                    </button>
                                    <button className="companyInside_btn">
                                        <ul className="companyInside_btn-list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                    </button>
                                    <button className="companyInside_btn" id="last_button">
                                        <ul className="companyInside_btn-list">
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Alfa Business Development</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Business growth</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">Metallurgy</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link">RU, UA +3</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link yes">Yes</div>
                                            </li>
                                            <li className="companyInside_btn-item">
                                                <div className="companyInside_btn-link direct">Direct contact</div>
                                            </li>
                                        </ul>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap_footer">
                <div className="footer_container">
                    <div className="footer">
                        <img src="./images/logoDatabase_footer.svg" className="footer_logoDatabase" alt="logo"></img>
                        <div className="footer_navigation">
                            <ul className="footer_list">
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Database</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Conference</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">HR</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Our people</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Blog</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">About GBN</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Сommunity news</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">FAQ</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">+41 855 456 54 65</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">example@site.com</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">More contacts</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Map site</NavLink>
                                </li>
                                <li className="footer_item">
                                    <NavLink to='#' className="footer_link">Login for partners</NavLink>
                                </li>
                            </ul>
                        </div>
                        <ul className="icon_list">
                            <li className="icon_item">
                                <button className="icon_btn">
                                    <img src="./images/icons/youtube.svg" alt=""></img>
                                </button>
                            </li>
                            <li className="icon_item">
                                <button className="icon_btn">
                                    <img src="./images/icons/in.svg" alt=""></img>
                                </button>
                            </li>
                            <li className="icon_item">
                                <button className="icon_btn">
                                    <img src="./images/icons/facebook.svg" alt=""></img>
                                </button>
                            </li>
                            <li className="icon_item">
                                <button className="icon_btn">
                                    <img src="./images/icons/twitter.svg" alt=""></img>
                                </button>
                            </li>
                            <li className="icon_item">
                                <button className="icon_btn">
                                    <img src="./images/icons/telegram.svg" alt=""></img>
                                </button>
                            </li>
                            <li className="icon_item">
                                <button className="icon_btn">
                                    <img src="./images/icons/inst.svg" alt=""></img>
                                </button>
                            </li>
                        </ul>
                        <div className="footer_triangle">
                            <button className="triange_btn">
                                <img src="./images/icons/triangle.svg" alt=""></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Database;
