import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import * as BS from "react-bootstrap";
import * as Effects from "react-reveal";


const BootstrapDemo = () => {
    const [show, doShow] = useState(false);
    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [currentNum, setCurrent] = useState(0);

    return (<>
        <Effects.Fade left>
            <BS.Alert variant="primary" className="text-center">
                <h1 className="display-2">Header</h1>
            </BS.Alert>
        </Effects.Fade>
        <BS.Container>
            <BS.Row>
                {
                    nums.map((n) => (
                        <BS.Col key={n} sm={3}>
                            <Effects.Reveal>
                                <BS.Card className="mb-3 shadow">
                                    <BS.Card.Img variant="top" src={"https://picsum.photos/300?" + n} />
                                    <BS.Card.Body>
                                        <BS.Card.Title>
                                            <h3>Carta Numero {n}</h3></BS.Card.Title>
                                        <BS.Card.Body>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore error mollitia autem.Amet.
                                        </BS.Card.Body>
                                    </BS.Card.Body>
                                    <BS.Card.Footer className="text-end">
                                        <BS.Button variant="primary" onClick={() => {
                                            setCurrent(n);
                                            doShow(true)
                                        }}>
                                            Mas Informacion...
                                        </BS.Button>
                                    </BS.Card.Footer>
                                </BS.Card>
                            </Effects.Reveal>
                        </BS.Col>
                    ))
                }
            </BS.Row>
        </BS.Container>

        <BS.Modal show={show}>
            <BS.Modal.Header><h2>Atencion</h2></BS.Modal.Header>
            <BS.Modal.Body><p>Se elimara la carta seleccionada</p></BS.Modal.Body>
            <BS.Modal.Footer>
                <BS.Button variant="danger" onClick={() => {
                    setNums(nums.filter((n) => (n !== currentNum)));
                    doShow(false)
                }}>
                    Cerrar
                </BS.Button>
            </BS.Modal.Footer>
        </BS.Modal>
    </>);
}

export default BootstrapDemo;