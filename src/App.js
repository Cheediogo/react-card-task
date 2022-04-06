import logo from './logo.svg';
import './App.css';
import AllGiftCards from './AllGiftCards';
import {Row, Col, Container} from 'react-bootstrap';

function App() {
  return (
    <Container className='py-3'>
      <Row>
        {AllGiftCards.map((currency) => (
          <Col sm={12} md={3} className="pt-3 ">
            <div className='card p-3 mb-3 border-0' key={currency.id}>
              <h5 className='card-title fw-bold'>{currency.title}</h5>
              <p className='card-content pt-4'>{currency.currencies}</p>
            </div>
          </Col>
             ))}
      </Row>
    </Container>
  );
}

export default App;
