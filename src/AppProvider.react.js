import React from 'react';
import {Provider} from 'react-redux';

import initializeStore from './store';
import AppContainer from './AppContainer.react';

import PropTypes from 'prop-types';

const AppProvider = ({
    hooks,
    name,
    enforceNew,
    initialConfig,
    registry,
    children,
}) => {
    const store = initializeStore({name, enforceNew});

    return (
        <Provider store={store}>
            <div>
                <AppContainer
                    hooks={hooks}
                    initialConfig={initialConfig}
                    registry={registry}
                />
                {children}
            </div>
        </Provider>
    );
};

AppProvider.propTypes = {
    hooks: PropTypes.shape({
        request_pre: PropTypes.func,
        request_post: PropTypes.func,
    }),
    initialConfig: PropTypes.object,
    registry: PropTypes.shape({
        resolve: PropTypes.func,
    }),
    name: PropTypes.string,
    enforceNew: PropTypes.bool,
};

AppProvider.defaultProps = {
    hooks: {
        request_pre: null,
        request_post: null,
    },
    enforceNew: false,
};

export default AppProvider;
