import * as React from 'react';

import MyStatusBar from "./MyStatusBar"

export default ({ navigation, screen, statusBarStyle, statusBarBackgroundColor }) => {
    return (
        <>
            <MyStatusBar navigation={navigation} statusBarStyle={statusBarStyle} statusBarBackgroundColor={statusBarBackgroundColor} />
            {screen}
        </>
    );
};