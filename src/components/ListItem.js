import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  render() {

    const { titleStyle } = styles;
    const { id, title } = this.props.item
    console.log(id);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text>{this.props.item.title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, actions)(ListItem);
