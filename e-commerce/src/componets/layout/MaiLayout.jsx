
import PropTypes from "prop-types";
import Header from "../header/Header";

const MaiLayout = ({ children, onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      {children}
    </>
  );
};

MaiLayout.propTypes = {
  children: PropTypes.node.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default MaiLayout;
