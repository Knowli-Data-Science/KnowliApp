/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { React, useState } from "react";

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
import CustomTable from "views/components/CustomTable";
import CustomTablePg from "views/components/CustomTablePg";
import { IoFolderOutline } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThin, faEye } from '@fortawesome/free-solid-svg-icons'
import icons from 'variables/icons';

import ReactTable from "components/ReactTable/ReactTable.js"


const DocumentChat = () => {
  const [searchTerm, setSearchTerm] = useState("");


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
 



  return (
    <>
      <div className="content" style={{height: "100vh"}}>

        <Row >
          <Col md="8">
            <div className="header text-left" style={{marginLeft:"10%",marginBottom:0, marginTop:0 ,paddingTop:0}}>
              <h4  style={{color:"#19AECA",fontWeight:'400', letterSpacing:.15,fontFamily:"Helvetica"}}><i className={"tim-icons " + icons[24].name} style={{color:"#19AECA",marginRight:10 , marginLeft:"-10%", fontWeight:400, letterSpacing:.15,}}/>  Document Chat</h4>
            </div>
            <Card className="card-timeline card-plain scroll-column" style={{marginTop:0,paddingTop:0, height:"73vh"}}>
              <CardBody >
                <ul className="timeline">

                  <li className="timeline-inverted">
                    <div className="timeline-badge">
                      <i className="tim-icons icon-archive" />
                    </div>
                    <div className="timeline-panel" >
                      {/* <div className="timeline-heading">
                        <Badge color="danger" pill>
                          Some Title Again
                        </Badge>
                      </div> */}
                      <div className="timeline-body" >
                        <p className="timeline-white-text">
                          Wifey made the best Father's Day meal ever. So
                          thankful so happy so blessed. Thank you for making my
                          family We just had fun with the “future” theme !!! It
                          was a fun night all together ... The always rude Kanye
                          Show at 2am Sold Out Famous viewing @ Figueroa and
                          12th in downtown.
                        </p>
                      </div>
                      <h6>
                        <i className="ti-time" />
                        11 hours ago via FaceBook
                      </h6>
                    </div>
                  </li>
                  <li >
                    {/* <div className="timeline-badge success">
                      <i className="tim-icons icon-user-run" />
                    </div> */}
                    <div className="timeline-panel">
                      {/* <div className="timeline-heading">
                        <Badge color="success" pill>
                          Another One
                        </Badge>
                      </div> */}
                      <div className="timeline-body">
                        <p className="timeline-black-text">
                          Thank God for the support of my wife and real friends.
                          I also wanted to point out that it’s the first album
                          to go number 1 off of streaming!!! I love you Ellen
                          and also my number one design rule of anything I do
                          from shoes to music to homes is that Kim has to like
                          it....
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge">
                      <i className="tim-icons icon-notes" />
                    </div>
                    <div className="timeline-panel">
                      {/* <div className="timeline-heading">
                        <Badge color="info" pill>
                          Another Title
                        </Badge>
                      </div> */}
                      <div className="timeline-body">
                        <p className="timeline-white-text">
                          Called I Miss the Old Kanye That’s all it was Kanye
                          And I love you like Kanye loves Kanye Famous viewing @
                          Figueroa and 12th in downtown LA 11:10PM
                        </p>
                        <p className="timeline-white-text">
                          What if Kanye made a song about Kanye Royère doesn't
                          make a Polar bear bed but the Polar bear couch is my
                          favorite piece of furniture we own It wasn’t any
                          Kanyes Set on his goals Kanye
                        </p>
                        <hr />
                      </div>
                      <div className="timeline-footer">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-round"
                            color="info"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="tim-icons icon-settings-gear-63" />{" "}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </li>
                  <li >
                    {/* <div className="timeline-badge">
                      <i className="tim-icons icon-gift-2" />
                    </div> */}
                    <div className="timeline-panel">
                      {/* <div className="timeline-heading">
                        <Badge color="warning" pill>
                          Another One
                        </Badge>
                      </div> */}
                      <div className="timeline-body">
                        <p className="timeline-black-text">
                          Tune into Big Boy's 92.3 I'm about to play the first
                          single from Cruel Winter also to Kim’s hair and makeup
                          Lorraine jewelry and the whole style squad at Balmain
                          and the Yeezy team. Thank you Anna for the invite
                          thank you to the whole Vogue team
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                
              </CardBody>
              
            </Card>
            <Row className="align-items-center" style={{ flexWrap: "nowrap" }}>
              <Col xs="9" sm="10" md="10" style={{ marginLeft: "5%" }}>
              <Input className="chat-input" style={{margin: "auto",height: "100px", marginBottom:"30px",marginTop:"-20px",width:"100%", marginLeft:20}} type="textarea" placeholder="Type a message"></Input>
              </Col>
              <Col xs="3" sm="2" md="1" style={{ display: "flex", justifyContent: "center", alignItems: "center" , marginLeft:"-5px", marginTop:"-40px" }}>
                    <i className="tim-icons icon-send" style={{color:"#777", fontSize:"30px", opacity:.7, fontWeight:"100", alignItem:"center", marginTop:0}}></i>
            </Col>
            </Row>
          </Col>
          <Col className="text-center document-display" md="4" >
          <div className="header text-left" style={{marginLeft:"10%",marginBottom:"6%"}}>
          <h4 style={{marginBottom:"-20px", paddingBottom:10, marginLeft:-30, fontWeight:400, letterSpacing:.15, color:"334572",fontFamily:"Helvetica"}}><IoFolderOutline style={{marginRight:10}}/>Assistant Document Collection</h4>
             
          </div>
            <Card className="card-tasks text-left" style={{background: `linear-gradient(to bottom, #344675 0%, #263148 100%)`,height:"45vh",borderBottomRightRadius:"15px"}}>
              <CardHeader>
                <Row>
                  <Col lg="6" md="5" sm="6" Style={{marginRight:0,paddingRight:0}}>
                
                <h6 className="d-inline " style={{color:'white', opacity:.9, fontSize:"14px", letterSpacing:'.11',fontWeight:300}}>NOELLE'S DOCUMENTS</h6>
                </Col>
                <Col lg="6" md="7" sm="6">
                <InputGroup>
                <Input placeholder="Search" 
                        className="input-gray-placeholder input-gray-text"  
                        style={{paddingLeft:"10px"}}
                        onChange={(e)=>setSearchTerm(e.target.value)}>
                  </Input>
                  <InputGroupAddon addonType="append" className="input-gray-text">
                      <InputGroupText>
                      <i className="tim-icons icon-zoom-split input-gray-text" style={{paddingRight:0}}></i>
                      </InputGroupText>
                  </InputGroupAddon>
                  
              </InputGroup>
                </Col>
                </Row>
                
              </CardHeader>
              <CardBody className="scroll-column"style={{borderBottomRightRadius:"50px"}}>
                {/* <div className="table-responsive scroll-column" style={{borderBottomRightRadius:"50px"}}> */}
                  {/* <Table Style={{borderBottomRightRadius:"50px"}} className="table-text">
                    <th className="text-left" style={{color:'white'}}>DOCUMENT</th>
                    <th className="text-center"style={{color:'white'}}>TYPE</th>
                    <th style={{color:'white'}}>VIEW</th>
                    <tbody>
                      <tr>
                        <td className="text-left" >
                          <p style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons"style={{color:"#ccc"}}/>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left" >
                          <p style={{color:'white', fontWeight:'100'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons"style={{color:"#ccc"}}/>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left" >
                          <p style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons"style={{color:"#ccc"}}/>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left" >
                          <p style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons"style={{color:"#ccc"}}/>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>

                       
                        <td className="text-left">
                          <p  style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons" style={{color:"#ccc"}}/>
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>

                       
                        <td className="text-left">
                          <p  style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                          <FontAwesomeIcon icon={faEye} className="tim-icons" style={{color:"#ccc"}} />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>

                       
                        <td className="text-left">
                          <p  style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons" style={{color:"#ccc"}} />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>

                       
                        <td className="text-left">
                          <p  style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p  style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons" style={{color:"#ccc"}} />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>

                       
                        <td className="text-left">
                          <p style={{color:'white'}}>Florida State Wheelchair</p>
                         
                        </td>
                        <td className="text-center">
                          <p style={{color:'white'}}>PDF</p>
                          
                        </td>
                        <td className="td-actions">
                          <Button
                            color="link"
                            id="tooltip141118598"
                            title=""
                            type="button"
                          >
                            <FontAwesomeIcon icon={faEye} className="tim-icons" style={{color:"#ccc"}} />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip141118598"
                          >
                            View
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table> */}
                {/* </div> */}
                <CustomTablePg columns={columns} data={data} searchTerm={searchTerm} />
              </CardBody>
            </Card>
            <div></div>
            <Card className="card-tasks text-left" style={{background: `linear-gradient(to bottom, #344675 0%, #263148 100%)`,height:"37vh",borderBottomRightRadius:"15px"}}>
              <CardHeader>
                <Row>
                  <Col md="10" Style={{marginRight:0,paddingRight:0}}>
                
                <h6 className="d-inline text-center" style={{color:'white', opacity:.9,  fontSize:"14px", letterSpacing:'.11',fontWeight:300}}>REFERENCED DOCUMENTS</h6>
                </Col>
  
                <Col md="2">
                <UncontrolledDropdown>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="link"
                    data-toggle="dropdown"
                    id="dropdownMenuLink"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      عم
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      عمل آخر
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      شيء آخر هنا
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </Col>
                </Row>
              </CardHeader>
            <CardBody className="scroll-column"style={{borderBottomRightRadius:"50px"}}>
                {/* <div className="table-responsive scroll-column" style={{borderBottomRightRadius:"50px"}}> */}
                    <CustomTable columns={columns} data={data.slice(2,4)}/>
                {/* </div> */}
              </CardBody>
            </Card>
      
              </Col>
        </Row>
      </div>
    </>
  );
};

export default DocumentChat;
