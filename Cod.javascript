/* Styles defined for the desktop or the bigger screen devices*/
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

/* Header Navbar Styles */
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    background-image: linear-gradient(90deg, #74D7BB, #53C8B6, #35A99C);
    background-color: transparent;
}

.logo {
    padding: 0 5rem;
}

.logo .logo-heading {
    color: #fff;
}

.menu {
    padding: 0 5rem;
}

.hamburger {
    display: none;
    color: #fff;
    font-size: 25px;
}

.cross-icon {
    display: none;
}

.menu .menu-list {
    display: flex;
    list-style: none;
}

.menu-list .menu-list-items {
    padding: 0.5rem 1rem;
}

@media screen and (min-width: 856px) and (max-width: 1024px) {
    .menu-list .menu-list-items {
        padding: 0.5rem 0.3rem;
    }
}

/* Main Hero Section Styles */
.hero {
    background-image: url('./Images/heroImg3.avif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 4.8rem 0;
}

.hero .intro {
    text-align: center;
    margin: 0 5rem;
}

.hero .intro-buttons {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

/* About section styles */
.about {
    display: flex;
    align-items: center;
    background-image: linear-gradient(45deg, #363D73, #2794B3);
    justify-content: space-between;
    width: 100%;
}

.about .about-text {
    width: 450px;
    color: #fff;
    padding: 5rem 1rem 5rem 5rem;
}

.about .about-image img {
    height: 400px;
    width: 450px;
    padding: 5rem 5rem 5rem 1rem;
}

/* Portfolio section styles */
.portfolio {
    margin: 4.8rem 0;
    padding: 0 5rem;
}

.port-card {
    padding: 0 !important;
    background: none !important;
    border: 2px solid #000;
}

.port-card .image {
    width: 100%;
}

.port-card .image img {
    height: 200px;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

/* Services section styles */
.services {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 4.8rem 0;
    padding: 0 5rem;
}

.my-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
}

.my-row .my-col {
    text-align: center;
    width: 30%;
}

.my-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-image: linear-gradient(#74D7BB, #53C8B6, #35A99C);
    padding: 1rem;
}

.icon {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #363D73;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon svg {
    font-size: 30px;
    color: #fff;
}

/* Contact section styles */
.contact {
    padding: 0 5rem;
}

.contact-content {
    display: flex;
    margin: 3rem 0;
    justify-content: space-between;
}

.contact-form-container {
    width: 50%;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.contact-form .form-controls {
    width: 80%;
    padding: 10px 0;
    margin: 1.67rem 0;
}

.contact-form .form-btn {
    width: 83%;
}

.contact-details {
    width: 50%;
}

/* Footer Styles */
.footer {
    background-color: #000;
    color: #fff;
    padding: 2rem;
}

.footer-list-items {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin: 1rem 1rem 0 1rem;
    border-radius: 50%;
    background-color: #53C8B6;
}

.footer-links {
    font-size: 24px;
    color: #fff;
    text-decoration: none;
}

.social-links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-menu {
    padding: 0 5rem;
}

.footer-menu .footer-menu-list {
    display: flex;
    list-style: none;
}






/* utility classes */
.greet-heading {
    font-size: 1.3rem;
    font-weight: lighter;
    margin: 0;
    letter-spacing: 1px;
}

.my-heading {
    font-size: 2.5rem;
    margin: 0;
}

.sub-heading {
    margin: 0;
    font-size: 0.8rem;
    color: #ccc;
    font-weight: lighter;
}

.links:hover {
    border-bottom: 2px solid #fff;
}

.links {
    border-bottom: 2px solid transparent;
    transition: all 0.25s;
    padding: 5px;
    text-decoration: none;
    color: #fff;
}

.btn {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 1px;
    border: none;
}

.common-btn {
    background-color: #35A99C;
    color: #fff;
    border: 2px solid #35A99C;
    transition: all 0.25s;
}

.common-btn:hover {
    background-color: #fff;
    color: #35A99C;
    border: 2px solid #35A99C;
    outline: none;
}

.ghost-btn {
    background-color: #fff;
    color: #35A99C;
    border: 2px solid #35A99C;
    outline: none;
}

.ghost-btn:hover {
    background-color: #35A99C;
    color: #fff;
    transition: all 0.25s;
    border: 2px solid #35A99C;
}

.heading-span {
    font-weight: bolder;
}

.text-center {
    text-align: center;
}

.small-para {
    font-size: 14px;
    color: #fff;
}

.white-text {
    color: #fff;
}

.blue-text {
    color: #363D73;
}
