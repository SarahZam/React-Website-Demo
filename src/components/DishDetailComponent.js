import React from 'react';
import {Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText} from "reactstrap";




    function RenderDish({dish}){
        if( dish != null){
            return(

                <Card className="col-10">
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    function RenderComments({comments}) {
        if (comments == null) {
            return(<div></div>)
        }

        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }

    const DishDetailComponent = (props) => {

       return(
           <div className="container">
               <div className="row">
                   <RenderDish dish={props.dishes}/>

               </div>
           </div>


       )

    }

export default DishDetailComponent;