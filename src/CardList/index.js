import "../App.css";
//import { GlobalContext } from "../App";
import { Card } from "../Card";
//import { useContext } from "react";
import React from "react";
import { withGlobalState } from "../hocs/withGlobalState";
export class CardListNoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "desc",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ sortBy: event.target.value });
  }

  render() {
    const { sortBy } = this.state;
    const { citiesList } = this.props.state;
    const sortedCitiesList = citiesList.sort();
    if (sortBy === "desc") {
      sortedCitiesList.reverse();
    }
    return (
      <>
        <select
          className="Select"
          value={sortBy}
          onChange={this.handleOnChange}
        >
          <option value="desc">Sort by desc</option>
          <option value="asc">Sort by asc</option>
        </select>
        <div className="CardList">
          {sortedCitiesList.map((city) => (
            <Card city={city} key={city} />
          ))}
        </div>
      </>
    );
  }
}

export const CardList = withGlobalState(CardListNoState);