(function(window, undefined) {
        'use strict';
        var React = window.React;
        var PaperToast = React.createClass({
            render: function() {
                return React.createElement('div', null, React.createElement('paper-button', null, 'Hello world', this.props.name), React.createElement('paper-toast', {text: 'foo', opened: true}, '', this.props.name));
            }
        });
        React.render( React.createElement(PaperToast, null, ' '),
          document.querySelector('body')
        );
}(window));