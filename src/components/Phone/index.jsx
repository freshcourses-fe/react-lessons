import styles from './Phone.module.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';

function Phone({
  phone: { name, model, price, isAvalible, id, isSelected },
  togglePhoneSelection,
}) {
  return (
    <article
      className={cx(styles.container, { [styles.selected]: isSelected })}
    >
      <h2>{`${name} ${model}`}</h2>
      <p>Price: {price}$</p>
      <p>{isAvalible ? 'In stock' : 'Out of stock'}</p>
      <button onClick={() => togglePhoneSelection(id)}>toggle selection</button>
    </article>
  );
}

const phoneObj = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvalible: PropTypes.bool,
  id: PropTypes.number.isRequired,
  isSelected: PropTypes.bool,
};

Phone.propTypes = {
  togglePhoneSelection: PropTypes.func.isRequired,
  phone: PropTypes.shape(phoneObj),
};

Phone.defaultProps = {
  togglePhoneSelection: () => {},
  phone: {
    name: 'ТЫ НЕ ПЕРЕДАЛ ПРОПСЫ',
    model: 'МИНУС ПРЕМИЯ',
    price: 999999999999,
    isAvalible: true,
    isSelected: true,
    id: 500000000
  }
}

export default Phone;
