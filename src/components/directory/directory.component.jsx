import React from 'react';
import MenuItem from '../menu-item/menu-item.components'
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors.js';
import {createStructuredSelector} from 'reselect';
import './directory.styles.scss'


const Directory = ({sections}) => {  
        return(
            <div className="directory-menu">
              {/*anti gia oles autes tis metavlites mporw na xrimimopoihsw to {id ...otherSectionProps kai stin katw grammmi to idio} */}
                {sections.map(({id,title,imageUrl,size,linkUrl}) =>(
                    <MenuItem key={id} size={size} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
                ))}
                
            </div>
        )
    }
    const mapStateToProps = createStructuredSelector({
      sections : selectDirectorySections
    })

    

export default connect(mapStateToProps)(Directory);

