// import PhoneInput from 'react-phone-input-2';

import { PhoneInput } from 'react-international-phone';

export default function PhoneWithCountry({
  phoneNumber,
  handlePhoneChange,
  isDisabled = false,
}) {
  return (
    <PhoneInput
      country="in"
      defaultCountry="in"
      name="phone"
      className="marginBottom"
      value={phoneNumber}
      placeholder="00000 00000"
      onChange={handlePhoneChange}
      inputProps={{
        required: true,
        disabled: isDisabled,
      }}
    />
  );
}
