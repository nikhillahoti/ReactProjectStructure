import React, {Component} from 'react';
import {Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SingleRecordView extends Component {

    render(){
        if(this.props.record.description.length > 100){
            this.props.record.description = this.props.record.description.substring(0, 100) + "..."; 
        }

        return (
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <FontAwesome 
                        size={48}
                        name="rss"
                        color="black"
                    />
                </View>
                <View style={styles.mainContentContainer}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.sourceName}>{this.props.record.type}</Text>
                        <Text style={styles.distance}>{this.props.record.distance}</Text>
                    </View>
                    <Text style={styles.Content}>{this.props.record.description}</Text>
                    <Text style={styles.timeFont}>{this.props.record.datetime}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    mainContentContainer: {
        flex: 5,
        flexDirection: 'column',
        margin: 5
    },
    imageContainer: {
        flex: 1,
        textAlign: 'right',
        marginLeft: 20,
        marginTop: 20
    },
    sourceName: {
        fontSize: 14,
        color: 'black',
        flex: 1
    },
    Content: {
        fontSize: 14,
        color: 'slategrey',
        marginTop: 5,
        marginRight: 5
    },
    timeFont: {
        fontSize: 10,
        marginTop: 10,
        color: 'black'
    },
    distance: {
        fontSize: 12,
        color: 'black',
        textAlign: 'right',
        flex: 1,
        marginRight: 5
    },
    containerHeader: {
        flexDirection: 'row'
    }
});

export default SingleRecordView;