import useUploadForm from '../hooks/UploadHooks';
import {useMedia} from '../hooks/ApiHooks';
import {CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';
import {useEffect} from 'react';

const Upload = ({history}) => {
  const {postMedia, loading} = useMedia();

  const doUpload = async () => {
    try {
      const fd = new FormData();
      fd.append('title', inputs.title);
      fd.append('description', inputs.description);
      fd.append('file', inputs.file);
      const result = await postMedia(fd, localStorage.getItem('token'));
      console.log('doUpload', result);
      history.push('/home');
    } catch (e) {
      alert(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit, handleFileChange, setInputs} =
    useUploadForm(doUpload, {
      title: '',
      description: '',
      file: null,
    });

  useEffect(() => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      setInputs((inputs) => ({
        ...inputs,
        dataUrl: reader.result,
      }));
    });

    if (inputs.file !== null) {
      if (inputs.file.type.includes('image')) {
        reader.readAsDataURL(inputs.file);
      }
    }
  }, [inputs]);

  console.log(inputs);

  return (
    <div>
      {!loading ?
        <form onSubmit={handleSubmit}>
          {inputs.dataUrl.length > 0 &&
          <img src={inputs.dataUrl}/>
          }
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
}
;

Upload.propTypes =
{
  history: PropTypes.object,
}
;


export default Upload;
