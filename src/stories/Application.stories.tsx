import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Application } from './Application';

export default {
  title: 'Example/Application',
  component: Application,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Application>;

const Template: ComponentStory<typeof Application> = () => <Application />;

export const App = Template.bind({});
