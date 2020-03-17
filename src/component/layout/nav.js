const Nav = () => {
    return (
        <div class="super_container">
            <header className="header">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">

                    {/* <!-- Hamburger --> */}
                    <div className="hamburger menu_mm"><i className="fa fa-bars menu_mm" aria-hidden="true"></i></div>

                    {/* <!-- Logo --> */}
                    <div className="header_logo">
                        <a href="#"><div>a<span>star</span></div></a>
                    </div>

                    {/* <!-- Navigation --> */}
                    <nav className="header_nav">
                        <ul className="d-flex flex-row align-items-center justify-content-start">
                            <li><a href="index.html">home</a></li>
                            <li><a href="#">woman</a></li>
                            <li><a href="#">man</a></li>
                            <li><a href="#">lookbook</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </nav>

                    {/* <!-- Header Extra --> */}
                    <div className="header_extra ml-auto d-flex flex-row align-items-center justify-content-start">

                        {/* <!-- Language --> */}
                        <div className="info_languages has_children">
                            <div className="language_flag">
                                <img src="images/flag_1.svg" alt="https://www.flaticon.com/authors/freepik" />
                            </div>
                            <div className="dropdown_text">english</div>
                            <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>

                            {/* <!-- Language Dropdown Menu --> */}
                            <ul>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_2.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">french</div>
                                </a></li>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_3.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">japanese</div>
                                </a></li>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_4.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">russian</div>
                                </a></li>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_5.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">spanish</div>
                                </a></li>
                            </ul>

                        </div>

                        {/* <!-- Currency --> */}
                        <div className="info_currencies has_children">
                            <div className="dropdown_text">usd</div>
                            <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>

                            {/* <!-- Currencies Dropdown Menu --> */}
                            <ul>
                                <li><a href="#"><div className="dropdown_text">EUR</div></a></li>
                                <li><a href="#"><div className="dropdown_text">YEN</div></a></li>
                                <li><a href="#"><div className="dropdown_text">GBP</div></a></li>
                                <li><a href="#"><div className="dropdown_text">CAD</div></a></li>
                            </ul>

                        </div>

                        {/* <!-- Cart --> */}
                        <div className="cart d-flex flex-row align-items-center justify-content-start">
                            <div className="cart_icon"><a href="cart.html">
                                <img src="images/bag.png" alt="" />
                                <div className="cart_num">2</div>
                            </a></div>
                        </div>

                    </div>

                </div>
            </header>

            {/* <!-- Menu --> */}

            <div className="menu d-flex flex-column align-items-start justify-content-start menu_mm trans_400">
                <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
                <div className="menu_top d-flex flex-row align-items-center justify-content-start">

                    {/* <!-- Language --> */}
                    <div className="info_languages has_children">
                        <div className="language_flag"><img src="images/flag_1.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                        <div className="dropdown_text">english</div>
                        <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>

                        {/* <!-- Language Dropdown Menu --> */}
                        <ul>
                            <li><a href="#">
                                <div className="language_flag"><img src="images/flag_2.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                <div className="dropdown_text">french</div>
                            </a></li>
                            <li><a href="#">
                                <div className="language_flag"><img src="images/flag_3.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                <div className="dropdown_text">japanese</div>
                            </a></li>
                            <li><a href="#">
                                <div className="language_flag"><img src="images/flag_4.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                <div className="dropdown_text">russian</div>
                            </a></li>
                            <li><a href="#">
                                <div className="language_flag"><img src="images/flag_5.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                <div className="dropdown_text">spanish</div>
                            </a></li>
                        </ul>

                    </div>

                    {/* <!-- Currency --> */}
                    <div className="info_currencies has_children">
                        <div className="dropdown_text">usd</div>
                        <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>

                        {/* <!-- Currencies Dropdown Menu --> */}
                        <ul>
                            <li><a href="#"><div className="dropdown_text">EUR</div></a></li>
                            <li><a href="#"><div className="dropdown_text">YEN</div></a></li>
                            <li><a href="#"><div className="dropdown_text">GBP</div></a></li>
                            <li><a href="#"><div className="dropdown_text">CAD</div></a></li>
                        </ul>

                    </div>

                </div>
                <div className="menu_search">
                    <form action="#" className="header_search_form menu_mm">
                        <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                        <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                            <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <nav className="menu_nav">
                    <ul className="menu_mm">
                        <li className="menu_mm"><a href="index.html">home</a></li>
                        <li className="menu_mm"><a href="#">woman</a></li>
                        <li className="menu_mm"><a href="#">man</a></li>
                        <li className="menu_mm"><a href="#">lookbook</a></li>
                        <li className="menu_mm"><a href="blog.html">blog</a></li>
                        <li className="menu_mm"><a href="contact.html">contact</a></li>
                    </ul>
                </nav>
                <div className="menu_extra">
                    <div className="menu_social">
                        <ul>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <!-- Sidebar --> */}

            <div className="sidebar">

                {/* <!-- Info --> */}
                <div className="info">
                    <div className="info_content d-flex flex-row align-items-center justify-content-start">

                        {/* <!-- Language --> */}
                        <div className="info_languages has_children">
                            <div className="language_flag"><img src="images/flag_1.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                            <div className="dropdown_text">english</div>
                            <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>

                            {/* <!-- Language Dropdown Menu --> */}
                            <ul>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_2.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">french</div>
                                </a></li>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_3.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">japanese</div>
                                </a></li>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_4.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">russian</div>
                                </a></li>
                                <li><a href="#">
                                    <div className="language_flag"><img src="images/flag_5.svg" alt="https://www.flaticon.com/authors/freepik" /></div>
                                    <div className="dropdown_text">spanish</div>
                                </a></li>
                            </ul>

                        </div>

                        {/* <!-- Currency --> */}
                        <div className="info_currencies has_children">
                            <div className="dropdown_text">usd</div>
                            <div className="dropdown_arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></div>

                            {/* <!-- Currencies Dropdown Menu --> */}
                            <ul>
                                <li><a href="#"><div className="dropdown_text">EUR</div></a></li>
                                <li><a href="#"><div className="dropdown_text">YEN</div></a></li>
                                <li><a href="#"><div className="dropdown_text">GBP</div></a></li>
                                <li><a href="#"><div className="dropdown_text">CAD</div></a></li>
                            </ul>

                        </div>

                    </div>
                </div>

                {/* <!-- Logo --> */}
                <div className="sidebar_logo">
                    <a href="#"><div>a<span>star</span></div></a>
                </div>

                {/* <!-- Sidebar Navigation --> */}
                <nav className="sidebar_nav">
                    <ul>
                        <li><a href="index.html">home<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                        <li><a href="#">woman<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                        <li><a href="#">man<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                        <li><a href="#">lookbook<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                        <li><a href="blog.html">blog<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                        <li><a href="#">contact<i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                    </ul>
                </nav>

                {/* <!-- Search --> */}
                <div className="search">
                    <form action="#" className="search_form" id="sidebar_search_form">
                        <input type="text" className="search_input" placeholder="Search" required="required" />
                        <button className="search_button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </div>

                {/* <!-- Cart --> */}
                <div className="cart d-flex flex-row align-items-center justify-content-start">
                    <div className="cart_icon"><a href="cart.html">
                        <img src="images/bag.png" alt="" />
                        <div className="cart_num">2</div>
                    </a></div>
                    <div className="cart_text">bag</div>
                    <div className="cart_price">$39.99 (1)</div>
                </div>
            </div>

        </div>
    )
}

export default Nav;