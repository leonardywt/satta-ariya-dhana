import { Card } from "react-bootstrap"

const Kegiatan = (props) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Kegiatan