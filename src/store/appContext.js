import React from "react";
import getState from "./flux.js";
import { Notifier, Notify } from "bc-react-notifier";
// Don't change, here is where we initialize our context, by default its just going to be Null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to Layout.jsx, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.jsx#L35
const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			//this will be passed as the contenxt value
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			console.log("v1.0");
			fetch("https://projects.breatheco.de/json")
				.then(res => res.json())
				.then(json => {
					let { store } = this.state;
					store.project = json;
                    store.technologiesTags= json.map((p)=>p.technology)

					this.setState({
						store
					});
				})
				.catch(err => Notify.error(err.message || "There was a problem"));
		}

		render() {
			// the initial value for the context its not null anymore, but the current state of this component,
			// the context will have a getStore and setStore functions available then, because they were declared
			// on the state of this component
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
