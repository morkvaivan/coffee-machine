import React, { Component, PropTypes } from 'react';

const connect = (mapStateToProps, mapDispatchToProps) => (MyComponent) => {
  class Connector extends Component {
    constructor() {
      super();
      this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    componentDidMount() {
      this.context.store.subscribe(this.handleStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.handleStoreChange);
    }

    handleStoreChange() {
      this.forceUpdate();
    }

    render() {
      const props = {
        ...mapStateToProps(this.context.store.getState()),
        ...mapDispatchToProps(this.context.store.dispatch),
      };

      return <MyComponent {...props} />
    }
  }

  Connector.contextTypes = {
    store: PropTypes.object,
  };

  return Connector;
};

export default connect;
