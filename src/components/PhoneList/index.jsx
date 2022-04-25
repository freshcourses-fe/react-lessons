import Phone from '../Phone';

function PhoneList({ phones, togglePhoneSelection }) {
  
  const phoneElements = phones.map((phone) => (
    <li key={`${phone.name}-${phone.id}`}>
      <Phone phone={phone} togglePhoneSelection={togglePhoneSelection} />
    </li>
  ));
  return <ul>{phoneElements}</ul>;
}

export default PhoneList;
