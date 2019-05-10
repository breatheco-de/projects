import React from "react";
import PropTypes from "prop-types";

export class SmallJumbotron extends React.Component {
	render() {
		return (
			<div className={this.props.jumboClass}>
				<div className={this.props.containerClass}>
					<h1 className={this.props.headerClass}>
						{this.props.headerText}
						<span className={this.props.spanClass}>{this.props.spanContent}</span>
					</h1>
					<p className={this.props.pClass}>{this.props.pContent}</p>
				</div>
			</div>
		);
	}
}

SmallJumbotron.propTypes = {
	jumboClass: PropTypes.string,
	containerClass: PropTypes.string,
	headerClass: PropTypes.string,
	headerText: PropTypes.string,
	pClass: PropTypes.string,
	pContent: PropTypes.string,
	spanClass: PropTypes.string,
	spanContent: PropTypes.string
};
