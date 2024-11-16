import { StyleSheet, Text, View } from 'react-native';

export default function Courses() {
    return (
        <View style={styles.container}>
            <Text>Courses</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
