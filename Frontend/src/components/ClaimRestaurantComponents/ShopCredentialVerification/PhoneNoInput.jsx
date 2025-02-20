import css from "./PhoneNoInput.module.css";
import styles from "../../../utils/Buttons/BlueBtn/BlueBtn.module.css";
import Dropdown from "../PhoneNoVerification/Dropdown";
import InputBox from "../PhoneNoVerification/InputBox";

const PhoneNoInput = (prop) => {
  const { setCountryCode, onPhoneNumberChange, handleSendOTP, phoneNumber } =
    prop;
  return (
    <div className={css.phoneInputContainer}>
      <Dropdown setCountryCode={setCountryCode} />
      <InputBox
        phoneNumber={phoneNumber}
        setPhoneNumber={onPhoneNumberChange}
      />

      <button
        className={`${styles.btn} ${css.sendBtn}`}
        onClick={handleSendOTP}
      >
        Send OTP
      </button>
    </div>
  );
};

export default PhoneNoInput;
