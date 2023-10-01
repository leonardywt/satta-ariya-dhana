import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import "./Navbar.css"

const NavigationBar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <>
            <Navbar className="app__navbar sticky-top">
                <Container>
                    <Navbar.Brand href="#home" className="app__navbar-logo">
                        <img
                            alt="logo"
                            src={require("../../assets/images/logo-removebg.png")}
                            className="d-inline-block align-top"
                        />{' '}
                        Satta Ariya Dhana
                    </Navbar.Brand>
                    <Nav>
                        <div className="app__navbar-links">
                            <Nav.Link className="app__navbar-links-responsive" href="#home">Beranda</Nav.Link>
                            <Nav.Link className="app__navbar-links-responsive" href="#kegiatan">Kegiatan</Nav.Link>
                            {/* <Nav.Link className="app__navbar-links-responsive" href="#galeri">Galeri</Nav.Link> */}
                            <Nav.Link className="app__navbar-links-responsive" href="#tentang">Tentang</Nav.Link>
                        </div>
                        <div className="app__navbar-smallscreen">
                            <GiHamburgerMenu color="black" fontSize={27} onClick={() => setToggleMenu(true)} />
                            {toggleMenu && (
                                <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                    <GrClose className="overlay__close" onClick={() => setToggleMenu(false)} />

                                    <Nav.Link className="app__navbar-smallscreen_links" href="#home" onClick={() => setToggleMenu(false)}>Beranda</Nav.Link>
                                    <Nav.Link className="app__navbar-smallscreen_links" href="#kegiatan" onClick={() => setToggleMenu(false)}>Kegiatan</Nav.Link>
                                    {/* <Nav.Link className="app__navbar-smallscreen_links" href="#galeri" onClick={() => setToggleMenu(false)}>Galeri</Nav.Link> */}
                                    <Nav.Link className="app__navbar-smallscreen_links" href="#tentang" onClick={() => setToggleMenu(false)}>Tentang</Nav.Link>

                                </div>
                            )}
                        </div>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavigationBar