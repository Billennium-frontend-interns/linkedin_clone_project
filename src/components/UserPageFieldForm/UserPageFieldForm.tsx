import React, { useState } from 'react';
import classNames from 'classnames';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { updateProfileFields } from '../../actions/updateProfileFields';
import { contentField } from '../../shared/interfaces/ProfileFieldInterfaces';
import './UserPageFieldForm.scss';
import { useDarkMode } from '../../context/DarkModeProvider';

type fieldType = {
  name: string;
  value: string;
};
interface UserPageFieldFormProps {
  data: boolean;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserPageFieldForm: React.FC<UserPageFieldFormProps> = ({ data, setter }: UserPageFieldFormProps) => {
  const MAX_FIELDS_THRESHOLD = 12;
  const MAX_INPUT_LENGTH = 100;
  const [fieldsData, setFieldsData] = useState<contentField>({});
  const [fieldInputs, setFieldInputs] = useState<fieldType[]>([]);
  const [formTitle, setFormTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [fieldError, setFieldError] = useState(false);
  const { isDarkMode } = useDarkMode();

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
      const formData = {
        content: Object.fromEntries(
          Object.entries(fieldsData)
            .map(([name, content]) => [name, content.trim()])
            .filter(([, content]) => content !== '')
        ),
        title: formTitle
      };
      updateProfileFields(formData);
      setter(!data);
    }
    event.preventDefault();
  };

  return (
    <article className={classNames('userPageFieldForm', { 'userPageFieldForm--dark': isDarkMode })}>
      <form onSubmit={handleSubmit}>
        <div className="userPageFieldForm__title">
          <TextField
            error={titleError}
            className={classNames('userPageFieldForm__titleField', {
              'userPageFieldFormField__titleField--dark': isDarkMode
            })}
            helperText={titleError && `Title can't be empty`}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => checkKeyDown(e)}
            onChange={event => setFormTitle(event.target.value)}
            inputProps={{ maxLength: MAX_INPUT_LENGTH }}
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
          <Button className="userPageFieldForm__submitButton" variant="contained" color="primary" type="submit">
            Confirm
          </Button>
        </span>
      </form>
    </article>
  );
};
