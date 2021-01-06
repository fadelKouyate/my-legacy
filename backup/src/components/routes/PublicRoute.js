import React from 'react'
import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'

const PublicRoute = ({component: Component, ...rest}) => {
 let {path} = rest
 let {logged} = useSelector(state => state.auth)


    if( logged ){
        return <Redirect to="/" />
    }

    return (
        <Component exact path={path} />
    )
}

export default PublicRoute