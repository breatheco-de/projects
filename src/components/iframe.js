
import React, { Component } from "react";
import { Panel, Loading } from "@breathecode/ui-components";
import PropTypes from "prop-types";

export default class IFrameView extends Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}

	render() {
		return (
			<div className="p-0">
				<Loading className="text-center" show={this.state.loading} />
				<iframe
					onLoad={() => this.setState({ loading: false })}
					className="lesson-iframe"
					src={this.props.src}
					width="100%"
					style={{ height: this.props.height }}
					frameBorder="0"
				/>
			</div>
		);
	}
}

IFrameView.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.string
};

IFrameView.defaultProps = {
  height: 'calc(100vh - 62px)'
};