import "../App.css";
//import { GlobalContext } from "../App";
import { Card } from "../Card";
//import { useContext } from "react";
import React from "react";
export class CardList extends React.Component {
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
    const { citiesList } = this.props;
    const sortedCitiesList = citiesList.sort();
    if (sortBy === "desc") {
      sortedCitiesList.reverse();
    }
    return (
      <>
        <select className="Select" value={sortBy} onChange={this.handleOnChange}>
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
// export const CardList = () => {
//   const { state: {citiesList} } = useContext(GlobalContext);
//   return (
//   <div className="CardList">
//     {citiesList.map((city) => (
//       <Card city={city} key={city} />
//     ))}
//   </div>
//   )
// };
