import { Badge, Dropdown, FormControl } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';


export function Header() {


    return (
      <>
        <header className='header-container'>
          <h1>E-Commerce App</h1>
          <div className="header-right">
            <FormControl placeholder="Search a product" className="search-bar" />
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" className="cart-btn">
                <FaShoppingCart color="black" fontSize="25px" />
                <Badge>{0}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      </>
    );
}

export default Header;
