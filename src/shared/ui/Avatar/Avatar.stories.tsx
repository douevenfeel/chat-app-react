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

export const GreenSmallAvatarOnline = Template.bind({});
GreenSmallAvatarOnline.args = { avatar: 'green', size: 'small', isOnline: true };

export const TealSmallAvatar = Template.bind({});
TealSmallAvatar.args = { avatar: 'teal', size: 'small' };

export const TealSmallAvatarOnline = Template.bind({});
TealSmallAvatarOnline.args = { avatar: 'teal', size: 'small', isOnline: true };

export const BlueSmallAvatar = Template.bind({});
BlueSmallAvatar.args = { avatar: 'blue', size: 'small' };

export const BlueSmallAvatarOnline = Template.bind({});
BlueSmallAvatarOnline.args = { avatar: 'blue', size: 'small', isOnline: true };

export const IndigoSmallAvatar = Template.bind({});
IndigoSmallAvatar.args = { avatar: 'indigo', size: 'small' };

export const IndigoSmallAvatarOnline = Template.bind({});
IndigoSmallAvatarOnline.args = { avatar: 'indigo', size: 'small', isOnline: true };

export const PurpleSmallAvatar = Template.bind({});
PurpleSmallAvatar.args = { avatar: 'purple', size: 'small' };

export const PurpleSmallAvatarOnline = Template.bind({});
PurpleSmallAvatarOnline.args = { avatar: 'purple', size: 'small', isOnline: true };

export const PinkSmallAvatar = Template.bind({});
PinkSmallAvatar.args = { avatar: 'pink', size: 'small' };

export const PinkSmallAvatarOnline = Template.bind({});
PinkSmallAvatarOnline.args = { avatar: 'pink', size: 'small', isOnline: true };

export const RedSmallAvatar = Template.bind({});
RedSmallAvatar.args = { avatar: 'red', size: 'small' };

export const RedSmallAvatarOnline = Template.bind({});
RedSmallAvatarOnline.args = { avatar: 'red', size: 'small', isOnline: true };

export const OrangeSmallAvatar = Template.bind({});
OrangeSmallAvatar.args = { avatar: 'orange', size: 'small' };

export const OrangeSmallAvatarOnline = Template.bind({});
OrangeSmallAvatarOnline.args = { avatar: 'orange', size: 'small', isOnline: true };

export const YellowSmallAvatar = Template.bind({});
YellowSmallAvatar.args = { avatar: 'yellow', size: 'small' };

export const YellowSmallAvatarOnline = Template.bind({});
YellowSmallAvatarOnline.args = { avatar: 'yellow', size: 'small', isOnline: true };

export const GreenMediumAvatar = Template.bind({});
GreenMediumAvatar.args = { avatar: 'green', size: 'medium' };

export const GreenMediumAvatarOnline = Template.bind({});
GreenMediumAvatarOnline.args = { avatar: 'green', size: 'medium', isOnline: true };

export const TealMediumAvatar = Template.bind({});
TealMediumAvatar.args = { avatar: 'teal', size: 'medium' };

export const TealMediumAvatarOnline = Template.bind({});
TealMediumAvatarOnline.args = { avatar: 'teal', size: 'medium', isOnline: true };

export const BlueMediumAvatar = Template.bind({});
BlueMediumAvatar.args = { avatar: 'blue', size: 'medium' };

export const BlueMediumAvatarOnline = Template.bind({});
BlueMediumAvatarOnline.args = { avatar: 'blue', size: 'medium', isOnline: true };

export const IndigoMediumAvatar = Template.bind({});
IndigoMediumAvatar.args = { avatar: 'indigo', size: 'medium' };

export const IndigoMediumAvatarOnline = Template.bind({});
IndigoMediumAvatarOnline.args = { avatar: 'indigo', size: 'medium', isOnline: true };

export const PurpleMediumAvatar = Template.bind({});
PurpleMediumAvatar.args = { avatar: 'purple', size: 'medium' };

export const PurpleMediumAvatarOnline = Template.bind({});
PurpleMediumAvatarOnline.args = { avatar: 'purple', size: 'medium', isOnline: true };

export const PinkMediumAvatar = Template.bind({});
PinkMediumAvatar.args = { avatar: 'pink', size: 'medium' };

export const PinkMediumAvatarOnline = Template.bind({});
PinkMediumAvatarOnline.args = { avatar: 'pink', size: 'medium', isOnline: true };

export const RedMediumAvatar = Template.bind({});
RedMediumAvatar.args = { avatar: 'red', size: 'medium' };

export const RedMediumAvatarOnline = Template.bind({});
RedMediumAvatarOnline.args = { avatar: 'red', size: 'medium', isOnline: true };

export const OrangeMediumAvatar = Template.bind({});
OrangeMediumAvatar.args = { avatar: 'orange', size: 'medium' };

export const OrangeMediumAvatarOnline = Template.bind({});
OrangeMediumAvatarOnline.args = { avatar: 'orange', size: 'medium', isOnline: true };

export const YellowMediumAvatar = Template.bind({});
YellowMediumAvatar.args = { avatar: 'yellow', size: 'medium' };

export const YellowMediumAvatarOnline = Template.bind({});
YellowMediumAvatarOnline.args = { avatar: 'yellow', size: 'medium', isOnline: true };

export const GreenLargeAvatar = Template.bind({});
GreenLargeAvatar.args = { avatar: 'green', size: 'large' };

export const GreenLargeAvatarOnline = Template.bind({});

GreenLargeAvatarOnline.args = { avatar: 'green', size: 'large', isOnline: true };

export const TealLargeAvatar = Template.bind({});
TealLargeAvatar.args = { avatar: 'teal', size: 'large' };

export const TealLargeAvatarOnline = Template.bind({});
TealLargeAvatarOnline.args = { avatar: 'teal', size: 'large', isOnline: true };

export const BlueLargeAvatar = Template.bind({});
BlueLargeAvatar.args = { avatar: 'blue', size: 'large' };

export const BlueLargeAvatarOnline = Template.bind({});
BlueLargeAvatarOnline.args = { avatar: 'blue', size: 'large', isOnline: true };

export const IndigoLargeAvatar = Template.bind({});
IndigoLargeAvatar.args = { avatar: 'indigo', size: 'large' };

export const IndigoLargeAvatarOnline = Template.bind({});
IndigoLargeAvatarOnline.args = { avatar: 'indigo', size: 'large', isOnline: true };

export const PurpleLargeAvatar = Template.bind({});
PurpleLargeAvatar.args = { avatar: 'purple', size: 'large' };

export const PurpleLargeAvatarOnline = Template.bind({});
PurpleLargeAvatarOnline.args = { avatar: 'purple', size: 'large', isOnline: true };

export const PinkLargeAvatar = Template.bind({});
PinkLargeAvatar.args = { avatar: 'pink', size: 'large' };

export const PinkLargeAvatarOnline = Template.bind({});
PinkLargeAvatarOnline.args = { avatar: 'pink', size: 'large', isOnline: true };

export const RedLargeAvatar = Template.bind({});
RedLargeAvatar.args = { avatar: 'red', size: 'large' };

export const RedLargeAvatarOnline = Template.bind({});
RedLargeAvatarOnline.args = { avatar: 'red', size: 'large', isOnline: true };

export const OrangeLargeAvatar = Template.bind({});
OrangeLargeAvatar.args = { avatar: 'orange', size: 'large' };

export const OrangeLargeAvatarOnline = Template.bind({});
OrangeLargeAvatarOnline.args = { avatar: 'orange', size: 'large', isOnline: true };

export const YellowLargeAvatar = Template.bind({});
YellowLargeAvatar.args = { avatar: 'yellow', size: 'large' };

export const YellowLargeAvatarOnline = Template.bind({});
YellowLargeAvatarOnline.args = { avatar: 'yellow', size: 'large', isOnline: true };
