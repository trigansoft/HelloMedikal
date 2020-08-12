/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    View,
    Image,
} from 'react-native';
import styles from "./styles"
import {Images} from '@constants';

export default function Logo(props) {
    return (
        <View style={styles.imageContainer}>
          <Image source={Images.logo} />
       </View>
    )

}