import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const ListItem = (props) => {
//     const items = [...props.items].reverse().map(item => {
//         return (
//             <ListGroup.Item key={item.id}>{item.done?<del className={item.done?"text-success":""}>{item.item}</del>:<span>{item.item}</span>}
//                 <div className="float-right">
//                     <span className={item.done?"text-success":"text-warning"}><i onClick={() => props.doneItem(item.id)} className="fa fa-check-square-o"></i></span> <span className="text-danger ml-3"> <i onClick={() => props.removeItem(item.id)} className="fa fa-trash"></i></span>
//                 </div>
//             </ListGroup.Item>
//         )
//     })
//     return (
//         items
//     )
// }

const List = props => {
    return (
        <ListGroup variant="flush">
            <TransitionGroup>
                {[...props.items].reverse().map(item => (
                    <CSSTransition key={item.id} timeout={500} classNames="item">
                        <ListGroup.Item>{item.done?<del className={item.done?"text-success":""}>{item.item}</del>:<span>{item.item}</span>}
                            <div className="float-right">
                                <span className={item.done?"text-success":"text-warning"}><i onClick={() => props.doneItem(item.id)} className="fa fa-check-square-o"></i></span> <span className="text-danger ml-3"> <i onClick={() => props.removeItem(item.id)} className="fa fa-trash"></i></span>
                            </div>
                        </ListGroup.Item>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    )
}

export default List