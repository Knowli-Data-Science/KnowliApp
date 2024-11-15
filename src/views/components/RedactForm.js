import React, { useState } from 'react';
import { FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import {Table} from 'reactstrap'
import logo from "assets/img/Upload.png";

const RedactionForm = ({color, setSelectedEntities, setCustomRedactions, selectedEntities, customRedactions}) => {
  const [entities, setEntities] = useState([
    { id: 1, label: 'Name', checked: false },
    { id: 2, label: 'Social Security Number', checked: false },
    { id: 3, label: 'Date of birth', checked: false },
    { id: 4, label: 'Address', checked: false },
    { id: 5, label: 'Name1', checked: false },
    { id: 6, label: 'Social Security Number1', checked: false },
    { id: 7, label: 'Date of birth1', checked: false },
    { id: 8, label: 'Address1', checked: false },
    { id: 9, label: 'Phone Number', checked: false },
    { id: 10, label: 'Email', checked: false },
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
    <div style={{ borderRadius: '8px', marginTop:0}}>
    <div className="custom-white" style={{ paddingLeft: '20px' ,paddingRight:"15px",padddingTop:"0px", marginTop:0 }}>
    <Label className="custom-white">Entities to redact</Label>
    <Label>Entities to redact</Label>
            <Row className="justify-content-start" style={{ marginLeft: '15px', marginRight: '-5px' }}>
                {entities.map((entity) => (
                    <Col lg="4" md="4" sm= "4" xs="6" key={entity.id} style={{ padding: '5px' }}>
                        <FormGroup style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '3px' }}>
                            <Input
                                type="checkbox"
                                checked={entity.checked}
                                onChange={() => toggleEntity(entity.id)}
                                className="checkbox-check"
                                style={{ marginTop: '1px' }}
                            />
                            <Label style={{ margin: 0, whiteSpace: 'normal', maxWidth: '100%', lineHeight: '1.2', fontSize:"11px" ,color:"white"}}>
                                {entity.label}
                            </Label>
                        </FormGroup>
                    </Col>
                ))}
            </Row>
    </div>

      <FormGroup>
        <Label className="custom-white" style={{ marginTop: '1rem' }}>Custom redactions</Label>
        <Row form className="mb-2">
          <Col md={5}>
            <Input
            className='custom-white'
              type="text"
              placeholder="Redact"
              value={newRedaction.word}
              onChange={(e) => handleNewRedactionChange('word', e.target.value)}
            />
          </Col>
          <Col md={5}>
            <Input
            className='custom-white'
              type="text"
              placeholder="Replacement"
              value={newRedaction.replacement}
              onChange={(e) => handleNewRedactionChange('replacement', e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button  className='btn-xs btn-green' onClick={addCustomRedaction}>
              Add
            </Button>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup>
        <Label className='custom-white'>Selected Redactions</Label>
        <div style={{
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '4px',
          minHeight: '80px',
          maxHeight: '150px',
          overflowY: 'auto'
        }}>
          {entities
            .filter((entity) => entity.checked)
            .map((entity) => (
              <div key={entity.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 0',color:"#525f7f" }}>
                <span className='custom-white' style={{fontSize:"12px"}}>{entity.label}</span>
                <Button color="primary" className='btn-xs-x' onClick={() => removeRedaction(entity)}>
                  &times;
                </Button>
              </div>
            ))}
          {customRedactions.map((redaction, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 0',color:"#525f7f" }}>
              <span className="custom-white" style={{fontSize:"12px"}}>
                {redaction.word} - replace with {redaction.replacement}
              </span>
              <Button color="primary" className='btn-xs-x' onClick={() => removeRedaction(redaction)}>
                &times;
              </Button>
            </div>
          ))}
        </div>
      </FormGroup>


    </div>
  );
};

export default RedactionForm
  