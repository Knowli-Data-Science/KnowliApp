import { React, useState } from "react"
import {
    Badge,
    Card,
    CardBody,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Row,
    Col,
    Button,
    CardHeader,
    CardFooter,
    CardImg,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    CustomInput,
    ListGroupItem,
    ListGroup,
    Table,
    UncontrolledTooltip,
} from "reactstrap";
import CustomTable from "views/components/CustomTable";
import RedactionFormLg from "views/components/RedactFormLg";

import ReactTable from "components/ReactTable/ReactTable.js"
import VaultTable from "views/components/VaultTable";
import DragNDrop from "views/components/DragNDrop";
import RedactionForm from "views/components/RedactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThin, faEye } from '@fortawesome/free-solid-svg-icons'
import icons from 'variables/icons';
import { PiSparkle } from "react-icons/pi";


import VerticalLine from "views/components/VerticalLine";
import logo from "assets/img/Upload.png";



const DocumentUpload = () => {
    const [withRedactions, setWithRedactions] = useState(false);

    const [selectedEntities, setSelectedEntities] = useState([]);
    const [customRedactions, setCustomRedactions] = useState([]);
    const [entities, setEntities] = useState([
        { id: 1, label: 'Name', checked: false },
        { id: 2, label: 'Birth date', checked: false },
        { id: 3, label: 'SSN', checked: false },
        { id: 4, label: 'License number', checked: false },
        { id: 5, label: 'Address', checked: false },
        { id: 6, label: 'Phone number', checked: false },
        { id: 7, label: 'VIN number', checked: false },
        { id: 8, label: 'Vehicle plate number', checked: false },
        { id: 9, label: 'Email address', checked: false },
        { id: 10, label: 'Bank account number', checked: false },
        { id: 11, label: 'Bank routing number', checked: false },
        { id: 12, label: 'Financial institution', checked: false },
        { id: 13, label: 'Credit card number', checked: false },
        { id: 14, label: 'PIN', checked: false },
        { id: 15, label: 'Credit expiry', checked: false },
        { id: 16, label: 'Credit/Debit CVV', checked: false },
    ]);




    const handleSwitchChange = () => {
        setWithRedactions(!withRedactions)
    }



    return (
        <>
            <div className="content" height="100vh">
                <Row >
                    <Col lg="7" md="7" style={{ color: "0C80A4" }}>
                        <div className="header text-left" style={{ marginLeft: "10%", marginBottom: 0, marginTop: 0, paddingTop: 0 }}>
                            <h4 style={{ color: "#19AECA", fontWeight: '400', letterSpacing: .15, fontFamily: "Helvetica" }}><i className={"tim-icons " + icons[24].name} style={{ color: "#19AECA", marginRight: 10, marginLeft: "-10%", fontWeight: 400, letterSpacing: .15, }} />  Document Upload</h4>
                        </div>
                        <div className="header text-left" style={{ marginLeft: "0%", marginBottom: 0, marginTop: 0, paddingTop: 0 }}>
                            <h5 style={{ color: "#334572", fontWeight: '400', letterSpacing: .15, fontFamily: "Helvetica" }}>  UPLOAD NEW DOCUMENT</h5>
                        </div>
                        <Card className="card-timeline card-plain " style={{ marginTop: 0, paddingTop: 0, height: "73vh" }}>
                            <CardBody >

                                <FormGroup>
                                    <CustomInput
                                        type="switch"
                                        id="switch-redact"
                                        label="With redactions"
                                        onChange={handleSwitchChange}
                                    // className="custom-input-label-white"
                                    />
                                </FormGroup>


                                {withRedactions && (
                                    <RedactionFormLg
                                        setSelectedEntities={setSelectedEntities}
                                        setCustomRedactions={setCustomRedactions}
                                        selectedEntities={selectedEntities}
                                        customRedactions={customRedactions}>
                                    </RedactionFormLg>

                                )}
                                <FormGroup style={{ marginTop: '1rem', textAlign: 'center' }}>
                                    <div
                                        style={{
                                            border: '2px dashed #bbb',
                                            borderRadius: '8px',
                                            padding: '20px',
                                            textAlign: 'center',
                                            color: '#666',
                                            width: "50%",

                                        }}
                                    >
                                        <p style={{ fontSize: '1.2em', color: '#333' }}>Drag files to upload</p>
                                        <p style={{ color: '#999' }}>or</p>
                                        <Button color="primary" className="btn-sm">Browse Files</Button>
                                    </div>
                                </FormGroup>

                            </CardBody>

                        </Card>
                    </Col>
                    <Col lg="4" md="4">

                        <VerticalLine color="#ccc" width="2px" ></VerticalLine>
                        {/* <h1>This is document Vault</h1> */}
                    </Col>






                </Row>
            </div>





        </>

    )

}

export default DocumentUpload;