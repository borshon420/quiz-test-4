import React from 'react';
import {Router} from "react-router-dom";
import {render, screen} from '@testing-library/react';
import Exam from "../pages/Exam";
import {createMemoryHistory} from "history";
import {UserInfo} from "../pages/Home";

test('Exam render test', () => {

    const history = createMemoryHistory();

    // "/exam?page=10&size=10"

    // "/exam/:id"

    const user: UserInfo = {name: "Joy", gender: "Male", lang: "Java"};

    history.push("/exam", user);

    render(
        <Router history={history}>
            <Exam/>
        </Router>
    );
    const exam = screen.getByTestId("exam");
    expect(exam).toBeInTheDocument();

});