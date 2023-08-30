import React from 'react'
import './myshelf.css'
import { useEffect,useState } from 'react';

const Myshelf = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:8080/myshelf/1")
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }


  return (<>
  
  <header>
    <h1>My Shelf</h1>
  </header>


  {
  
  <div>
      <h2>My Bookshelf</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>

  /* <div className="container">
    <div className="book-card">
      <img className="book-image" src="book1.jpg" alt="Book 1"/>
      <h2>Book Title 1</h2>
      <p>Author: Author Name</p>
      <p>Price: $19.99</p>
      <button>Add to Cart</button>
    </div>
    <div className="book-card">
      <img className="book-image" src="book2.jpg" alt="Book 2"/>
      <h2>Book Title 2</h2>
      <p>Author: Author Name</p>
      <p>Price: $24.99</p>
      <button>Add to Cart</button>
    </div>
    <div className="book-card">
      <img className="book-image" src="book3.jpg" alt="Book 3"/>
      <h2>Book Title 3</h2>
      <p>Author: Author Name</p>
      <p>Price: $14.99</p>
      <button>Add to Cart</button>
    </div>
  </div> */}
  <div class="container">
	<div class="row">
	    <div class="col-md-12 text-center bookshelf">
	        <h1 class="heading">Bookshelf by Aditya</h1>
            <div class="book-holder">
                <div class="book-container">
                    <div class="book">
                        <div class="book-cover" >
                            <div class="cover">
                                <span class="book-title">Sudhar Zara</span>
                                <span class="book-writer">Naapa</span>
                            </div>
                        </div>
                        <div class="book-spine">
                            <h1>Improve Urself</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="book-holder">
                <div class="book-container">
                    <div class="book">
                        <div class="book-cover" >
                            <div class="cover">
                                <span class="book-title">Great Book About Gorakhpur</span>
                                <span class="book-writer">By Pawan Mall</span>
                            </div>
                        </div>
                        <div class="book-spine">
                            <h1>Book About India</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="book-holder">
                <div class="book-container">
                    <div class="book">
                        <div class="book-cover" >
                            <div class="cover">
                                <span class="book-title">Great Book About India</span>
                                <span class="book-writer">By Pawan Mall</span>
                            </div>
                        </div>
                        <div class="book-spine">
                            <h1>Book About India</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>   
	</div>
</div>	
  </>
  )
}

export default Myshelf