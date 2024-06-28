

import PropTypes from "prop-types";
import Header from "../header/Header";

const MaiLayout = ({ children, onSearch, loggedInUser }) => {
  return (
    <>
      <Header onSearch={onSearch} loggedInUser={loggedInUser} />

      {children}
    </>
  );
};

MaiLayout.propTypes = {

  children: PropTypes.node.isRequired,
  onSearch: PropTypes.func.isRequired,
  loggedInUser: PropTypes.object,

};

export default MaiLayout;
