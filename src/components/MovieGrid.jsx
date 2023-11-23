import { createRef, useRef, useState } from "react";
import Details from "./Details";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MovieGrid({ results }) {
    var indexForSelectingMovie
    const [isOpen, setIsOpen] = useState(false);
    const [movie, setMovie] = useState({});
    const [show, setShow] = useState(false);

  const handleClose = () => {
    setMovie({})
    setShow(false);
}


  const handleShow = (index) => 
  {
    setShow(true);
    indexForSelectingMovie=index
    console.log(results[indexForSelectingMovie]);
    setMovie(results[indexForSelectingMovie])
    

  }
    
    const showDetails = (index)=>{
        setMovie(results[index])
        alert(results[index].original_title)
        setIsOpen(true)
    }


    return (
      <>
          {!show&&<div className="d-flex justify-content-center " style={{height:'100%',width:'100%'}}>
              <div className="d-flex " style={{width:'75%'}}>
                  <Row>
                      
              
               
                  
                  {results.length > 0 ? results.map(({ id,
                      poster_path,
                      original_title,
                      release_date,
                      overview },index) => (
                          <Col sm={12} md={6} lg={3} xl={3}>
                      <Card
                          className="bg-dark p-2 rounded-lg movie-item"
                          key={id}>
                          <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={original_title.slice(0, 20)} className="rounded" style={{width:'100%',height:'350px'}} />
                          <div className='font-bold text-white mt-2'>{original_title.slice(0, 30)}</div>
                          <div className='text-white  '>{release_date}</div>
                          <div className='text-white h-6 overflow-ellipsis overflow-clip mt-3'>
                              {overview.slice(0, 30)}...
                          </div>
                          <button className="btn btn-success p-2 rounded-lg text-center mt-2 w-full font-bold" onClick={()=>handleShow(index)}>
                              Details
                          </button>
              
                      </Card>
                      </Col>
                      
                  )
                  ):<>
              
                      <div>No result found</div>
                  
                  </>}
                  {isOpen && <Details setOpenModal={setIsOpen} movie={results[index]}/>}
                  </Row>
              </div>
          </div>}




          {/* modal for showing more details */}
         {show&&
         
        <>
            
            <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{movie.overview}</Modal.Body>
        <Modal.Title className="text-center"><img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.original_title} style={{width:'200px',height:'200px'}} /></Modal.Title>
        <Modal.Title>Release Date: {movie.release_date}</Modal.Title>
        <Modal.Title>Language: {movie.original_language}glish</Modal.Title>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
             
        </>
         }
      </>





    );
}

export default MovieGrid;