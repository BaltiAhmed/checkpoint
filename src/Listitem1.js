import React from 'react';
import photo from './photo1.jpg';
import Button from './Button';
import './style.css';

function Listitem1() {



  return (

      <div className="component">
     
          <img className="image" src="/photo1.jpg" />
          <p className="desc1">nom <strong >prenom</strong></p>
          <p className="desc1">desc</p>
          <Button label="my facebook">
            
          </Button>
          <Button label="my linkedin">

          </Button>

          
         
          </div>




  );

}

export default Listitem1;
