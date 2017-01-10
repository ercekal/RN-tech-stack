import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { item, selectedLibraryId } = this.props;

    if (item.id === selectedLibraryId) {
      return (
        <Text>
          {item.description}
        </Text>
      );
    }
  }

  render() {

    const { titleStyle } = styles;
    const { id, title, description } = this.props.item

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
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

mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
};

export default connect(mapStateToProps, actions)(ListItem);
