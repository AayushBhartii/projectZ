import css from "./FileUpload.module.css";

const FileUpload = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const files = e.target.files;
    onFileSelect(files);
  };

  return (
    <div className={css.fileUploadContainer}>
      <input
        type="file"
        id="fileInput"
        className={css.fileInput}
        onChange={handleFileChange}
        multiple
        accept="image/*"
        required
      />
      <label htmlFor="fileInput" className={css.uploadButton}>
        Add images
      </label>
    </div>
  );
};

export default FileUpload;
