import React, { Component, PropTypes } from 'react';
import {
  Button,
  Modal,
  Tab,
  Col, Row,
  Nav, NavItem,
} from 'react-bootstrap';

import EditGeneralOptions from './EditGeneralOptions';
import EditChoices from './EditChoices';
import EditVisibleIf from './EditVisibleIf';
import EditValidators from './EditValidators';
import EditCompletedHtml from './EditCompletedHtml';

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options.options,
      status: 'INITIAL'
    }

    this.handleOptionsChange = this.handleOptionsChange.bind(this);
    this.hideAndUpdate = this.hideAndUpdate.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleEditOption = this.handleEditOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddValidator = this.handleAddValidator.bind(this);
    this.handleEditValidator = this.handleEditValidator.bind(this);
    this.handleRemoveValidator = this.handleRemoveValidator.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      options: nextProps.options.options,
    })
  }

  handleOptionsChange(event, nesting, option, type) {
    let value = null;

    if (type === 'CHECKBOX') {
        value = !this.state.options[nesting][option];
    } else {
        value = event.target.value;
    }

    switch (type) {
      case 'SELECT':
        this.setState({
          options: Object.assign({}, this.state.options, {
            [nesting]: Object.assign({}, this.state.options[nesting], {
              [option]: {
                value: value,
                options: this.state.options[nesting][option].options,
              }
            })
          })
        });
        break;
      case 'TEXTAREA':
        this.setState({
          options: Object.assign({}, this.state.options, {
            [nesting]: value
          })
        });
        break;
      default:
        this.setState({
          options: Object.assign({}, this.state.options, {
            [nesting]: Object.assign({}, this.state.options[nesting], {
              [option]: value,
            })
          })
        });
        break;
    }
  }

  hideAndUpdate() {
    const nestedObj = this.state.options;

    const camleCase = Object.keys(nestedObj)
            .filter( key => (key !== 'General'))
            .map(
              key => (key.split(' ')
                  .map( (splitKey, key) => {
                    if(key === 0) {
                      return splitKey.toLowerCase()
                    }

                    return splitKey.toLowerCase()
                                   .split('')
                                   .map(
                                     (letter, key) => {
                                       if(key === 0){
                                         return letter.toUpperCase();
                                       }

                                       return letter;
                                     }
                                   ).join('')
                  }).join('') + '---' + key)
            ).reduce(
              (acc, curr) => {
                return Object.assign(
                  acc, {
                    [curr.split('---')[0]]: nestedObj[curr.split('---')[1]]
                  }
                )
              }, {}
            );

        this.props.onHide({
          options: Object.assign(
            {}, nestedObj.General, camleCase
          ),
          type: this.props.options.type,
          id: this.props.options.selected,
        });
  }

  handleRemoveOption(removeKey) {
    if (this.state.options.Choices) {
      this.setState({
        options: Object.assign({}, this.state.options, {
          Choices: this.state.options.Choices.filter( (item, key) => (key !== removeKey ))
        })
      });
    }
  }

  handleEditOption(editText, editValue, editKey) {
    if (this.state.options.Choices) {
      this.setState({
        options: Object.assign({}, this.state.options, {
          Choices: this.state.options.Choices.map(
            ({text, value}, key) => {
              if(key === editKey) {
                return {
                  text: editText,
                  value: editValue,
                }
              }

              return { text, value };
            })
        })
      });
    }
  }

  handleAddOption() {
    if (this.state.options.Choices) {
      this.setState({
        options: Object.assign({}, this.state.options, {
          Choices: [
            ...this.state.options.Choices,
            {
              value: this.state.options.Choices.length + 1,
              text: 'new item'
            }
          ]
        })
      });
    }
  }

  handleRemoveAll(option) {
    if (this.state.options[option]) {
      this.setState({
        options: Object.assign({}, this.state.options, {
          [option]: []
        })
      });
    }
  }

  handleAddValidator(key) {
    if (this.state.options.Validators) {

      let validator = null;

      switch (key) {
        case '1':
          validator = {
           type: 'numeric',
           maxValue: '',
           minValue: '',
           text: '',
          }
          break;
        case '2':
          validator = {
           type: 'text',
           maxLength: '',
           minLength: '',
           text: '',
          }
          break;
        case '3':
          validator = {
           type: 'answercount',
           maxCount: '',
           minCount: '',
           text: '',
          }
          break;
        case '4':
          validator = {
           type: 'regex',
           regex: '',
           text: '',
          }
          break;
        case '5':
          validator = {
           type: 'email',
           text: '',
          }
          break;
        default:
          break;
      }

      this.setState({
        options: Object.assign({}, this.state.options, {
          Validators: [
            ...this.state.options.Validators,
            validator
          ]
        })
      });
    }
  }

  handleEditValidator(editValue, editField, editKey) {
    if (this.state.options.Validators) {
      this.setState({
        options: Object.assign({}, this.state.options, {
          Validators: this.state.options.Validators.map(
            (options, key) => {
              if(key === editKey) {
                return Object.assign({}, options,
                  { [editField]: editValue }
                )
              }
              return options;
            })
        })
      });
    }
  }

  handleRemoveValidator(removeKey) {
    if (this.state.options.Validators) {
      this.setState({
        options: Object.assign({}, this.state.options, {
          Validators: this.state.options.Validators.filter( (item, key) => (key !== removeKey ))
        })
      });
    }
  }

  render() {
    const filteredTabs = Object.keys(this.state.options)
                               .filter( key => (key !== 'General'));
    return (
      <Modal show={this.props.visibility}
         onHide={
           this.hideAndUpdate
         } >
        <Modal.Header closeButton>
          <Modal.Title>Edit Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tab.Container id="EditModalTabs" defaultActiveKey="general">
            <Row className="clearfix">
              <Col sm={12}>
                <Nav bsStyle="tabs">
                  <NavItem eventKey="general" key="general">
                    General
                  </NavItem>
                  {
                    filteredTabs.map(
                      name => <NavItem eventKey={ name } key={ name }>
                                {name}
                              </NavItem>
                    )
                  }
                </Nav>
              </Col>
              <Col sm={12}>
                <Tab.Content animation>
                  <Tab.Pane eventKey="general">
                    <EditGeneralOptions options={ this.state.options }
                                        handleSelect={ this.handleOptionsChange }/>
                  </Tab.Pane>
                  {
                    filteredTabs.map(
                      name => {
                        switch (name) {
                          case 'Choices':
                            return <Tab.Pane eventKey={name} key={ name }>
                              <EditChoices options={ this.state.options.Choices }
                                           addOption={ this.handleAddOption }
                                           removeAll={ this.handleRemoveAll }
                                           removeOption={ this.handleRemoveOption }
                                           editOption={ this.handleEditOption }
                                           handleSelect={ this.handleOptionsChange }/>
                            </Tab.Pane>
                          case 'Visible If':
                            return  <Tab.Pane eventKey={name} key={ name }>
                              <EditVisibleIf value={ this.state.options[name] }
                                             name={ name }
                                             action={ this.handleOptionsChange } />
                            </Tab.Pane>
                          case 'Completed HTML':
                            return  <Tab.Pane eventKey={name} key={ name }>
                              <EditCompletedHtml value={ this.state.options[name] }
                                                 name={ name }
                                                 action={ this.handleOptionsChange } />
                            </Tab.Pane>
                          case 'Validators':
                            return <Tab.Pane eventKey={name} key={ name }>
                              <EditValidators options={ this.state.options.Validators }
                                              addValidator={ this.handleAddValidator }
                                              editValidator={ this.handleEditValidator }
                                              removeAll={ this.handleRemoveAll }
                                              removeValidator={ this.handleRemoveValidator } />
                            </Tab.Pane>
                          default:
                            return null;
                        }
                      })
                  }
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={
            this.hideAndUpdate
          }>Close</Button>
        </Modal.Footer>
     </Modal> )
  }
}

EditModal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
}


export default EditModal;
