/* eslint-disable max-len */
/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

class Delete extends Component {

  state = {
    confirm: false,
    showModal: false,
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  confirm = () => {
    const url = '/api/close';
    axios.put(url)
    .then(({ data }) => {
      const { success } = data;
      if (success === true) {
        const cookies = new Cookies();
        cookies.remove('access_token', { path: '/' });
        global.socket.disconnect();
        this.setState({ showModal: false, confirm: true });
      }
    })
    .catch(err => console.error('Error: ', err));
  }

  render() {
    const { showModal, confirm } = this.state;

    if (confirm) { return <Redirect to="/close" />; }
    return (
      <div>
        <Button onClick={this.open}>
          Delete my account
        </Button>
        <Modal show={showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Delete my account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Deleting your account will disable your profile and remove your name, details and photos.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.confirm}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Delete;
