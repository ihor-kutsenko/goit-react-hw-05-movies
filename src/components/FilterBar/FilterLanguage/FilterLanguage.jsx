import { Option, FormSelect } from '../FilterBar.styled';

const FilterLanguage = ({ onSelect }) => {
  return (
    <>
      {' '}
      <FormSelect
        name="with_original_language"
        onChange={event => onSelect(event.target.value)}
      >
        <Option value="">Select Language</Option>
        <Option value="uk">Ukrainian</Option>
        <Option value="en">English</Option>
        <Option value="pl">Polish</Option>
        <Option value="fr">French</Option>
        <Option value="de">German</Option>
        <Option value="it">Italian</Option>
        <Option value="es">Spanish</Option>
        <Option value="ru">Russian</Option>
        <Option value="ar">Arabic</Option>
        <Option value="zh">Chinese</Option>
        <Option value="ja">Japanise</Option>
        <Option value="ko">Korean</Option>
        <Option value="hi">Hindi</Option>
      </FormSelect>
    </>
  );
};

export default FilterLanguage;
