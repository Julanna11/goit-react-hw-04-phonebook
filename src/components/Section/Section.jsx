import PropTypes from 'prop-types';
import { SectionAll, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionAll>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionAll>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
