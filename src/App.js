import React from 'react';
import './App.css';
import Course from './Components/Course/Course';

import fakeData from './fakeData';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {

    const [courses] = useState(fakeData.slice(0, 15));

    const [cart, setCart] = useState([]);

    // console.log(courses);

    const enrollNowHandler = (course) => {
        console.log(course.course_name);

        const newCart = [...cart, course];
        setCart(newCart);

    };


    return (
        <div className="d-flex">

            {/* 15 courses */}
            <div className='course-container'>
                {
                    courses.map(course =>
                        <Course
                            course={course}
                            key={course.id}

                            enrollNowHandler={() => enrollNowHandler(course)}
                        ></Course>
                    )
                }
            </div>


            {/* cart */}
            <div className='cart-container sticky-top'>

                <Cart 
                    cart={cart}
                ></Cart>

            </div>

        </div>
    );
}

export default App;
