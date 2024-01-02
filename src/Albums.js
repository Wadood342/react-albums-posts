
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch albums data
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, []);

  return (
    <div>
      <h2>Albums</h2>
      <ListGroup>
        {albums.map(album => (
          <ListGroupItem key={album.id}>
            <Link to={`/album/${album.id}`}>{album.title}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default Albums;
