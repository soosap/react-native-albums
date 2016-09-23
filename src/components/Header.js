import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Albums</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 30,
		paddingBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0.25 },
		shadowOpacity: 0.1,
	},
	text: {
		fontSize: 20,
		fontWeight: '600',
	}
});

export default Header;