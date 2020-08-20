import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {changeName} from '../../redux/action/loginAction';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import styles from '../../../appStylesheet';

import {
    renderFieldInput,
    renderFieldDropdown,
  } from '../../components/RenderComponents/renderComponents';

function LoginScreen(props){
    const {handleSubmit, change} = props;
    function handleClick(){
        change('userName', 'Hello')
        props.changeName('InfoCruise');
    }

    function handleSave(values){
        alert(values.userName);
    }

    return(
        <View style={loginStyles.container}>
        <Text>Sales Mobile Application with Redux</Text>
         <Text>{props.loginReducer.isSideBar}</Text>
                  <TouchableOpacity
                    onPress={() => handleClick()}
                    >
                    <Text >
                      Click 
                    </Text>
                  </TouchableOpacity>
                  
                  <Field
                  keyboardType="default"
                  placeholder="Please Enter Name"
                //   noBorderStyle
                  component={renderFieldInput}
                  placeholderTextColor={'#000'}
                  name="userName"
                //   validate={[
                //     requiredField,
                //     minLength5,
                //     maxLength25,
                //     checkSpecialChar,
                //   ]}
                  bottomError
                />
                <TouchableOpacity
                style={[loginStyles.box, styles.themeBorderColor]}
                    onPress={handleSubmit(handleSave)}
                    >
                    <Text >
                      Click  for changes of Form
                    </Text>
                  </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    );
}

const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      borderWidth: 1,
      padding:'2%',
    }
  });

  const mapStateToProps = state => {
    const {loginReducer} = state;
    return {loginReducer};
  };
  
  const mapDispatchToProps = {
    changeName,
  };
  
  const FormDecoratedComponent = reduxForm({
    form: 'login',
  })(LoginScreen);
  
  const ConnectedAndFormDecoratedComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FormDecoratedComponent);
  
export default ConnectedAndFormDecoratedComponent;