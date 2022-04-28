import styles from './Phone.module.scss';
import cx from 'classnames';

function Phone({
  phone: { name, model, price, isAvalible, id, isSelected },
  togglePhoneSelection,
}) {
  // const stylesObj = {
  //   backgroundColor: isSelected ? 'green' : 'transparent',
  // };

  const stylesObj = {
    [styles.container]: true,
    [styles.selected]: isSelected,
  };

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

// function cx(stylesObject) {
//   return Object.entries(stylesObject)
//     .filter(([className, condition]) => condition)
//     .map(([className, condition]) => className)
//     .join(' ');
// }

/*
{
  styles.container : true ,
  styles.selected : isSelected
}

=> 'container selected'
*/

export default Phone;
