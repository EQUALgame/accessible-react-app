import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from './HomePage';

jest.mock(
  'react-router-dom',
  () => ({
    Link: ({ to, children, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
    NavLink: ({ to, children, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  }),
  { virtual: true }
);

jest.mock('../components/icons/ScrambledScriptIcon.jsx', () => () => null);
jest.mock('../components/icons/TapTroubleIcon', () => () => null);
jest.mock('../components/icons/DimmedDetailsIcons.jsx', () => () => null);
jest.mock('../components/icons/ColorClashIcon.jsx', () => () => null);
jest.mock('../components/icons/SightlessSearchIcon.jsx', () => () => null);
jest.mock('../components/icons/SilentSurfingIcon.jsx', () => () => null);
jest.mock('../components/icons/HesitantHoverIcon.jsx', () => () => null);
jest.mock('../components/icons/FracturedFocusIcon.jsx', () => () => null);

const gamesByCategory = {
  Vision: ['Color Clash', 'Dimmed Details', 'Sightless Search'],
  Dexterity: ['Tap Trouble', 'Hesitant Hover'],
  Auditory: ['Silent Surfing'],
  Cognitive: ['Scrambled Script', 'Fractured Focus'],
};

const allGames = Object.values(gamesByCategory).flat();

test('filters games by category and restores all games', async () => {
  render(<HomePage />);

  const filterGroup = screen.getByRole('group', { name: 'Filter games by category' });
  const filterButtons = within(filterGroup).getAllByRole('button');

  expect(filterButtons.map((button) => button.textContent)).toEqual([
    'Vision',
    'Dexterity',
    'Auditory',
    'Cognitive',
    'All',
  ]);
  expect(within(filterGroup).getByRole('button', { name: 'All' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );

  allGames.forEach((game) => {
    expect(screen.getByRole('heading', { name: game })).toBeInTheDocument();
  });

  for (const [category, visibleGames] of Object.entries(gamesByCategory)) {
    const filterButton = within(filterGroup).getByRole('button', { name: category });

    expect(filterButton).toHaveAttribute('type', 'button');
    await userEvent.click(filterButton);
    expect(filterButton).toHaveAttribute('aria-pressed', 'true');

    visibleGames.forEach((game) => {
      expect(screen.getByRole('heading', { name: game })).toBeInTheDocument();
    });
    allGames
      .filter((game) => !visibleGames.includes(game))
      .forEach((game) => {
        expect(screen.queryByRole('heading', { name: game })).not.toBeInTheDocument();
      });
  }

  const visionButton = within(filterGroup).getByRole('button', { name: 'Vision' });
  visionButton.focus();
  await userEvent.tab();
  expect(within(filterGroup).getByRole('button', { name: 'Dexterity' })).toHaveFocus();

  await userEvent.click(within(filterGroup).getByRole('button', { name: 'All' }));
  expect(within(filterGroup).getByRole('button', { name: 'All' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );
  allGames.forEach((game) => {
    expect(screen.getByRole('heading', { name: game })).toBeInTheDocument();
  });
});
