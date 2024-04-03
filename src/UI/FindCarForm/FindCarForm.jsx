import React from "react";
import { Form, FormGroup } from "reactstrap";

import "../FindCarForm/find-car-form.css";

const FindCarForm = () => {
    return (
        <>
            <Form className="form">
                <div className="d-flex align-item-center justify-content-between flex-wrap">
                    <FormGroup className="form__group">
                        <input type="text" placeholder="From address" required />
                    </FormGroup>

                    <FormGroup className="form__group">
                        <input type="text" placeholder="To address" required />
                    </FormGroup>

                    <FormGroup className="form__group">
                        <input type="date" placeholder="Journey date" required />
                    </FormGroup>

                    <FormGroup className="form__group">
                        <input className="journey__time" type="time" placeholder="Journey Time" required/>
                    </FormGroup>

                    <FormGroup className="select__group">
                            <select>
                                <option className="ac">Ac Car</option>
                                <option className="non-ac">Non Ac Car</option>
                            </select>
                    </FormGroup>

                    <FormGroup  className="form__group">
                            <button className="btn find__car-btn">Find Car</button>
                    </FormGroup>
                </div>
            </Form>
        </>
    )
}

export default FindCarForm;