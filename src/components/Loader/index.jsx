import React from 'react';
import scss from './style.module.scss'

function Loader() {
  return (
    <div className='loader container section'>
        <div className={scss.loader__wrapper}>
<div className="loader__content">
    <div className="loader__logo"></div>
</div>
        </div>
      
    </div>
  )
}

export default Loader
