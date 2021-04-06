import useUploadForm from '../hooks/UploadHooks';
import {useMedia} from '../hooks/ApiHooks';
import {CircularProgress, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


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
      dataUrl: '',
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
      } else {
        setInputs((inputs) => ({
          ...inputs,
          dataUrl: 'logo512.png',
        }));
      }
    }
  }, [inputs]);

  console.log(inputs);

  return (
    <div>
      {!loading ?
        <ValidatorForm onSubmit={handleSubmit}>
          {inputs.dataUrl.length > 0 &&
          <img src={inputs.dataUrl}/>
          }
          <TextValidator
            fullWidth
            name="title"
            label="Title"
            value={inputs.title}
            onChange={handleInputChange}
          />
          <TextValidator
            fullWidth
            name="description"
            label="Description"
            value={inputs.description}
            onChange={handleInputChange}
          />
          <TextValidator
            fullWidth
            type="file"
            name="file"
            accept="image/*, audio/*, video/*"
            onChange={handleFileChange}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >Lähetä</Button>
        </ValidatorForm> :
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
