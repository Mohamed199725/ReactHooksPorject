// App.js/The return statement contains JSX markup for rendering the application and It includes a title, the Filter component, the MovieList component, and buttons for filtering and adding new movies.

import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Conjuring 3',
      description: 'Plot. In 1981, demonologists Ed and Lorraine Warren document the exorcism of 8-year-old David Glatzel, attended by his family, his sister Debbie, her boyfriend Arne Johnson, and Father Gordon in Brookfield, Connecticut. In an attempt to save the little boy, Arne invites the demon to enter his body instead of Davids',
      posterURL: '/conjuring.jpg',
      rating: 9,
    },
    {
      title: 'The Nun',
      description: 'Plot. In 1952 Romania, two nuns living at the Saint Carthas monastery are attacked by an unseen evil force. The surviving nun, Sister Victoria, flees from the attacker, a demon appearing as a nun, and hangs herself. Her body is discovered by Frenchie, a villager who transports supplies to the nuns.',
      posterURL: '/The_nun.jpg',
      rating: 7.5,
    },
    {
      title: 'The Exorcist: Believer (2023)',
      description: 'When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive whos witnessed anything like it before.',
      posterURL: '/exorcicst.jpg',
      rating: 8,
    },
    {
      title: 'Saw',
      description: 'Two strangers awaken in a room with no recollection of how they got there, and soon discover theyre pawns in a deadly game perpetrated by a notorious serial killer.',
      posterURL: '/saw.jpg',
      rating: 7,
    },
    {
      title: 'Paranormal Activity',
      description: 'Paranormal Activity is a 2007 American supernatural horror film produced, written, directed, photographed and edited by Oren Peli. It centers on a young couple (Katie Featherston and Micah Sloat) who are haunted by a supernatural presence inside their home. They then set up a camera to document what is haunting them.',
      posterURL: '/paranormal.jpg',
      rating: 6.5,
    },
    {
      title: 'The Haunting of Pendle Hill',
      description: 'Unfortunately for Matilda, her historian father has disappeared on the haunted hill and she must venture into the woods, face the dark spirits and rescue him before its too late.',
      posterURL: 'the haunting.jpg',
      rating: 6,
    },
    {
      title: 'Hereditary',
      description: 'When her mentally ill mother passes away, Annie (Toni Collette), her husband (Gabriel Byrne), son (Alex Wolff), and daughter (Milly Shapiro) all mourn her loss. The family turn to different means to handle their grief, including Annie and her daughter both flirting with the supernatural.',
      posterURL: '/hereditary.jpg',
      rating: 5.5,
    },
    {
    title: 'Sister Death',
    description: 'A novice with supernatural powers arrives at a former convent, now a school for girls. The strange events and disturbing situations that torment her will lead her to unravel the skein of secrets that surround the convent and haunt its inhabitants.',
    posterURL: '/sister.jpg',
    rating: 5.5,
    },
    {
      title: 'The Unholy',
      description: 'Alice, a girl with hearing impairment, is able to hear, speak and even heal the ill after having visions of the Virgin Mary. But when a journalist probes into the matter, he unearths a conspiracy.',
      posterURL: '/unholy.jpg',
      rating: 6.5 ,
      },
      {
        title: 'The Ritual',
        description: 'A trip to the Swedish wilderness turns murky as four friends try to mend their strained relationships. However, in the forest, they realise that they are not alone.',
        posterURL: '/ritual.jpg',
        rating: 7.5,
        },
        {
          title: 'No One Will Save You (2023)',
          description: 'Under the plot of aliens chasing Brynn and trying to control her, No One Will Save You is about trauma, grief, and overcoming that pain. It might be tangentially about the millennial generation and the overwhelming amount of trauma they endured in their formative years if one reads into it that way.',
          posterURL: '/noone.jpg',
          rating: 6.5,
          },
          {
            title: 'The Witch',
            description: 'In the New England of the 17th century, a banished Puritan family sets up a farm by the edge of a huge remote forest where no other family lives. Soon, sinister forces then start haunting them.',
            posterURL: '/witch.jpg',
            rating: 8,
            },



      



    // Add more horror movies as needed
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filterMovies = () => {//Function to filter the list of movies based on the title and rating filters and It uses the filter method to create a new array of movies that match the specified criteria.  The filtered list is then stored in the filteredMovies state variable.
    
   
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
    );
    setFilteredMovies(filtered);
  };

  const addMovie = (newMovie) => {// Function to add a new movie to the list and It uses the spread operator (...) to create a new array with the existing movies and the new movie.It uses the spread operator (...) to create a new array with the existing movies and the new movie. It then updates the movies state variable with the new array.Finally, it calls filterMovies to update the filtered list.
    setMovies([...movies, newMovie]);
    filterMovies(); // Update filtered movies after adding a new movie
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px',backgroundColor: '#8B4513',minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#007bff', fontSize: '32px', marginBottom: '20px' }}>Horror Movie Collection</h1>
      <Filter onTitleChange={setTitleFilter} onRatingChange={setRatingFilter} />
      <MovieList movies={filteredMovies} />
      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
          onClick={filterMovies}
        >
          Filter Movies
        </button>
      </div>
      <button
        style={{
          marginTop: '20px',
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
        onClick={() =>
          addMovie({
            title: prompt('Enter the movie title:'),
            description: prompt('Enter the movie description:'),
            posterURL: prompt('Enter the movie poster URL:'),
            rating: parseFloat(prompt('Enter the movie rating:')),
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
};

export default App;