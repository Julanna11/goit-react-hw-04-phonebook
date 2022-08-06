import PropTypes from 'prop-types';
import { Button } from 'utilities/button.styled';
import { ListItem } from 'components/ContactLsit/ContactList.styled';

export function ContactListItem({ id, name, number, onClickDelete }) {
  return (
    <ListItem>
      {name}: {number}
      <Button type="button" onClick={() => onClickDelete(id)}>
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
