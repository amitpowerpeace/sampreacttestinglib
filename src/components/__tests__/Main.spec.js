/* eslint no-use-before-define: 0 */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
//import { act } from "react-dom/test-utils";
import App from '../../Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
let container;

const startingState = { count: 0, loggedIn: true, user: { name: 'Rei' } };
function reducer(state = startingState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case 'logOut':
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
}
function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Application render', () => {
  it('renders without crashing', () => {
    //renderWithRedux(<Counter />);
    renderWithRedux(<App />);
    const maxLengthToPrint = 100000;
    screen.debug(undefined, maxLengthToPrint);
  });

  /* it('all columns name should be render', () => {
    render(<App />);
    expect(screen.getByText('Provider Number')).toBeInTheDocument();
    expect(screen.getByText('Proivder Name')).toBeInTheDocument();
    expect(screen.getByText('Provider Role')).toBeInTheDocument();
    expect(screen.getByText('Provider Speciality')).toBeInTheDocument();
    expect(screen.getByText('Participation Status')).toBeInTheDocument();
  });

  it('Column values should be render properly', () => {
    render(<App />);
    expect(screen.getByRole('cell', { name: /yes/i })).toBeInTheDocument();
    expect(
      screen.getByRole('cell', { name: /dougas gardern/i })
    ).toBeInTheDocument();
  }); */

  /*   it('all columns name should be render using getbyrole', () => {
    render(<App />);
    expect(
      screen.getByRole('columnheader', {
        name: /provider number/i,
      })
    ).toBeInTheDocument();
  });

  it('all columns name should not be render', () => {
    render(<App />);
    expect(screen.queryByText('Provider Number1')).not.toBeInTheDocument();
    expect(screen.queryByText('Proivder Name1')).not.toBeInTheDocument();
    expect(screen.queryByText('Provider Role1')).not.toBeInTheDocument();
    expect(screen.queryByText('Provider Speciality1')).not.toBeInTheDocument();
    expect(screen.getByText('Participation Status123')).toBeInTheDocument();
  }); */
  test('clicking the button toggles the case histroy screen', () => {
    /*  render(<App/>);
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    
    expect(Component).toBeInTheDocument()
    expect(screen.getByText('Yes, it is.')).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(Hide Component).not.toBeInTheDocument()
    expect(screen.queryByText('Yes, it is.')).not.toBeInTheDocument() */
  });
});
