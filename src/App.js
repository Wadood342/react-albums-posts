
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

import Albums from './Albums';
import AlbumDetails from './AlbumDetails';
import Posts from './Posts';

const randomBackgroundImage = () => {
 
  const backgroundImages = ['url1.jpg', 'url2.jpg', 'url3.jpg'];
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return `url(/images/${backgroundImages[randomIndex]})`;
};

const appStyle = {
  minHeight: '100vh',
  background: randomBackgroundImage(),
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};

function App() {
  return (
    <Router>
      <Container style={appStyle} fluid className="mt-3">
        <Row>
          <Col>
            <h1>Albums</h1>
            <nav>
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/">Albums</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/posts">Posts</Link>
                </ListGroup.Item>
              </ListGroup>
            </nav>
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<Albums />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
