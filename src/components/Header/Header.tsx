import React from "react";
import { headerContainer, headingClassName } from "./styles";
import TextField from "../../common/TextField/TextField";

interface Props {
  search: string;
  onChange: (value: string) => void;
}
const Header = (props: Props): React.ReactElement => {
  const { search, onChange } = props;
  const renderFilter = () => {
    return (
      <div>
        <TextField
          value={search}
          onChange={onChange}
          placeholder="Search here..."
          type="search"
        />
      </div>
    );
  };
  return (
    <div className={headerContainer}>
      <h1 className={headingClassName}>Jobs List</h1>
      {renderFilter()}
    </div>
  );
};

export default Header;
