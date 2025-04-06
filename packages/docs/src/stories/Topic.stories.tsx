import { StoryObj, Meta } from '@storybook/react';

import { Topic } from '@sellx/react';

export default {
  title: 'Typography/Text',
  component: Topic,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vitae obcaecati autem placeat quasi molestias corrupti quidem quas ipsum mollitia ex beatae consequuntur quaerat sit architecto excepturi odit, sint dolorum?',
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select'
      },
    },
  },
} as Meta<Topic>

export const Default: StoryObj<Topic> = {}

export const CustomTag: StoryObj<Topic> = {
  args: {
    as: 'strong',
  }
}
