
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userAction'




import React from 'react'

function PageContainer(props) {

    return (
        <div>
            <h1>{props.userData.Description}</h1>
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
)(PageContainer)
