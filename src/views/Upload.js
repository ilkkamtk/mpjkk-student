import useUploadForm from '../hooks/UploadHooks';
import {useMedia} from '../hooks/ApiHooks';
import {CircularProgress} from '@material-ui/core';

const Upload = () => {
  const {postMedia, loading} = useMedia();

  const doUpload = async () => {
    const fd = new FormData();
    fd.append('title', inputs.title);
    fd.append('description', inputs.description);
    fd.append('file', inputs.file);
    const result = await postMedia(fd, localStorage.getItem('token'));
    console.log('doUpload', result);
  };

  const {inputs, handleInputChange, handleSubmit, handleFileChange} =
    useUploadForm(doUpload, {
      title: '',
      description: '',
      file: null,
    });

  return (
    <div>
      {!loading ?
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={inputs.title}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="file"
            name="file"
            accept="image/*, audio/*, video/*"
            onChange={handleFileChange}
          />
          <button type="submit">Lähetä</button>
        </form> :
        <CircularProgress/>
      }
    </div>
  );
};

export default Upload;
