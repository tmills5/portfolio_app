import styled from 'styled-components';


// styled components
const Container = styled.div`
  display: flex;
  `;

// making sure the panes are equal 
// syntax is how it works with styled components
const Pane = styled.div`
  flex: ${props => props.weight};
`;


export const SplitScreen = ({
  // using children props is more dev friendly cause now we can pass comps or
  // whatever directly to the lefthand or righthand components. Go look at app.js
  // and take note of the name and message parts in the components
  children,
  // take up more or less space by adding below
  // pass through to prospective components and 
  // modify the flex pane property above
  leftWeight = 1,
  rightWeight = 1
})=> {
  const [left, right ] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  )
};