import { React, useState } from "react"
import {
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
    Button,
    FormGroup,
    CustomInput,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,


} from "reactstrap";

import RedactionFormLg from "views/components/RedactFormLg";

import { AiOutlineCheckCircle, AiOutlineCloudUpload } from "react-icons/ai";
import { IoFolderOutline } from "react-icons/io5";
import CustomTablePg from "views/components/CustomTablePg";


import VerticalLine from "views/components/VerticalLine";
// import logo from "assets/img/Upload.png";



const DocumentUpload = () => {
    const [withRedactions, setWithRedactions] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
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

    const columns = [
        { label: 'DOCUMENT', field: 'document', align: 'text-left' },
        { label: 'TYPE', field: 'type', align: 'text-center' },
        { label: 'VIEW', field: 'view', align: 'text-center' }
    ];

    const data = [
        { document: 'Florida State Wheelchair', type: 'PDF', view: true },
        { document: 'Texas State Report', type: 'DOC', view: true },
        { document: 'California State Wheelchair', type: 'PDF', view: true },
        { document: 'Indiana State Report', type: 'DOC', view: true },
        { document: 'North Carolina State Wheelchair', type: 'PDF', view: true },
        { document: 'New Mexico State Report', type: 'DOC', view: true },
        { document: 'Arizona State Wheelchair', type: 'PDF', view: true },
        { document: 'Oregon State Report', type: 'DOC', view: true },
        { document: 'Illinois State Wheelchair', type: 'PDF', view: true },
        { document: 'Tennessee State Report', type: 'DOC', view: true },
        { document: 'Mississippi State Wheelchair', type: 'PDF', view: true },
        { document: 'South Carolina State Report', type: 'DOC', view: true },
        { document: 'Michigan State Wheelchair', type: 'PDF', view: true },
        { document: 'Wisconsin State Report', type: 'DOC', view: true },
        // Add more data rows as needed
    ];



    const handleSwitchChange = () => {
        setWithRedactions(!withRedactions)
    }



    return (
        <>
            <div className="content" height="100vh">
                <Row >
                    <Col lg="7" md="7" style={{ color: "0C80A4" }}>
                        <div className="header text-left" style={{ marginLeft: "10%", marginBottom: 0, marginTop: 0, paddingTop: 0 }}>
                            <h4 style={{ color: "#19AECA", fontWeight: 'bold', letterSpacing: .15, fontFamily: "Helvetica" }}><AiOutlineCloudUpload fontSize={24} fontWeight={600} style={{ color: "#19AECA", marginRight: 10, marginLeft: "-10%", fontWeight: 400, letterSpacing: .15, }} />  Document Upload</h4>
                        </div>
                        <div className="header text-left" style={{ marginLeft: "0%", marginBottom: 0, marginTop: 0, paddingTop: 0 }}>
                            <h5 style={{ color: "#334572", fontWeight: 600, letterSpacing: .15, fontFamily: "Helvetica" }}>  UPLOAD NEW DOCUMENT</h5>
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
                                            width: "95%",
                                            background: "#eee"

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
                    <Col className="text-center document-display" md="5" style={{marginLeft:"-10px"}} >

                        <VerticalLine color="#ccc" width="2px" ></VerticalLine>

                        <div className="header text-left" style={{ marginLeft: "10%", marginBottom: "6%" }}>
                            <h4 style={{ marginBottom: "-20px", marginLeft: -30, fontWeight: "bold", letterSpacing: .15, color: "334572", fontFamily: "Helvetica" }}><IoFolderOutline fontWeight={600} fontSize={24} style={{ marginRight: 10 }} />Document Vault</h4>

                        </div>
                        <Card className="card-tasks text-left" style={{ background: `linear-gradient(to bottom, #344675 0%, #263148 100%)`, height: "100vh", borderBottomRightRadius: "15px" ,marginLeft: 20}}>
                            <CardHeader>
                                <Row>
                                    <Col lg="6" md="5" sm="6" Style={{ marginRight: 0, paddingRight: 0 }}>

                                        <h6 className="d-inline " style={{ color: 'white', opacity: .9, fontSize: "14px", letterSpacing: '.11', fontWeight: 300 }}>DOCUMENT LIBRARY</h6>
                                    </Col>
                                    <Col lg="6" md="7" sm="6">
                                        <InputGroup>
                                            <Input placeholder="Search"
                                                className="input-gray-placeholder input-gray-text"
                                                style={{ paddingLeft: "10px" }}
                                                onChange={(e) => setSearchTerm(e.target.value)}>
                                            </Input>
                                            <InputGroupAddon addonType="append" className="input-gray-text">
                                                <InputGroupText>
                                                    <i className="tim-icons icon-zoom-split input-gray-text" style={{ paddingRight: 0 }}></i>
                                                </InputGroupText>
                                            </InputGroupAddon>

                                        </InputGroup>
                                    </Col>
                                </Row>

                            </CardHeader>
                            <CardBody className="scroll-column" style={{ borderBottomRightRadius: "50px" }}>

                                <CustomTablePg columns={columns} data={data} searchTerm={searchTerm} edit={true} itemsPerPage={10}/>
                            </CardBody>
                        </Card>
                    </Col>






                </Row>
            </div>





        </>

    )

}

export default DocumentUpload;