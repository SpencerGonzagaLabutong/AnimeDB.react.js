import {Link} from 'react-router-dom';
import {Container, Nav ,Navbar,} from 'react-bootstrap';




const NavBar = (props) => {
    return ( 
        <>
        
            <video autoPlay loop muted style={{ width: "100%", height:'420px' , objectFit: "cover"}}>
                <source src={props.vid}  type="video/mp4" />
            </video>
     
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand> 
                <img 
                    src={props.img} 
                    className="img-fluid" 
                    style={{  height: '80px' }}
                    alt="Your Image" 
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                         <Link to="./topanime">Top Anime</Link>
                    </Nav.Link>

                    <Nav.Link>
                         <Link to="./myanime">My Anime</Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        </>
     );
}
 
export default NavBar;