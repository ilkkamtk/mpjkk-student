import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const Single = ({match}) => {
  console.log('match', match);
  const file = {}; // TODO: fetch single media based on id from path parameter

  return (
    <>
      <h1>{file.title}</h1>
      <img src={uploadsUrl + file.filename} alt={file.title}/>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};

export default Single;
