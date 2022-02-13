import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const [isloading, setIsloading] = React.useState(false);
    const [loginSuccess, setLoginSuccess] = React.useState(
        sessionStorage.getItem("loginSuccess")
    );

    useEffect(() =>{
        setLoginSuccess(sessionStorage.getItem("loginSuccess"));
    },[]);

console.log(loginSuccess)
    const submitForm = () => {
        let result = '';
        setIsloading(true);
        axios.get("/4").then(response => {
            console.log(response, "response")
            setIsloading(false);
        }).catch(error => {
            console.log("eeeeeeeeeeeee")
            setIsloading(false);
        });


    }

    return !loginSuccess ?
        (
            <Navigate to="/not-found"/>
        )
        : isloading ?
        (
            <Spinner animation="border" variant="primary" />
        )
        : (
            <div >
                <h1>Home</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={() => { submitForm() }}>
                        Submit
                    </Button>
                </Form>

            </div>
        );
};

export default Home;