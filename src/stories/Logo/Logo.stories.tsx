import { Story } from '@storybook/react';
import { Logo, LogoProps } from '../../shared/components/Logo/Logo';

export default {
  component: Logo,
  title: 'Components/Logo'
};

export const Template: Story<LogoProps> = (args: LogoProps) => {
  const { variant } = args;
  return <Logo variant={variant} />;
};

export const LogoSmall = Template.bind({});
LogoSmall.args = {
  variant: 'small'
};
export const LogoMedium = Template.bind({});
LogoMedium.args = {
  variant: 'medium'
};
export const LogoBig = Template.bind({});
LogoBig.args = {
  variant: 'small'
};
