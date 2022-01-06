import React from 'react'
import AlgorithmAES from './AlgorithmAES';
import AlgorithmDES from './AlgorithmDES';
import AlgorithmRabbit from './AlgorithmRabbit';
import AlgorithmRC4 from './AlgorithmRC4';
import AlgorithmTripleDES from './AlgorithmTripleDES';

const AllCryptoAlgorithms = () => {
    return (
        <React.Fragment>
          <AlgorithmAES/>
          <AlgorithmDES/>
          <AlgorithmRabbit/>
          <AlgorithmRC4/>
          <AlgorithmTripleDES/>
        </React.Fragment>
    )
}

export default AllCryptoAlgorithms
