import BaseComponent from 'react-base-lib/es/BaseComponent';

// react-base-lib的BaseComponent的contextTypes中isRequired了router和intl
// 所以在这里覆写掉BaseComponent的contextTypes
BaseComponent.contextTypes = {};

export default BaseComponent;
