import PropTypes from "prop-types";
import Header from "../header/Header";

const MaiLayout = ({ children, loggedInUser }) => {
  return (
    <>
      <Header loggedInUser={loggedInUser} />
      {children}
    </>
  );
};

MaiLayout.propTypes = {
  children: PropTypes.node.isRequired,
  loggedInUser: PropTypes.func.isRequired,
};

export default MaiLayout;
