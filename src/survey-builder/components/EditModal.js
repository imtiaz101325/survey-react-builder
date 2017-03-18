import React, { Component, PropTypes } from 'react';
import {
  Button,
  Modal,
  Tab,
  Col, Row,
  Nav, NavItem,
  Form, FormGroup, FormControl, ControlLabel, Checkbox,
} from 'react-bootstrap';

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: Object.keys(this.props.options.options),
      options: this.props.options.options,
    }

    this.renderOptions = this.renderOptions.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
    this.hideAndUpdate = this.hideAndUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tabs: Object.keys(nextProps.options.options),
      options: nextProps.options.options,
    })
  }

  handleOptionsChange(event, nesting, option, type) {
    let value = null;

    switch (type) {
      case 'CHECKBOX':
        value = !this.state.options[nesting][option];
        break;
      default:
        value = event.target.value;
    }

    if (type === 'SELECT') {
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
    } else {
      this.setState({
        options: Object.assign({}, this.state.options, {
          [nesting]: Object.assign({}, this.state.options[nesting], {
            [option]: value,
          })
        })
      });
    }
  }

  renderOptions(options, nesting) {
    if (options) {
      return Object.keys(options).map(
        (option, key) => {
          const root = this.state.options[nesting][option];
          let value = this.state.options[nesting][option];

          if (root && root.value) {
            value = root.value;
          }

          if(root && root.options){
            return <FormGroup key={ nesting + key + option }>
                    <ControlLabel>{ option }</ControlLabel>
                    <FormControl componentClass="select"
                                 onChange={
                                   event =>
                                    this.handleOptionsChange(event, nesting, option, 'SELECT')
                                 }
                                 placeholder={ value }>
                      {
                        root.options.map(
                          lable => <option value={ lable }
                                           key={ option + lable }>{ lable }</option>
                        )
                      }
                    </FormControl>
                   </FormGroup>
          } else {
            const computedType = (typeof value === 'boolean') ? 'checkbox' : 'text';

            if(computedType === 'checkbox') {
              return <Checkbox checked={ value }
                               onChange={
                                 event =>
                                  this.handleOptionsChange(event, nesting, option, 'CHECKBOX')
                                }
                               key={ nesting + key + option }
                               >{ option }</Checkbox>
            }

            return <FormGroup key={ nesting + key + option }>
                     <ControlLabel>{ option }</ControlLabel>
                     <FormControl type={ computedType }
                                   value={
                                     value
                                   }
                                   onChange={
                                     event =>
                                        this.handleOptionsChange(event, nesting, option, 'TEXT')
                                      }
                                 />
                   </FormGroup>


          }
        }
      )
    }

    return [];
  }

  hideAndUpdate() {
    const nestedObj = this.state.options

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

  render() {

    const {
      visibility
    } = this.props;

    const {
      General,
      ...restProp,
    } = this.props.options.options;

    const filteredTabs = this.state.tabs.filter(
      key => (key !== 'General')
    );

    return (
       <div>
         <div>
          <Modal show={visibility}
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
                          <Form>
                            { this.renderOptions(General, 'General') }
                          </Form>
                        </Tab.Pane>
                        {
                          //TODO -- Handle options other than General
                          // filteredTabs.map(
                          //   name => <Tab.Pane eventKey={name}>
                          //             { this.renderOptions(restProp[name]) }
                          //           </Tab.Pane>
                          // )
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
          </Modal>
        </div>
        </div>
      )
  }
}

EditModal.propTypes = {
  visibility: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
}


export default EditModal;
