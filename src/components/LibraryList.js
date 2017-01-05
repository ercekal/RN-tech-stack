import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.DataSource = ds.cloneWithRows(this.props.libraries);
  }

  render() {
    return(
      <ListView dataSourse={this.DataSource}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
