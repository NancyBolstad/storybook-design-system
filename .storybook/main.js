module.exports = {
  stories: ['../src/**/stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y/register',
  ],
};
