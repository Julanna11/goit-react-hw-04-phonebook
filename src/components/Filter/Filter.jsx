import PropTypes from 'prop-types';
import { FilterContainer, Label, Span } from './Filter.styled';
import { Input } from 'components/ContactForm/ContactForm.styled';

export function Filter({ value, onFilter }) {
  return (
    <FilterContainer>
      <Label>
        <Span>Find contacts by name</Span>
        <Input
          name="filter"
          type="text"
          value={value}
          onChange={onFilter}
          required={false}
        />
      </Label>
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
