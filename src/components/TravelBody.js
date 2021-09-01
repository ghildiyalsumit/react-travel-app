import React from 'react'
import TravelAddBooking from './TravelAddBooking'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import configData from '../config.json'
import Moment from 'moment'

function TravelBody() {

    useEffect(() => {
        const getBookings = async () => {
           
        }
        getBookings()
        
    }, [])


    //Add Task
    const addTask = async (task) => {
        const idd = uuidv4();
        console.log(configData.Server_POST_Bookings)
        const res = await fetch(configData.Server_POST_Bookings + "/items", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: idd,
                createdOn: Moment(new Date()).format('yyyy-MM-DD hh:mm:ss'),
                name: task.name,
                age: task.age,
                members: task.member,
                fromDest: task.fromDest,
                toDest: task.toDest,
                travelDate: task.travelDate
            })
        })
        const data = await res.json()
        alert(data)
    }
   
    return (
        <body>
            <div className="banner">
                <div className="bg">
                    <img src="/images/bg.jpg" className="cover" alt="img missing" />
                    <div className="content">
                        <h2>Explore The World</h2>
                        <a href="#searchBox" className="btn">Book Now</a>
                    </div>
                    <TravelAddBooking onAdd={addTask} />
                </div>
            </div>

        </body>
    )
}

export default TravelBody;
