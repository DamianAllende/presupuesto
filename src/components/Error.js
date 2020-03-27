import React  from 'react';
import PropTypes from 'prop-types';

const Errro =  ({mensaje}) => {

    return(
        <p className="alert alert-danger error">{mensaje}</p>
    );
  
}

Errro.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 

export default Errro