import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    console.log("renderDescription fired");
    if (library.item.id === selectedLibraryId) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
    return null;
  }

  render() {
    const { titleStyles } = styles;
    const { id, title } = this.props.library.item;
    console.log('Rendered, id=' + id);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id, this.props.selectedLibraryId)}
      >
        <View>
          <CardSection>
            <Text style={titleStyles}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
          {/* <Text>{description}</Text> */}

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

const mapStateToProps = (state) => {
  return { selectedLibraryId: state.selectedLibraryId };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onListItemPress: (id, selectedLibraryId) => {
//       dispatch(actions.selectLibrary(id, selectedLibraryId));
//     }
//   };
// };

export default connect(mapStateToProps, actions)(ListItem);
