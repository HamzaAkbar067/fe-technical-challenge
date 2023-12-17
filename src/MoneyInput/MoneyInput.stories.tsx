import { Meta } from '@storybook/react'
import MoneyInput from './MoneyInput';
import { MoneyInputProps } from "./types";
import { EN_LOCALE } from "./constants";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/MoneyInput',
  component: MoneyInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args:  {
    value: null,
    locale: EN_LOCALE
  }
} satisfies Meta<typeof MoneyInput>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MoneyInputComponent = (args:MoneyInputProps) =>  <MoneyInput {...args} />;

export const Disabled = {
  args: {
    isDisabled: true
  }
};

export const Default = {
  args: {
    isDefault: true
  }
};

export const PropValueIntegerInCent = {
  args: {
    value: 5000
  }
};

