import logo from './logo.svg';
import './App.css';
import UserContainer from './userContainer'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://api.covid19api.com/');

            setItem(result.data)
        };
        fetchData();

    }, [])
    console.log(item);
    return (
        <div className="App">
            {item.Name}
        </div>
    );
}

export default App;



import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts');

            setItem(result.data)
        };
        fetchData();

    }, [])
    console.log(item);
    return (
        <div className="container">
            <div className="row">
                {item.map((items) => (
                    <div className="col-md-3 mb-3" key={items.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5>
                                    # {items.id} {items.title}
                                </h5>
                                <p>{items.body}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default App;





import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from "./Actions/UserAction"


function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div>
                    <h2>User list</h2>
                    <div>
                        {userData &&
                            userData.users &&

                            userData.users.map(user => <p>{user.name}</p>)}
                    </div>

                </div>
            )



}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)



{
    userData &&
    userData.users
    &&
    userData.users.slice(10, 50).map(user => (


      
        


    ))
}