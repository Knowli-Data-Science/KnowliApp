import { React, useState } from 'react'

import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap'
import logo from "assets/img/Upload.png";
import { CiTextAlignCenter } from "react-icons/ci";
import { TfiList } from "react-icons/tfi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoFolderOutline } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { PiSparkle } from "react-icons/pi";
import { faClipboard } from '@fortawesome/free-solid-svg-icons';







const RedactionFormLg = ({ color, setSelectedEntities, setCustomRedactions, selectedEntities, customRedactions }) => {

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
        // Add more entities up to 16 as needed
    ]);


    const [newRedaction, setNewRedaction] = useState({ word: '', replacement: '' });

    // Handle entity checkbox toggle
    const toggleEntity = (id) => {
        setEntities(
            entities.map((entity) =>
                entity.id === id ? { ...entity, checked: !entity.checked } : entity
            )
        );
    };

    // Handle change in custom redaction fields
    const handleNewRedactionChange = (field, value) => {
        setNewRedaction({ ...newRedaction, [field]: value });
    };

    // Add a custom redaction
    const addCustomRedaction = () => {
        if (newRedaction.word && newRedaction.replacement) {
            setCustomRedactions([...customRedactions, newRedaction]);
            setNewRedaction({ word: '', replacement: '' });
        }
    };

    // Remove a redaction (either entity or custom)
    const removeRedaction = (item) => {
        if (item.id) {
            // Remove entity
            setEntities(
                entities.map((entity) =>
                    entity.id === item.id ? { ...entity, checked: false } : entity
                )
            );
        } else {
            // Remove custom redaction
            setCustomRedactions(
                customRedactions.filter(
                    (redaction) => redaction.word !== item.word && redaction.replacement !== item.replacement
                )
            );
        }
    };



    return (
        <div>

            <Label>Entities to redact</Label>
            <Row className="justify-content-start" style={{ marginLeft: '15px', marginRight: '-5px', marginBottom:"10px"}}>
                {entities.map((entity) => (
                    <Col lg="3" md="4" sm= "4" xs="6" key={entity.id} style={{ padding: '5px' }}>
                        <FormGroup style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1px' }}>
                            <Input
                                type="checkbox"
                                checked={entity.checked}
                                onChange={() => toggleEntity(entity.id)}
                                className="checkbox-check"
                                style={{ marginTop: '0px' }}
                            />
                            <Label style={{ margin: 0, whiteSpace: 'normal', maxWidth: '100%', lineHeight: '1.2', fontSize:"11px", color:"#0C80A4" }}>
                                {entity.label}
                            </Label>
                        </FormGroup>
                    </Col>
                ))}
            </Row>

            <FormGroup>
                <Label style={{ marginTop: 0}}>Custom redactions</Label>
                <Row form className="mb-2">
                    <Col md={5} sm={5} xs={5}>
                        <Input
                            type="text"
                            placeholder="Word to redact"
                            value={newRedaction.word}
                            onChange={(e) => setNewRedaction({ ...newRedaction, word: e.target.value })}
                            style={{background:"#eee"}}
                        />
                    </Col>
                    <Col md={5} sm={5} xs={5}>
                        <Input
                            type="text"
                            placeholder="Replacement word"
                            value={newRedaction.replacement}
                            onChange={(e) => setNewRedaction({ ...newRedaction, replacement: e.target.value })}
                            style={{background:"#eee"}}
                        />
                    </Col>
                    <Col md={2} sm={2} xs={2}>
                        <Button  className="btn-sm btn-primary" onClick={addCustomRedaction} >
                            Add
                        </Button>
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup style={{width:"95%", marginRight:"10"}}>
                <Label>Selected Redactions</Label>
                <div style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '4px',
                    minHeight: '80px',
                    maxHeight: '150px',
                    overflowY: 'auto',
                    background:"#eee"
                }}>
                    {entities
                        .filter((entity) => entity.checked)
                        .map((entity) => (
                            <div key={entity.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 0px' ,fontSize:12 }}>
                                <span>{entity.label}</span>
                                <Button  className="btn-xs" onClick={() => removeRedaction(entity.label)}>
                                    &times;
                                </Button>
                            </div>
                        ))}
                    {customRedactions.map((redaction, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
                            <span>
                                {redaction.word} - replace with {redaction.replacement}
                            </span>
                            <Button  className="btn-xs" onClick={() => removeRedaction(redaction.word)}>
                                &times;
                            </Button>
                        </div>
                    ))}
                </div>
            </FormGroup>



        </div>
    )
}

export default RedactionFormLg;






