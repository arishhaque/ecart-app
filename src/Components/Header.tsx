import { Container, FormControl, Navbar } from 'react-bootstrap';

export function Header() {


    return (
      <>
        <header className='header-container'>
          <h1>E-Commerce App</h1>
          <Navbar bg="dark" expand="lg" variant="dark">
              <Container>
                  <Navbar.Brand href="/">
                    <a>Shopping Cart</a>
                  </Navbar.Brand>
                  <Navbar.Text className = "search-bar">
                    <FormControl style={{ width: 500 }} placeholder="Search a product" className="m-auto" />
                  </Navbar.Text>
              </Container>
          </Navbar>
        </header>
      </>
    );
}

export default Header;
