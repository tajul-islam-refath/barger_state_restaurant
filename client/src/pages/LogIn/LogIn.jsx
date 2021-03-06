import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useAlert } from 'react-alert'
import { Link, useHistory } from 'react-router-dom'
import './login.css'
import login_1 from '../../assets/login_1.png'
import logo from '../../assets/logo.png'
import Loader from '../../components/layouts/loader/Loader'

import { userLogin, clearError } from '../../store/User/user.actions'

const LogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const history = useHistory()
    const alert = useAlert()
    const dispatch = useDispatch()

    const { isAuthenticate, loading, error } = useSelector(state => state.auth)


    const submitForm = (e) => {
        e.preventDefault()

        dispatch(userLogin(email, password))
    }


    useEffect(() => {

        if (error) {
            if (typeof error === "string") {
                alert.error(error)
                dispatch(clearError())
            } else {
                setErrors(error.errors)
                dispatch(clearError())
            }
        }

        if (isAuthenticate) {
            history.push('/')
            alert.success("LogIn Success")
        }
    }, [error, history, isAuthenticate, alert, dispatch])


    return (
        <section id="login">
            {loading ? <Loader />
                :
                <section style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div class="alert alert-danger" role="alert">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>As Admin :</h4>
                                            <p>Email : <strong>admin@gmail.com</strong></p>
                                            <p>Password : <strong>Admin123#</strong></p>
                                        </div>
                                        <div className="col-md-6">
                                            <h4>As User :</h4>
                                            <p>Email : <strong>user@gmail.com</strong></p>
                                            <p>Password : <strong>User123#</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="login_col-left">
                                    <img className="login_col-left-logo" src={logo} alt="Logo" />
                                    <form onSubmit={submitForm} className="login-col_left-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="email" aria-describedby="email"
                                                placeholder="Enter your email..."
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password..."
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="btn-grad login-btn">Submit</button>
                                        <p className="text-center " >Don't Have an Account?
                                            <span> <Link className="link" to='/register' > Register</Link></span>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </section>
    );
}

export default LogIn;
