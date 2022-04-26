function Cart({ phones, togglePhoneSelection }) {
  return (
    <>
      <h2>Корзина:</h2>
      <ul>
        {phones.map((phone) => {
          if (phone.isSelected) {
            return (
              <li key={phone.id}>
                <p>{phone.name}</p>
                <button
                  onClick={() => {
                    togglePhoneSelection(phone.id);
                  }}
                >
                  X
                </button>
              </li>
            );
          }
          return undefined;
        })}
      </ul>
    </>
  );
}

export default Cart;
