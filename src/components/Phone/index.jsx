function Phone({
  phone: { name, model, price, isAvalible, id, isSelected },
  togglePhoneSelection,
}) {
  const styles = {
    backgroundColor: isSelected ? 'green' : 'transparent',
  };

  return (
    <article style={styles}>
      <h2>{`${name} ${model}`}</h2>
      <p>Price: {price}$</p>
      <p>{isAvalible ? 'In stock' : 'Out of stock'}</p>
      <button onClick={() => togglePhoneSelection(id)}>toggle selection</button>
    </article>
  );
}

export default Phone;
