/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */
import  React from 'react';
import {connect} from "react-redux";
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import {StackNavigation, TabNavigation, TabNavigationItem as TabItem,} from '@exponent/ex-navigation';

const Main = (props) => {

    return (
        <TabNavigation
            initialTab="Home"
            tabBarColor="#334459"
            tabBarHeight={52}>

            <TabItem
                id="Home"
                renderIcon={isSelected => renderIcon('home', isSelected)}>
                <StackNavigation initialRoute='home'/>
            </TabItem>

            <TabItem
                id="Explore"
                renderIcon={isSelected => renderIcon('compass', isSelected)}>
                <StackNavigation initialRoute='home'/>
            </TabItem>

            <TabItem
                id="Post"
                renderIcon={isSelected => renderIcon('pencil', isSelected)}>
                <StackNavigation initialRoute='post'/>
            </TabItem>

            <TabItem
                id="Message"
                renderIcon={isSelected => renderIcon('comment', isSelected)}>
                <StackNavigation initialRoute='home'/>
            </TabItem>

            <TabItem
                id="Profile"
                renderIcon={isSelected => renderIcon('torso', isSelected)}>
                <StackNavigation initialRoute='account'/>
            </TabItem>

        </TabNavigation>
    )
};

function renderIcon(iconName: string, isSelected: bool): ReactElement<any> {
    let color = isSelected ? '#FDFDFD' : '#9BA3AE';

    return (
        <Icon name={iconName} size={32} color={color} style={ iconName ==='pencil' && styles.tabPencil}/>
    );
}

const styles = StyleSheet.create({
    tabPencil: {
        paddingVertical: 1,
        paddingHorizontal: 12,
        borderRadius: 5,
        backgroundColor: '#529ECD',
        overflow: 'hidden',
        color: '#334459'
    }
});

export default connect(
    (state) => ({}),
    (dispatch) => ({})
)(Main);