import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

function LoaderSpinner() {
  return (
    <Container>
      <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
  );
}

export default LoaderSpinner;