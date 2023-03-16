import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        firstName: 'a',
        lastName: 'b',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const GreenSmallAvatar = Template.bind({});
GreenSmallAvatar.args = { avatar: 'green', size: 'small' };

export const TealSmallAvatar = Template.bind({});
TealSmallAvatar.args = { avatar: 'teal', size: 'small' };

export const BlueSmallAvatar = Template.bind({});
BlueSmallAvatar.args = { avatar: 'blue', size: 'small' };

export const IndigoSmallAvatar = Template.bind({});
IndigoSmallAvatar.args = { avatar: 'indigo', size: 'small' };

export const PurpleSmallAvatar = Template.bind({});
PurpleSmallAvatar.args = { avatar: 'purple', size: 'small' };

export const PinkSmallAvatar = Template.bind({});
PinkSmallAvatar.args = { avatar: 'pink', size: 'small' };

export const RedSmallAvatar = Template.bind({});
RedSmallAvatar.args = { avatar: 'red', size: 'small' };

export const OrangeSmallAvatar = Template.bind({});
OrangeSmallAvatar.args = { avatar: 'orange', size: 'small' };

export const YellowSmallAvatar = Template.bind({});
YellowSmallAvatar.args = { avatar: 'yellow', size: 'small' };

export const GreenMediumAvatar = Template.bind({});
GreenMediumAvatar.args = { avatar: 'green', size: 'medium' };

export const TealMediumAvatar = Template.bind({});
TealMediumAvatar.args = { avatar: 'teal', size: 'medium' };

export const BlueMediumAvatar = Template.bind({});
BlueMediumAvatar.args = { avatar: 'blue', size: 'medium' };

export const IndigoMediumAvatar = Template.bind({});
IndigoMediumAvatar.args = { avatar: 'indigo', size: 'medium' };

export const PurpleMediumAvatar = Template.bind({});
PurpleMediumAvatar.args = { avatar: 'purple', size: 'medium' };

export const PinkMediumAvatar = Template.bind({});
PinkMediumAvatar.args = { avatar: 'pink', size: 'medium' };

export const RedMediumAvatar = Template.bind({});
RedMediumAvatar.args = { avatar: 'red', size: 'medium' };

export const OrangeMediumAvatar = Template.bind({});
OrangeMediumAvatar.args = { avatar: 'orange', size: 'medium' };

export const YellowMediumAvatar = Template.bind({});
YellowMediumAvatar.args = { avatar: 'yellow', size: 'medium' };
