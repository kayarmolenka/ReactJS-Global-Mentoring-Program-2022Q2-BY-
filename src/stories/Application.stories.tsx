import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Application, NavMenu } from './index';

export default {
  title: 'Example/Application',
  component: Application,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Application>;

const Template: ComponentStory<typeof Application> = () => <Application />;

const Template2: ComponentStory<typeof NavMenu> = () => <NavMenu />;

export const ApplicationTemplate = Template.bind({});
export const NavMenuTemplate = Template2.bind({});
