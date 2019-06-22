import React, { Component } from 'react';

import { List } from '@material-ui/core';

import { Add, PlaceTwoTone } from '@material-ui/icons';
import { Header, HeaderControl, PrimaryButton, Modal } from '../../presentational';
import PlaceService from './PlaceService';
import PlaceCreate from './PlaceCreate';
import PlaceItem from './PlaceItem';
import Skeleton from 'react-loading-skeleton';


class PlaceList extends Component {
  
  state = {
    modal: false,
    places: []
  }

  _setPlace = () => {

    PlaceService.getAll(res => {
      try {
        this.setState({ places: res });
      }
      catch (err) {
        console.log(err);
      }
    });
  }

  _deletePlace = (id, e) => {
    PlaceService.delete(id);
    this._setPlace();
  }

  _toggleModal = () => {
    this.setState({modal: !this.state.modal})
  }
  
  componentDidMount = () => {
    this._setPlace();
  }

  render() {

    const skeleton = () => {

      const size = Math.floor(Math.random() * 10);
      const array = [];

      
      for(let i=0; i<size; i++) {
        
        array.push(
          <div  key={i}
                style={{ margin: 24, width: 300 }}>
            <Skeleton count={2} />
          </div>
        );

      }

      return array;
    }

    return (
      <div>
        <Header icon={<PlaceTwoTone />} title="Lugares">
          <HeaderControl>
              <PrimaryButton icon={<Add />} title="Criar" gridSize={7} action={this._toggleModal} />
          </HeaderControl>
        </Header>

        <List style={{ marginTop: 24}}>
          {(this.state.places.length !== 0) ? this.state.places.map((el) => (
              <PlaceItem  key={el.key}
                          id={el.key}
                          title={el.data.title}
                          date={el.data.creationTime}
                          onDelete={this._deletePlace} />
          )) : skeleton() }
        </List>

        {/* MODAL */}
        <Modal open={this.state.modal} action={this._toggleModal}>
          <PlaceCreate />
        </Modal>
      </div>
    )
  }
}

export default PlaceList;