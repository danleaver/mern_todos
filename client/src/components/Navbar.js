/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, Match } from '@reach/router';

const NavLink = (props) => {

  return (
    <Link 
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "red" : "blue",
          },
        }
      }}
    />
  )
}

const Navbar = () => {

return (
  <>
    <div
      css={css`
        background: grey;
        height: 100px;
        position: fixed;
        width: 100%;
      `}
    >
      <Match path="/">
        {({ match }) => (
          !match && <NavLink to="/">PAGE 1</NavLink>
        )}
      </Match>
      <nav>
        <NavLink to="/2">PAGE 2</NavLink>
      </nav>
    </div>
    <div css={css`height: 100px;`}>
      hello clearfix
    </div>
  </>
)}

export default Navbar