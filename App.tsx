import React, { useEffect } from 'react';
import Router from './src/route/Router';
import axios from 'axios';
import store, { useReduxDispatch } from './src/store';
import { getListQuestion } from './src/store/reducers/questions';
import { getListCategories } from './src/store/reducers/categories';

function App(): JSX.Element {
  const dispatch = useReduxDispatch()
  useEffect(() => {
    getQuestions();
    getCategories();
  }, []);

  const getQuestions = () => {
    axios.get("https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions").then((res) => {
      dispatch(getListQuestion(res.data));
    }).catch((err) => {
      console.log(err)
    })
  }

  const getCategories = () => {
    axios.get("https://dummy-api-jtg6bessta-ey.a.run.app/getCategories").then((res) => {
      dispatch(getListCategories(res.data.data));
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
      <Router />
  );
}

export default App;
