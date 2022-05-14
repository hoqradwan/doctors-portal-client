import React from 'react';
import treatment from "../../assets/images/treatment.png"
// width: 458px height: 576px
const Treatment = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row px-16 gap-20 mt-5">
          <img width={458} height={570}  src={treatment} />
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn text-white border-0 bg-gradient-to-r from-secondary to-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Treatment;