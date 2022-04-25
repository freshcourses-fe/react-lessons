import React from 'react';
import PhoneList from '../PhoneList';
import phonesArray from './../../priceData.json';

class PhoneDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: phonesArray.map((phone) => {
        return {
          ...phone,
          isSelected: false,
        };
      }),
    };
  }

  togglePhoneSelection = (id) => {
    const { phones } = this.state;

    const newPhones = phones.map((phone) => {
      return {
        ...phone,
        isSelected: phone.id === id ? !phone.isSelected : phone.isSelected,
      };
    });

    this.setState({
      phones: newPhones,
    });
  };

  render() {
    const { phones } = this.state;
    return (
      <div>
        <PhoneList
          phones={phones}
          togglePhoneSelection={this.togglePhoneSelection}
        />
      </div>
    );
  }
}

export default PhoneDashboard;
