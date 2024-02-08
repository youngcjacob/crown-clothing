import {DirectoryItemContainer} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom'



import { Link } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  
  const { imageUrl, title } = category;
  
  const navigate = useNavigate()
  const goToCategoryHandler = (title) => {
    navigate(`/shop/${title}`)
  } 

  return (
    <DirectoryItemContainer>
    
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
      
       <h2>{title}</h2>
        <p onClick={()=>goToCategoryHandler(title)}>Shop Now</p>
        
      </div>
      </DirectoryItemContainer>
  );
};

export default DirectoryItem;
