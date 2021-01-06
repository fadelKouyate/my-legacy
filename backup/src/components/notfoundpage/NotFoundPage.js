import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../images/imagenotfound.png';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound} alt='not found' />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;