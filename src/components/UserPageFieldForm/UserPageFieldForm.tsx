import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { updateProfileFields } from '../../actions/updateProfileFields';
import { fields, contentField } from '../../shared/interfaces/ProfileFieldInterfaces';
import './UserPageFieldForm.scss';

type fieldType = {
  name: string;
  value: string;
};

export const UserPageFieldForm: React.FC = () => {
  const MAX_FIELDS_THRESHOLD = 12;
  const MAX_INPUT_LENGTH = 100;
  const [formData, setFormData] = useState<fields>();
  const [fieldsData, setFieldsData] = useState<contentField>({});
  const [fieldInputs, setFieldInputs] = useState<fieldType[]>([]);
  const [formTitle, setFormTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [fieldError, setFieldError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFieldsData({ ...fieldsData, [name]: value });
  };

  const addField = () => {
    const field = {
      name: `field-${fieldInputs.length}`,
      value: ''
    };
    const { name, value } = field;
    setFieldInputs([...fieldInputs, field]);
    setFieldsData({ ...fieldsData, [name]: value });
  };

  const checkKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      addField();
    }
  };

  const validate = (): boolean => {
    if (formTitle === '') {
      setTitleError(!titleError);
      return true;
    }
    if (Object.entries(fieldsData).length === 0) {
      addField();
      return true;
    }
    if (Object.entries(fieldsData).every(field => field[1].trim() === '')) {
      setFieldError(!fieldError);
      return true;
    }
    return false;
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (!validate()) {
      setFormData({
        content: Object.fromEntries(
          Object.entries(fieldsData)
            .map(el => [el[0], el[1].trim()])
            .filter(el => el[1] !== '')
        ),
        title: formTitle
      });
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (formData) {
      updateProfileFields(formData);
    }
  }, [formData]);

  return (
    <article className="userPageFieldForm">
      <form onSubmit={handleSubmit}>
        <div className="userPageFieldForm__title">
          <TextField
            error={titleError}
            helperText={titleError && `Title can't be empty`}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => checkKeyDown(e)}
            onChange={event => setFormTitle(event.target.value)}
            variant="outlined"
            placeholder="Title"
            name="title"
          />
        </div>
        <ul>
          {fieldInputs.map(({ name }) => (
            <li className="userPageFieldForm__field">
              <TextField
                name={name}
                value={fieldsData[name]}
                error={fieldError}
                helperText={fieldError && `At least one field must be filled`}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => checkKeyDown(e)}
                onChange={handleChange}
                style={{ width: '100%' }}
                inputProps={{ maxLength: MAX_INPUT_LENGTH }}
              />
            </li>
          ))}
        </ul>
        {fieldInputs.length < MAX_FIELDS_THRESHOLD && (
          <button className="userPageFieldForm__addfield" type="button" onClick={addField}>
            <AddIcon role="button" aria-label="Add new field" />
          </button>
        )}
        <span className="userPageFieldForm__submitButtonWrapper">
          <Button
            className="userPageFieldForm__submitButton"
            variant="contained"
            style={{ color: 'black', background: 'lightgreen' }}
            type="submit"
          >
            Confirm
          </Button>
        </span>
      </form>
    </article>
  );
};
