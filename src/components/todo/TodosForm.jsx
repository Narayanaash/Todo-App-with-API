import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';

class TodosForm extends React.Component {
    initialState = {
        item: '',
        error: 0,
    }

    state = this.initialState

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name] : value,
            error  : 0,
        })
    }

    preventDefault(event) {
        event.preventDefault();
    }

    submitForm = (props) => {
        const { item } = this.state

        if (!item) {
            this.setState({
                error: 1,
            })
        } else {
            this.props.handleSubmit(this.state.item)
            this.setState(this.initialState)
        }
    }

    render() {
        const { item, error } = this.state

        return (
            <Form onSubmit={this.preventDefault}>
                <Form.Row>
                    <Col>
                        <Form.Control
                        placeholder="Enter todo item..."
                        name="item"
                        value={item}
                        onChange={this.handleChange}
                        className={error===1?"border border-danger":""} />
                    </Col>
                    <Button type="submit" variant="outline-primary" onClick={this.submitForm}><i className="fa fa-plus"></i> Add</Button>
                </Form.Row>
            </Form>
        )
    }
}

export default TodosForm