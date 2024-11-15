import React from "react";
import { useState } from "react";

// reactstrap components
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
import VaultTable from "views/components/VaultTable";
import DragNDrop from "views/components/DragNDrop";
import RedactionForm from "views/components/RedactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThin, faEye } from '@fortawesome/free-solid-svg-icons'
import icons from 'variables/icons';
import { PiSparkle } from "react-icons/pi";

import ReactTable from "components/ReactTable/ReactTable.js"
import VerticalLine from "views/components/VerticalLine";
import logo from "assets/img/Upload.png";



const DocumentVault = () => {
  const [files, setFiles] = useState([]);
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [customRedactions, setCustomRedactions] = useState([]);
  const [showRedactions, setShowRedactions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const handleSwitchChange = () => {
    setShowRedactions(!showRedactions);
  };

  const columns = [
    { label: 'NAME', field: 'name', align: 'text-left' },
    { label: 'TYPE', field: 'type', align: 'text-center' },
    { label: 'FILE SIZE', field: 'size', align: 'text-center' },
    { label: 'VIEW', field: 'view', align: 'text-center' }
  ];

  const data = [
    { name: 'Florida State Wheelchair', type: 'PDF', size: "1.2 MB", view: true },
    { name: 'Texas State Report', type: 'DOC', size: "5.2 MB", view: true },
    { name: 'Indiana State Wheelchair', type: 'PDF', size: "3.1 MB", view: true },
    { name: 'Wisconson State Report', type: 'DOC', size: "0.7 MB", view: true },
    { name: 'Missouri State Wheelchair', type: 'PDF', size: "0.2 MB", view: true },
    { name: 'Mississippi State Report', type: 'DOC', size: "1.8 MB", view: true },
    { name: 'Michigan State Wheelchair', type: 'PDF', size: "1.2 MB", view: true },
    { name: 'Ohio State Report', type: 'DOC', size: "3.2 MB", view: true },
    { name: 'Illinios State Wheelchair', type: 'PDF', size: "0.8 MB", view: true },
    { name: 'Oregon State Report', type: 'DOC', size: "7.2 MB", view: true },
    { name: 'Washington State Wheelchair', type: 'PDF', size: "1.8 MB", view: true },
    { name: 'California State Report', type: 'DOC', size: "8.1 MB", view: true },
    { name: 'New York State Wheelchair', type: 'PDF', size: "4.2 MB", view: true },
    { name: 'Maine State Report', type: 'DOC', size: "6.5 MB", view: true },
    // Add more data rows as needed
  ];



  return (
    <>
      <div className="content" style={{height:"100vh"}} >

        <Row >
          <Col lg="7" md="12">
            <div className="header text-left" style={{ marginLeft: "10%", marginBottom: 0, marginTop: 0, paddingTop: 0 }}>
              <h4 style={{ color: "#19AECA", fontWeight: 'bold', letterSpacing: .15, fontFamily: "Helvetica" }}><i className="tim-icons icon-single-copy-04" style={{ color: "#19AECA", marginRight: 10, marginLeft: "-10%", fontWeight: 600, fontSize:24}} /> Document Vault</h4>
            </div>
            <Card className="card-timeline card-plain scroll-column" style={{ marginTop: 0, paddingTop: 0, height: "100vh" }}>
              <CardBody >
                <Row>
                  <Col lg="6" md="5" sm="6" Style={{ marginRight: 0, paddingRight: 0 }}>

                    <h6 className="d-inline " style={{ opacity: .8, fontSize: "14px", letterSpacing: '.11', fontWeight: 600, fontFamily: "Helvetica" }}>DOCUMENT LIBRARY</h6>
                  </Col>
                  <Col lg="6" md="7" sm="6">
                    <InputGroup>
                      <Input 
                      placeholder="Search" 
                      className="input-gray-placeholder input-gray-text"
                      onChange={(e)=>setSearchTerm(e.target.value)}
                      >
                      </Input>
                      <InputGroupAddon addonType="append" className="input-gray-text">
                        <InputGroupText>
                          <i className="tim-icons icon-zoom-split search-icon input-gray-text"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>

                </Row>
                <VaultTable columns={columns} data={data} searchTerm={searchTerm} itemsPerPage={9}/>
              </CardBody>
            </Card>

          </Col>
          <Col className="text-center document-display"  lg = "5" md="12" style={{"height":"100vh"}} >
            <VerticalLine color="#ccc" width="2px" />
            <div className="header text-left" style={{ marginBottom: "6%" , marginLeft: 20}}>
              <h4 style={{ marginBottom: "-20px", paddingBottom: 0, fontWeight: "bold", letterSpacing: .15, color: "334572", fontFamily: "Helvetica" }}><i className= "tim-icons icon-cloud-upload-94" style={{ color: "#334572", marginRight: 10, fontWeight: 600, fontSize:24}}></i>Document Upload</h4>

            </div>
            <Card className="card-tasks text-left" 
                  style={{
                    background: `linear-gradient(to bottom, #344675 0%, #263148 100%)`,
                    borderBottomRightRadius: "15px",
                    width:"95%",
                    marginLeft: "5%",
                    minHeight: showRedactions ? "100vh" :"35vh",
                    paddingBottom:20
              
          }}>
              <CardHeader>
                <div>
                  <h4 className="custom-white">UPLOAD NEW DOCUMENTS </h4>
                </div>
              </CardHeader>


              <CardBody style={{
                        padding: "1rem",
                  
                        background: `linear-gradient(to bottom, #344675 0%, #263148 100%)`,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem', // Adds space between elements
                        }}>
                <Row id="checkRadios" style={{ marginBottom: 20 }}>
                  <Col lg="12" sm="12" >
                    <CustomInput type="switch"
                      id="switch-redact"
                      label="With Redactions"
                      checked={showRedactions}
                      onChange={handleSwitchChange}
                      className="custom-input-label-white"

                    />
                  </Col>
                </Row>
                {showRedactions && (
                  <div>
                    <RedactionForm

                      setSelectedEntities={setSelectedEntities}
                      setCustomRedactions={setCustomRedactions}
                      selectedEntities={selectedEntities}
                      customRedactions={customRedactions} />
                  </div>
                )}

                <div className='section' style={{ marginTop: "1rem" }}>

                  {/* <DragNDrop onFilesSelected={setFiles}  /> */}
                  <FormGroup style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        marginLeft:"12%",
                        marginRight:"10%",
                        border: '2px dashed #bbb',
                        borderRadius: '8px',
                        paddingBottom: '20px',
                        paddingTop:"10px",
                        width:"75%",
                        textAlign: 'center',
                        color: '#666',
                      }}
                    >
                      <div><img style={{ height: 50, width: 75 }} src={logo} alt="react-logo" /></div>
                      <p className="custom-white" style={{ fontSize: '1.2em', color: '#344675' }}>Drag files to upload</p>
                      <p className="custom-white" style={{ color: '#344675' }}>or</p>

                      <Button
                        style={{
                          backgroundColor: 'transparent', // Matches the background color (transparent for the example)
                          borderColor: 'var(--primary)', // Uses primary color for the border
                          color: 'white', // Matches text color to primary
                          borderWidth: '2px', // Optional: thicker border for emphasis

                          borderStyle: 'solid',
                        }}
                        outline // Optional: outline style for a more subtle look
                      >Browse Files</Button>
                    </div>
                  </FormGroup>

                </div>
              </CardBody>
            </Card>
            <div> 
                   </div>


          </Col>

        </Row>
      </div>
    </>
  );
};

export default DocumentVault;

