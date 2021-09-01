import { useState } from 'react'

const TravalAddBooking = ({ onAdd }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [member, setMember] = useState('')
    const [travelDate, setTravelDate] = useState('')
    const [fromDest, setFromDest] = useState('')
    const [toDest, setToDest] = useState('')

  
    const onSubmit = async (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please write name');
            return
        }
        const data = await onAdd({ name, age, member, travelDate, fromDest, toDest })
        setName('')
        setAge('')
        setMember('')
        setTravelDate('')
        setFromDest('')
        setToDest('')
        
        const memberDetails=(id)=>
        {
            console.log(id);
        }
    }

    return (
        <form className="searchBox" id="searchBox" onSubmit={onSubmit} >
            <div className="inputBx">
                <p>Enter Name</p>
                <input type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>Enter Age</p>
                <input type="number" min="1" max="99" pattern="\d*" maxlength="2" required placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>Total Members</p>
                <input type="number" min="1" max="99" pattern="\d*" maxlength="2"
                required placeholder="Total Members" value={member} onChange={(e) => setMember(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>Travel Date</p>
                <input type="date" placeholder="Travel Date" value={travelDate} pattern="\d{1,2}/\d{1,2}/\d{4}" onChange={(e) => setTravelDate(e.target.value)} />
            </div>
            <div className="inputBx">
                <p>From Destination</p>
                <input type="text" required placeholder="From Destination" value={fromDest} onChange={(e) => setFromDest(e.target.value)} />
            </div>

            <div className="inputBx">
                <p>To Destination</p>
                <input type="text" required placeholder="To Destination" value={toDest} onChange={(e) => setToDest(e.target.value)} />
            </div>
            <div className="inputBx">
                <p className="white">_</p>
                <input type="Submit" value="Submit" />
            </div>
        </form>
    )
}

export default TravalAddBooking
