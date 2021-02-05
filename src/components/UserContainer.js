import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userAction'
import "../App.css"



function UsersContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    const fetchdata = (userData) => {

        const returndata = []
        for (const key in userData) {
            returndata.push(
                <div className="col-md-3 mb-3" key={userData[key].id}>

                    <div className="card">
                        <div className="card-header header">
                            <h5 className="text-danger">
                                {userData[key].Name}
                            </h5>

                        </div>
                        <div className="classdiv">
                            <p className="p-2 ">{userData[key].Description}</p>
                        </div>
                        <a href='#' className="btn btn-secondary">Read More</a>
                    </div>
                </div>
            )





        }

        return returndata

    }

    console.log('userstafetch', userData)
    return userData.loading ? (
        <div className="spinner-border text-primary align-self-center " role="status">
            <span className="sr-only ml-10 ">Loading...</span>
        </div>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div className="userss">
                    <h2 className="users">Users List</h2>
                    <div className="container py-4">
                        <div className="row">
                            {
                                userData &&
                                userData.users
                                &&

                                fetchdata(userData.users)

                            }
                        </div>
                    </div>
                    <div className="container">

                        <p>{userData.Description}</p>
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
)(UsersContainer)