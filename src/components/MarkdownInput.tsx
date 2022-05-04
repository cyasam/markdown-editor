import "./MarkdownInput.css";

type MarkdownInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const MarkdownInput: React.FunctionComponent<MarkdownInputProps> = ({
  value,
  onChange
}) => {
  return (
    <textarea
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
        onChange(event.target.value)
      }
      defaultValue={value}
    ></textarea>
  );
};

export default MarkdownInput;
