import React, { useContext, } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

import osContext from '../context/osContext';
import defaultStyles, { colors, } from '../style/theme';


const Header = props => {
  const os = useContext(osContext);
  
  return (
    <View style = {styles.headerView}>
      <Text style = {styles.headerText}>
        {`${props.title} ${os}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    
    height: 90,
    width: '100%',
    paddingTop: 30,

    backgroundColor: colors.primary,
  },
  headerText: {
    ...defaultStyles.text,
    color: colors.background1,
    fontSize: 20,
  },
});

export default Header;