import React from 'react'
import { connect } from 'react-redux'


class CovUser extends React.Component{


    handleSubmit(event) {
        event.preventDefault()
    }
    
    render() {
           let cov_user = this.props.cov_user
            return (
                <div>
                    <ul>
                        <li>{cov_user.cov_first_name}</li>
                        <li>{cov_user.cov_last_name}</li>
                        <li>{cov_user.cov_birth}</li>
                        <li>{cov_user.cov_gender}</li>
                        <li>{cov_user.cov_phone}</li>
                        <li>{cov_user.cov_city}</li>
                    </ul>                         
                </div>
            );
}

}

const mapStateToProps = (state) => {
    return {
        cov_user: state.cov_user
    }
  }
  
  
export default connect(mapStateToProps)(CovUser)