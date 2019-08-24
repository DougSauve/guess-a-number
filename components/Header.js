import React, { useContext, } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

import osContext from '../context/osContext';
import theme from '../style/theme';


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

    backgroundColor: theme.primary,
  },
  headerText: {
    color: theme.background1,
    fontSize: 20,
  },
});

export default Header;