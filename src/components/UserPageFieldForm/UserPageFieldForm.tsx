import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useParams } from 'react-router-dom';
import { updateProfileFields } from '../../actions/updateProfileFields';
import { contentField, fields } from '../../shared/interfaces/ProfileFieldInterfaces';
import { useDarkMode } from '../../context/DarkModeProvider';
import { db } from '../../firebase';
import './UserPageFieldForm.scss';

type fieldType = {
  name: string;
  value: string;
};

type UserPageParams = {
  ownerUid: string;
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
  const [titleError, setTitleError] = useState('');
  const [fieldError, setFieldError] = useState(false);
  const [fieldEntries, setFieldEntries] = useState<fields[]>([]);
  const { isDarkMode } = useDarkMode();
  const { ownerUid } = useParams<UserPageParams>();

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

  useEffect(() => {
    db.collection('users')
      .doc(ownerUid)
      .get()
      .then(doc => {
        setFieldEntries(doc.data()?.profileFields);
      })
      // eslint-disable-next-line
      .catch(error => console.error(error));
  }, []);

  const validate = (): boolean => {
    if (formTitle === '') {
      setTitleError("Title can't be empty");
      return true;
    }
    if (fieldEntries.map(entry => entry?.title).includes(formTitle)) {
      setTitleError('Title is already used');
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
      updateProfileFields(formData, 'update');
      setter(!data);
    }
    event.preventDefault();
  };

  return (
    <article className={classNames('userPageFieldForm', { 'userPageFieldForm--dark': isDarkMode })}>
      <form onSubmit={handleSubmit}>
        <div className={classNames('userPageFieldForm__title', { 'userPageFieldForm__title--dark': isDarkMode })}>
          <TextField
            error={Boolean(titleError)}
            helperText={titleError}
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
            <li className={classNames('userPageFieldForm__field', { 'userPageFieldForm__field--dark': isDarkMode })}>
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
          <button
            className={classNames('userPageFieldForm__addfield', { 'userPageFieldForm__addfield--dark': isDarkMode })}
            type="button"
            onClick={addField}
          >
            <AddIcon role="button" aria-label="Add new field" />
          </button>
        )}
        <span className="userPageFieldForm__submitButtonWrapper">
          <Button
            className={classNames('userPageFieldForm__submitButton', {
              'userPageFieldForm__submitButton--dark': isDarkMode
            })}
            variant="contained"
            color="primary"
            type="submit"
          >
            Confirm
          </Button>
        </span>
      </form>
    </article>
  );
};
