/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Axios from 'axios';
import { useEffect } from 'react';

const Page1 = () => {
  
  useEffect(() => {
    Axios.post('http://localhost:3000/', {todo: "hello todo"})
      .then(res => console.log(res))
      .catch(console.log)
  }, [])

  const handleClick = () => {
    Axios.get('http://localhost:3000')
      .then(res => console.log(res))
      .catch(console.log)
  }


  return (
<>
  <div
    css={css`
      background: red;
      height: 200px;
    `}
  >
    HELLO Page 1
  </div>
  <div
    css={css`
    background: rgb(40, 70, 70);
    height: 1200px;
    `}
  >
  <button onClick={handleClick}>Show list</button>
  </div>
</>
)}

export default Page1