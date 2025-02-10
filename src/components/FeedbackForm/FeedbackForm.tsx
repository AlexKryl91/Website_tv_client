'use client';

import React from 'react';
import classes from './FeedbackForm.module.scss';
import { Button } from '../Buttons/Buttons';

type TLabels = {
  labels: { [key: string]: string };
};

// const useFormField = (initialValue: string = '') => {
//   const [value, setValue] = React.useState(initialValue);
//   const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
//   return { value, onChange };
// };

// export function LoginForm() {
//   const emailField = useFormField();
//   const passwordField = useFormField();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     api.login(emailField.value, passwordField.value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='email'>Email</label>
//         <input type='email' id='email' {...emailField} />
//       </div>
//       <div>
//         <label htmlFor='password'>Password</label>
//         <input type='password' id='password' {...passwordField} />
//       </div>
//     </form>
//   );
// }

function formatPhoneNumber(e: React.KeyboardEvent) {
  console.log('PhoneFormatter!!!');
  console.log(e);
  //   let formattedNumber;
  //   const { name, value } = e.target;
  //   const { length } = value;
  //   // Filter non numbers
  //   const regex = () => value.replace(/[^0-9\.]+/g, '');
  //   // Set area code with parenthesis around it
  //   const areaCode = () => `(${regex().slice(0, 3)})`;

  //   // Set formatting for first six digits
  //   const firstSix = () => `${areaCode()} ${regex().slice(3, 6)}`;

  //   // Dynamic trail as user types
  //   const trailer = (start) => `${regex().slice(start, regex().length)}`;
  //   if (length < 3) {
  //     // First 3 digits
  //     formattedNumber = regex();
  //   } else if (length === 4) {
  //     // After area code
  //     formattedNumber = `${areaCode()} ${trailer(3)}`;
  //   } else if (length === 5) {
  //     // When deleting digits inside parenthesis
  //     formattedNumber = `${areaCode().replace(')', '')}`;
  //   } else if (length > 5 && length < 9) {
  //     // Before dash
  //     formattedNumber = `${areaCode()} ${trailer(3)}`;
  //   } else if (length >= 10) {
  //     // After dash
  //     formattedNumber = `${firstSix()}-${trailer(6)}`;
  //   }
  //   const formattedObject = {
  //     target: { name: name, value: formattedNumber },
  //   };
}

function submitForm(e: React.MouseEvent) {
  e.preventDefault();
  console.log('Form is submitted!!! =)');
}

const FeedbackForm = ({ labels }: TLabels) => {
  return (
    <div className={classes['feedback__form-container']}>
      <form className={classes['feedback__form']}>
        <input
          type="text"
          name="username"
          minLength={10}
          placeholder={labels.placeholder_name}
          required
          className={`${classes.input} ${classes['input__name']}`}
        />
        <input
          type="text"
          name="company"
          placeholder={labels.placeholder_company}
          className={`${classes.input} ${classes['input__company']}`}
        />
        <input
          type="tel"
          name="telephone"
          pattern="[0-9]{10}"
          minLength={10}
          maxLength={30}
          placeholder={labels.placeholder_tel}
          className={`${classes.input} ${classes['input__tel']}`}
          required
          onKeyDown={formatPhoneNumber}
        />
        <input
          type="email"
          name="email"
          placeholder={labels.placeholder_email}
          className={`${classes.input} ${classes['input__email']}`}
          required
        />
        <textarea
          name="message"
          minLength={10}
          maxLength={200}
          placeholder={labels.placeholder_msg}
          className={`${classes.input} ${classes['input__msg']}`}
          required
        ></textarea>
        <Button
          onClick={submitForm}
          addClass={classes['submit-btn']}
          title={labels.submit_label}
        >
          {labels.submit_label}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
