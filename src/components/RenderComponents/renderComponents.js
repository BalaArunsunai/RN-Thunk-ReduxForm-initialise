import React from 'react';
import {Text, View} from 'react-native';
import {CheckBox} from 'native-base';
import CustomTextInput from '../CustomTextInput/customTextInput';
// import CustomDateTimePicker from '../CustomDateTimePicker/CustomDateTimePicker';
// import CustomDropdown from '../CustomDropDown/CustomDropDown';
// import CustomCheckBoxes from '../../components/CustomCheckBoxes/CustomCheckBoxes';
// import CustomRadioButton from '../../components/CustomRadioButton/CustomRadioButton';

// import AutoSuggestFilter from '../../components/AutoSuggestFilter/AutoSuggestFilter';

// import styles from '../../../App.StyleSheet';

export const renderFieldInput = ({
  editFlag,
  label,
  keyboardType,
  name,
  optionalLabel,
  placeholder,
  noBorderStyle,
  bottomError,
  meta,
  placeHolderColor,
  input: {onChange, value, ...restInput},
  ...props
}) => {
  return (
    <View>
      <CustomTextInput
        editFlag={editFlag}
        labelText={label}
        optionalLabelText={optionalLabel}
        onChangeTextCustom={onChange}
        placeholderCustom={placeholder}
        noBorder={noBorderStyle}
        name={name}
        meta={meta}
        keyboardType={keyboardType}
        value={value}
        bottomErrorCustom={bottomError}
        placeHolderColor={placeHolderColor}
        {...restInput}
        {...props}
      />
    </View>
  );
};

// export const renderFieldDropdown = ({
//   label,
//   placeholder,
//   name,
//   noBorderStyle,
//   options,
//   enabledValue,
//   optionalLabel,
//   bottomError,
//   meta,
//   input: {onChange, value, ...restInput},
// }) => {
//   return (
//     <View>
//       <CustomDropdown
//         labelText={label}
//         enabledValue={enabledValue}
//         optionalLabelText={optionalLabel}
//         pickerBorder={noBorderStyle}
//         placeholder={placeholder}
//         name={name}
//         meta={meta}
//         options={options}
//         currentValue={value}
//         onChangeText={onChange}
//         bottomErrorCustom={bottomError}
//       />
//     </View>
//   );
// };

// export const renderFieldDatePicker = ({
//   label,
//   name,
//   minDate,
//   maxDate,
//   placeholder,
//   dateDisabled,
//   mode,
//   meta,
//   backgroundWhite,
//   input: {onChange, value, ...restInput},
// }) => {
//   return (
//     <View>
//       <CustomDateTimePicker
//         label={label}
//         placeholderCustom={placeholder}
//         value={value}
//         name={name}
//         minDateCustom={minDate}
//         maxDateCustom={maxDate}
//         dateDisabledCustom={dateDisabled}
//         onDateChange={onChange}
//         mode={mode}
//         meta={meta}
//         colorWhite={backgroundWhite}
//         {...restInput}
//       />
//     </View>
//   );
// };

// export const renderFieldRadioButton = ({
//   label,
//   options,
//   meta,
//   radioDirection,
//   disable,
//   input: {onChange, value, ...restInput},
// }) => {
//   return (
//     <View>
//       <Text style={styles.basicInfoText}>
//         {label}
//         {meta.touched &&
//           ((meta.error && (
//             <Text style={styles.requiredPropsMessage}> - ( {meta.error} )</Text>
//           )) ||
//             (meta.warning && (
//               <Text style={styles.warningPropsMessage}>
//                 - ( {meta.warning} )
//               </Text>
//             )))}
//       </Text>
//       <CustomRadioButton
//         radioDirection={radioDirection}
//         options={options}
//         selectedValue={value}
//         clickEvent={onChange}
//         meta={meta}
//         disable={disable}
//         {...restInput}
//       />
//     </View>
//   );
// };

// export const renderFieldCheckBoxes = ({
//   label,
//   name,
//   options,
//   meta: {touched, error, warning},
//   input: {onChange, value, ...restInput},
// }) => {
//   return (
//     <View>
//       <CustomCheckBoxes
//         label={label}
//         name={name}
//         options={options}
//         checkedCustom={value}
//         onPressChecked={onChange}
//         {...restInput}
//       />
//       {touched &&
//         ((error && <Text style={styles.requiredPropsMessage}>{error}</Text>) ||
//           (warning && <Text style={styles.warningProps}>{warning}</Text>))}
//     </View>
//   );
// };

// export const renderFieldCheckBox = ({
//   meta: {touched, error, warning},
//   input: {onChange, value, ...restInput},
//   name,
//   label,
//   withoutLabel,
//   noEdit,
// }) => {
//   return (
//     <View>
//       {withoutLabel ? null : (
//         <Text style={styles.checkBoxWithoutLabel}>{label}</Text>
//       )}
//       <CheckBox
//         name={name}
//         color={noEdit ? '#6E6E6E' : '#69BE29'}
//         checked={value === 1 || value === true ? true : false}
//         onPress={() => onChange(!value)}
//         {...restInput}
//         disabled={noEdit ? true : false}
//       />
//     </View>
//   );
// };

// export const renderFieldAutoCompleteFilter = ({
//   noEdit,
//   label,
//   name,
//   optionalLabel,
//   placeholder,
//   options,
//   customStyle,
//   meta,
//   keyboardType,
//   show,
//   cancel,
//   select,
//   visible,
//   input: {onChange, value, ...restInput},
// }) => {
//   return (
//     <View>
//       <AutoSuggestFilter
//         noEdit={noEdit}
//         keyboard={keyboardType}
//         labelText={label}
//         name={name}
//         optionalLabelText={optionalLabel}
//         placeholder={placeholder}
//         options={options}
//         customStyles={customStyle}
//         meta={meta}
//         query={value} // TODO: to integrate with redux-form
//         onChangeCustom={onChange} // TODO: to integrate with redux-form
//         show={show}
//         cancel={cancel}
//         select={select}
//         visible={visible}
//         {...restInput}
//       />
//     </View>
//   );
// };