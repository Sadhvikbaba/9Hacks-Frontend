import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
};

export default function AdminProtected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    let data = useSelector(state =>state.auth.userData)
    let status =  useSelector(state => state.auth.status)
    data = (data.key == "ADMIN") ? true : false
    const authStatus =(data && status)? true : false


    useEffect(() => {

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default function StudentProtected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    let data = useSelector(state =>state.auth.userData)
    let status =  useSelector(state => state.auth.status)
    data = (data.key == "STUDENT") ? true : false
    const authStatus =(data && status)? true : false


    useEffect(() => {

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

