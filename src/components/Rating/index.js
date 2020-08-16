// import React, { useState } from 'react'
// import {
//     StyleSheet,
//     View,
//     Platform,
//     Text,
//     Image,
//     TouchableOpacity,
// } from 'react-native'
// import { Images } from '@constants';
// import styles from "./styles"
// export default function Rating(props) {
//     const [defaultRating, setDefaultRating] = useState(0);
//     const [maxRating, setMaxRating] = useState(5);
//     const [epmtyStar, setEmptyStar] = useState(Images.emptyStar);
//     const [filledStar, setFilledStar] = useState(Images.star);
//     function updateRating(key) {
//         setDefaultRating(key)
//         //Keeping the Rating Selected in state
//     }
//     let React_Native_Rating_Bar = [];
//     for (var i = 1; i <= maxRating; i++) {
//         React_Native_Rating_Bar.push(
//             <TouchableOpacity
//                 activeOpacity={0.7}
//                 key={i}
//                 onPress={() => updateRating(i)}>
//                 <Image
//                     style={styles.StarImage}
//                     source={
//                         i <= defaultRating
//                             ? Images.star
//                             : Images.emptyStar
//                     }
//                 />
//             </TouchableOpacity>
//         );
//     }
//     return (
//         <View style={styles.MainContainer}>
//             <Text style={styles.textStyle}>How was your experience with us</Text>
//             <Text style={styles.textStyleSmall}>Please Rate Us</Text>
//             {/*View to hold our Stars*/}
//             <View style={styles.childView}>{React_Native_Rating_Bar}</View>

//             <Text style={styles.textStyle}>
//                 {/*To show the rating selected*/}
//                 {defaultRating} / {maxRating}
//             </Text>

//             <TouchableOpacity
//                 activeOpacity={0.7}
//                 style={styles.button}
//                 onPress={() => alert(defaultRating)}>
//                 {/*Clicking on button will show the rating as an alert*/}
//                 <Text>Get Selected Value</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
import React, { Component } from 'react';
//import react in our code.
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from "./styles"
import { Images } from '@constants';
//import all the components we are going to use.

export default class Rating extends Component {
    constructor() {
        super();

        this.state = {
            //To set the default Star Selected
            default_Rating: 0,
            //To set the max number of Stars
            max_Rating: 5,
        };
    }
    componentWillMount() {
        const { rating } = this.props;
        this.setState({
            default_Rating: rating
        })
    }
    updateRating(key) {
        this.setState({ default_Rating: key });
        //Keeping the Rating Selected in state
    }
    render() {
        let React_Native_Rating_Bar = [];
        const { style } = this.props;
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.updateRating.bind(this, i)}>
                    <Image
                        style={style}
                        source={
                            i <= this.state.default_Rating
                                ? Images.star
                                : Images.emptyStar
                        }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.mainContainer}>

                <View style={styles.childView}>{React_Native_Rating_Bar}</View>

                {/* <Text style={styles.textStyle}>
                    {this.state.default_Rating} / {this.state.max_Rating}
                </Text> */}


            </View>
        );
    }
}