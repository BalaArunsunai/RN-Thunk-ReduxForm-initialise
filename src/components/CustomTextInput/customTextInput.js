import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';

function CustomTextInput({
  editFlag,
  labelText,
  onChangeTextCustom,
  keyboardType,
  name,
  type,
  query,
  value,
  noBorder,
  placeHolderColor,
  optionalLabelText,
  meta: {touched, error, warning},
  bottomErrorCustom,
  ...props
}) {
  return (
    <>
      {labelText && (
        <Text style={styles.basicInfoText}>
          {labelText}
          {optionalLabelText && <Text> (Optional)</Text>}
          {touched && !bottomErrorCustom
            ? (error && (
                <Text style={styles.requiredPropsMessage}> - ( {error} )</Text>
              )) ||
              (warning && (
                <Text style={styles.warningPropsMessage}> - ( {warning} )</Text>
              ))
            : undefined}
        </Text>
      )}
      <TextInput
        style={[
          editFlag ? styles.noeditStyle : styles.input,
          props.multiline && props.multiline ? styles.multilineInput : '',
          noBorder ? {borderWidth: 0} : {borderWidth: 1},
          touched &&
            ((error && styles.requiredProps) ||
              (warning && styles.warningProps)),
        ]}
        onChangeText={valueText => onChangeTextCustom(valueText)}
        keyboardType={keyboardType}
        value={value}
        placeholder={props.placeholderCustom}
        placeholderTextColor={placeHolderColor ? '#000' : ''}
        {...props}
        editable={editFlag ? false : true}
      />
      {touched && bottomErrorCustom
        ? (error && <Text style={styles.requiredPropsMessage}>{error}</Text>) ||
          (warning && <Text style={styles.warningPropsMessage}>{warning}</Text>)
        : undefined}
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    // fontFamily: 'roboto-regular',
    fontSize: 16,
    height: 40,
    borderColor: '#8B8B8B',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  noeditStyle: {
    // fontFamily: 'roboto-regular',
    fontSize: 16,
    height: 40,
    borderColor: '#8B8B8B',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
    paddingHorizontal: 5,
    backgroundColor: '#F5F5F5',
  },
  basicInfoText: {
    color: '#8B8B8B',
  },
  requiredPropsMessage: {
    color: 'red',
    position: 'relative',
    top: -8,
  },
  requiredProps: {
    borderColor: 'red',
  },
  warningProps: {
    borderColor: 'orange',
  },
  warningPropsMessage: {
    color: 'orange',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

const mapStateToProps = state => {
  const {config} = state;
  return {config};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomTextInput);