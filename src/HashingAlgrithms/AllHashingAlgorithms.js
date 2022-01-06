import React from 'react'
import HashingAlgorithmMD5 from "./HashingAlgorithmMD5"
import HashingAlgorithmSHA1 from "./HashingAlgorithmSHA1"
import HashingAlgorithmSHA224 from "./HashingAlgorithmSHA224"
import HashingAlgorithmSHA256 from "./HashingAlgorithmSHA256"
import HashingAlgorithmSHA3 from "./HashingAlgorithmSHA3"
import HashingAlgorithmSHA512 from "./HashingAlgorithmSHA512"




const AllHashingAlgorithms = () => {
    return (
        <React.Fragment>
            <HashingAlgorithmMD5/>
            <HashingAlgorithmSHA1/>
            <HashingAlgorithmSHA224/>
            <HashingAlgorithmSHA256/>
            <HashingAlgorithmSHA3/>
            <HashingAlgorithmSHA512/>
        </React.Fragment>
    )
}

export default AllHashingAlgorithms
