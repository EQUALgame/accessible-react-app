import { Container } from 'react-bootstrap';

function Footer({ bgColor = '#E3F2FD' }) {
  return (
    <footer className="py-4 mt-2" style={{backgroundColor: bgColor}}>
      <Container>
        <div className="text-center">
          <p className="mb-2" style={{fontSize: '14px'}}>
            <strong>Disclaimer:</strong> These activities are educational and may not fully represent 
            the experiences of individuals with specific conditions. They are simplified to raise awareness 
            and foster understanding.
          </p>
          <p className="mb-2" style={{fontSize: '14px'}}>
            This work is licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="text-primary">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> by Equal Games
          </p>
          <p className="mb-0" style={{fontSize: '14px'}}>
            Illustrations by <a href="https://icons8.com/" className="text-primary">icons8</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;