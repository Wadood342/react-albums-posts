
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function AlbumDetails() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos data for the specific album
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [id]);

  return (
    <div>
      <h2>Album Details</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {photos.map(photo => (
          <div key={photo.id} className="col">
            <Card>
              <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} />
              <Card.Body>
                <Card.Title>{photo.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumDetails;
