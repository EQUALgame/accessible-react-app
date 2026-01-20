import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="py-4 mt-2" style={{backgroundColor: '#E3F2FD'}}>
      <Container>
        <div className="text-center">
          <p className="mb-2" style={{fontSize: '14px'}}>
            <strong>Disclaimer:</strong> These activities are educational simulations and may not fully represent 
            the experiences of individuals with specific conditions. They are simplified to raise awareness 
            and foster understanding.
          </p>
          <p className="mb-2" style={{fontSize: '14px'}}>
            This work is licensed under a <a href="#" className="text-primary">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> by Through Games
          </p>
          <p className="mb-0" style={{fontSize: '14px'}}>
            Illustrations by <a href="#" className="text-primary">icons8</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;