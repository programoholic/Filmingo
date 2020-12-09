import React from 'react';
import classes from './SearchPanel.module.scss';
import Loader from '../UI/Loader/Loader';
const searchPanel = (props) => {
  let effectClass = (props.loading || props.text.length === 0)? 'disabled': ''
  return (
    <div className={classes.SearchPanel}>
      <div className={classes.SearchInput}>
        <input type="text" id="input"
          className={classes.InputText}
          onChange={props.changed}
          value={props.text}
          placeholder="Movie name e.g Avengers, Iron man" />
      </div>
      <div className={classes.BtnPanel}>
        <a
          onClick={props.clicked}
          className={[classes.btn_hover_effect, classes.btn_hover_effect_effect_1,classes[effectClass]].join(' ')}
          title="Search"
        >
          Search
      </a>
      </div>
      { props.loading ? <div className={classes.LoadingDiv}>
        <Loader />
      </div> : ''}
    </div>

  )
}


export default searchPanel;