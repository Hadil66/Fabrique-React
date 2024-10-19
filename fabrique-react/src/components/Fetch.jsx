import { useState, useEffect } from 'react';
import './Fetch.css'
import Filters from './Filters.jsx'

const Fetch = () => {
    const [artObjects, setArtObjects] = useState([]);
    useEffect(() => {
      fetch('https://fdnd-agency.directus.app/items/fabrique_art_objects')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setArtObjects(data.data);
        });
    }, []);
    
    return (
        <div>
          <ul className="masonry">
            {artObjects.map((art) => (
              <li className="masonry-item" key={art.id}>
                <figure>
                  <img
                    src={`https://fdnd-agency.directus.app/assets/${art.image}`}
                    alt={art.title}
                  />
                  <figcaption>
                    <h2>{art.title}</h2>
                    <a href="#" className="button">
                      Meer info
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Fetch;