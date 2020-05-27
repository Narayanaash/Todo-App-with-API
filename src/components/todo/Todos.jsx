import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import uuid from 'react-uuid';
import TodosForm from './TodosForm';
import List from './List';
import { API_BASE_URL } from '../../config';

class Todos extends React.Component {
    state = {
        items: [],
    }

    componentDidMount() {
        this.getItems();
    }
    async getItems() {
        try {
            const response = await fetch(API_BASE_URL + '/items');
            const itemsList = await response.json();
            this.setState({ items: itemsList.data});
        } catch (err) {
            console.error(err);
        }
    }

    async storeItem(item) {
        const response = await fetch(API_BASE_URL + '/item', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "item": item
            })
        });
        const receivedData = await response.json();

        if (receivedData.errors) {
            console.log(receivedData.errors);
        } else {
            this.setState({ items: [...this.state.items, receivedData.data] })
        }
    }

    async deleteItem(id) {
        await fetch(API_BASE_URL + '/item/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json'
            }
        });
    }

    removeItem = id => {
        const { items } = this.state
        this.setState({
            items: items.filter(item => {
                return item.id !== id
            }),
        })
        this.deleteItem(id);
    }

    doneItem = id => {
        let items = this.state.items
        let targetItem = items.find(item => {return item.id === id})
        targetItem.done = true
        fetch(API_BASE_URL + '/item/' + id, {
            headers: {
                'Content-Type':'application/json',
                Accept: 'application/json'
            }
        }).then(response => response.json())
        .then(this.setState({items:items}));
    }

    handleSubmit = item => {
        this.storeItem(item);
    }
    
    render() {
        const { items } = this.state
        return (
            <Container>
                <Row className="">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card className="my-5 pb-2">
                            <Card.Header className="text-uppercase" as="h5"><i className="fa fa-calendar-minus-o"></i> Simple Todo App</Card.Header>
                            <Card.Body>
                                <TodosForm handleSubmit={this.handleSubmit} />
                            </Card.Body>
                            <List items={items} removeItem={this.removeItem} doneItem={this.doneItem} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Todos