import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { firstName, lastName, lastSeen } from 'shared/config/storybook/const/data';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        firstName,
        lastName,
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const GreenExtraSmallAvatar = Template.bind({});
GreenExtraSmallAvatar.args = { avatar: 'green', size: 'extraSmall', lastSeen: lastSeen(false) };

export const GreenExtraSmallAvatarOnline = Template.bind({});
GreenExtraSmallAvatarOnline.args = { avatar: 'green', size: 'extraSmall', lastSeen: lastSeen(true) };

export const TealExtraSmallAvatar = Template.bind({});
TealExtraSmallAvatar.args = { avatar: 'teal', size: 'extraSmall', lastSeen: lastSeen(false) };

export const TealExtraSmallAvatarOnline = Template.bind({});
TealExtraSmallAvatarOnline.args = { avatar: 'teal', size: 'extraSmall', lastSeen: lastSeen(true) };

export const BlueExtraSmallAvatar = Template.bind({});
BlueExtraSmallAvatar.args = { avatar: 'blue', size: 'extraSmall', lastSeen: lastSeen(false) };

export const BlueExtraSmallAvatarOnline = Template.bind({});
BlueExtraSmallAvatarOnline.args = { avatar: 'blue', size: 'extraSmall', lastSeen: lastSeen(true) };

export const IndigoExtraSmallAvatar = Template.bind({});
IndigoExtraSmallAvatar.args = { avatar: 'indigo', size: 'extraSmall', lastSeen: lastSeen(false) };

export const IndigoExtraSmallAvatarOnline = Template.bind({});
IndigoExtraSmallAvatarOnline.args = { avatar: 'indigo', size: 'extraSmall', lastSeen: lastSeen(true) };

export const PurpleExtraSmallAvatar = Template.bind({});
PurpleExtraSmallAvatar.args = { avatar: 'purple', size: 'extraSmall', lastSeen: lastSeen(false) };

export const PurpleExtraSmallAvatarOnline = Template.bind({});
PurpleExtraSmallAvatarOnline.args = { avatar: 'purple', size: 'extraSmall', lastSeen: lastSeen(true) };

export const PinkExtraSmallAvatar = Template.bind({});
PinkExtraSmallAvatar.args = { avatar: 'pink', size: 'extraSmall', lastSeen: lastSeen(false) };

export const PinkExtraSmallAvatarOnline = Template.bind({});
PinkExtraSmallAvatarOnline.args = { avatar: 'pink', size: 'extraSmall', lastSeen: lastSeen(true) };

export const RedExtraSmallAvatar = Template.bind({});
RedExtraSmallAvatar.args = { avatar: 'red', size: 'extraSmall', lastSeen: lastSeen(false) };

export const RedExtraSmallAvatarOnline = Template.bind({});
RedExtraSmallAvatarOnline.args = { avatar: 'red', size: 'extraSmall', lastSeen: lastSeen(true) };

export const OrangeExtraSmallAvatar = Template.bind({});
OrangeExtraSmallAvatar.args = { avatar: 'orange', size: 'extraSmall', lastSeen: lastSeen(false) };

export const OrangeExtraSmallAvatarOnline = Template.bind({});
OrangeExtraSmallAvatarOnline.args = { avatar: 'orange', size: 'extraSmall', lastSeen: lastSeen(true) };

export const YellowExtraSmallAvatar = Template.bind({});
YellowExtraSmallAvatar.args = { avatar: 'yellow', size: 'extraSmall', lastSeen: lastSeen(false) };

export const YellowExtraSmallAvatarOnline = Template.bind({});
YellowExtraSmallAvatarOnline.args = { avatar: 'yellow', size: 'extraSmall', lastSeen: lastSeen(true) };

export const GreenSmallAvatar = Template.bind({});
GreenSmallAvatar.args = { avatar: 'green', size: 'small', lastSeen: lastSeen(false) };

export const GreenSmallAvatarOnline = Template.bind({});
GreenSmallAvatarOnline.args = { avatar: 'green', size: 'small', lastSeen: lastSeen(true) };

export const TealSmallAvatar = Template.bind({});
TealSmallAvatar.args = { avatar: 'teal', size: 'small', lastSeen: lastSeen(false) };

export const TealSmallAvatarOnline = Template.bind({});
TealSmallAvatarOnline.args = { avatar: 'teal', size: 'small', lastSeen: lastSeen(true) };

export const BlueSmallAvatar = Template.bind({});
BlueSmallAvatar.args = { avatar: 'blue', size: 'small', lastSeen: lastSeen(false) };

export const BlueSmallAvatarOnline = Template.bind({});
BlueSmallAvatarOnline.args = { avatar: 'blue', size: 'small', lastSeen: lastSeen(true) };

export const IndigoSmallAvatar = Template.bind({});
IndigoSmallAvatar.args = { avatar: 'indigo', size: 'small', lastSeen: lastSeen(false) };

export const IndigoSmallAvatarOnline = Template.bind({});
IndigoSmallAvatarOnline.args = { avatar: 'indigo', size: 'small', lastSeen: lastSeen(true) };

export const PurpleSmallAvatar = Template.bind({});
PurpleSmallAvatar.args = { avatar: 'purple', size: 'small', lastSeen: lastSeen(false) };

export const PurpleSmallAvatarOnline = Template.bind({});
PurpleSmallAvatarOnline.args = { avatar: 'purple', size: 'small', lastSeen: lastSeen(true) };

export const PinkSmallAvatar = Template.bind({});
PinkSmallAvatar.args = { avatar: 'pink', size: 'small', lastSeen: lastSeen(false) };

export const PinkSmallAvatarOnline = Template.bind({});
PinkSmallAvatarOnline.args = { avatar: 'pink', size: 'small', lastSeen: lastSeen(true) };

export const RedSmallAvatar = Template.bind({});
RedSmallAvatar.args = { avatar: 'red', size: 'small', lastSeen: lastSeen(false) };

export const RedSmallAvatarOnline = Template.bind({});
RedSmallAvatarOnline.args = { avatar: 'red', size: 'small', lastSeen: lastSeen(true) };

export const OrangeSmallAvatar = Template.bind({});
OrangeSmallAvatar.args = { avatar: 'orange', size: 'small', lastSeen: lastSeen(false) };

export const OrangeSmallAvatarOnline = Template.bind({});
OrangeSmallAvatarOnline.args = { avatar: 'orange', size: 'small', lastSeen: lastSeen(true) };

export const YellowSmallAvatar = Template.bind({});
YellowSmallAvatar.args = { avatar: 'yellow', size: 'small', lastSeen: lastSeen(false) };

export const YellowSmallAvatarOnline = Template.bind({});
YellowSmallAvatarOnline.args = { avatar: 'yellow', size: 'small', lastSeen: lastSeen(true) };

export const GreenMediumAvatar = Template.bind({});
GreenMediumAvatar.args = { avatar: 'green', size: 'medium', lastSeen: lastSeen(false) };

export const GreenMediumAvatarOnline = Template.bind({});
GreenMediumAvatarOnline.args = { avatar: 'green', size: 'medium', lastSeen: lastSeen(true) };

export const TealMediumAvatar = Template.bind({});
TealMediumAvatar.args = { avatar: 'teal', size: 'medium', lastSeen: lastSeen(false) };

export const TealMediumAvatarOnline = Template.bind({});
TealMediumAvatarOnline.args = { avatar: 'teal', size: 'medium', lastSeen: lastSeen(true) };

export const BlueMediumAvatar = Template.bind({});
BlueMediumAvatar.args = { avatar: 'blue', size: 'medium', lastSeen: lastSeen(false) };

export const BlueMediumAvatarOnline = Template.bind({});
BlueMediumAvatarOnline.args = { avatar: 'blue', size: 'medium', lastSeen: lastSeen(true) };

export const IndigoMediumAvatar = Template.bind({});
IndigoMediumAvatar.args = { avatar: 'indigo', size: 'medium', lastSeen: lastSeen(false) };

export const IndigoMediumAvatarOnline = Template.bind({});
IndigoMediumAvatarOnline.args = { avatar: 'indigo', size: 'medium', lastSeen: lastSeen(true) };

export const PurpleMediumAvatar = Template.bind({});
PurpleMediumAvatar.args = { avatar: 'purple', size: 'medium', lastSeen: lastSeen(false) };

export const PurpleMediumAvatarOnline = Template.bind({});
PurpleMediumAvatarOnline.args = { avatar: 'purple', size: 'medium', lastSeen: lastSeen(true) };

export const PinkMediumAvatar = Template.bind({});
PinkMediumAvatar.args = { avatar: 'pink', size: 'medium', lastSeen: lastSeen(false) };

export const PinkMediumAvatarOnline = Template.bind({});
PinkMediumAvatarOnline.args = { avatar: 'pink', size: 'medium', lastSeen: lastSeen(true) };

export const RedMediumAvatar = Template.bind({});
RedMediumAvatar.args = { avatar: 'red', size: 'medium', lastSeen: lastSeen(false) };

export const RedMediumAvatarOnline = Template.bind({});
RedMediumAvatarOnline.args = { avatar: 'red', size: 'medium', lastSeen: lastSeen(true) };

export const OrangeMediumAvatar = Template.bind({});
OrangeMediumAvatar.args = { avatar: 'orange', size: 'medium', lastSeen: lastSeen(false) };

export const OrangeMediumAvatarOnline = Template.bind({});
OrangeMediumAvatarOnline.args = { avatar: 'orange', size: 'medium', lastSeen: lastSeen(true) };

export const YellowMediumAvatar = Template.bind({});
YellowMediumAvatar.args = { avatar: 'yellow', size: 'medium', lastSeen: lastSeen(false) };

export const YellowMediumAvatarOnline = Template.bind({});
YellowMediumAvatarOnline.args = { avatar: 'yellow', size: 'medium', lastSeen: lastSeen(true) };

export const GreenLargeAvatar = Template.bind({});
GreenLargeAvatar.args = { avatar: 'green', size: 'large', lastSeen: lastSeen(false) };

export const GreenLargeAvatarOnline = Template.bind({});

GreenLargeAvatarOnline.args = { avatar: 'green', size: 'large', lastSeen: lastSeen(true) };

export const TealLargeAvatar = Template.bind({});
TealLargeAvatar.args = { avatar: 'teal', size: 'large', lastSeen: lastSeen(false) };

export const TealLargeAvatarOnline = Template.bind({});
TealLargeAvatarOnline.args = { avatar: 'teal', size: 'large', lastSeen: lastSeen(true) };

export const BlueLargeAvatar = Template.bind({});
BlueLargeAvatar.args = { avatar: 'blue', size: 'large', lastSeen: lastSeen(false) };

export const BlueLargeAvatarOnline = Template.bind({});
BlueLargeAvatarOnline.args = { avatar: 'blue', size: 'large', lastSeen: lastSeen(true) };

export const IndigoLargeAvatar = Template.bind({});
IndigoLargeAvatar.args = { avatar: 'indigo', size: 'large', lastSeen: lastSeen(false) };

export const IndigoLargeAvatarOnline = Template.bind({});
IndigoLargeAvatarOnline.args = { avatar: 'indigo', size: 'large', lastSeen: lastSeen(true) };

export const PurpleLargeAvatar = Template.bind({});
PurpleLargeAvatar.args = { avatar: 'purple', size: 'large', lastSeen: lastSeen(false) };

export const PurpleLargeAvatarOnline = Template.bind({});
PurpleLargeAvatarOnline.args = { avatar: 'purple', size: 'large', lastSeen: lastSeen(true) };

export const PinkLargeAvatar = Template.bind({});
PinkLargeAvatar.args = { avatar: 'pink', size: 'large', lastSeen: lastSeen(false) };

export const PinkLargeAvatarOnline = Template.bind({});
PinkLargeAvatarOnline.args = { avatar: 'pink', size: 'large', lastSeen: lastSeen(true) };

export const RedLargeAvatar = Template.bind({});
RedLargeAvatar.args = { avatar: 'red', size: 'large', lastSeen: lastSeen(false) };

export const RedLargeAvatarOnline = Template.bind({});
RedLargeAvatarOnline.args = { avatar: 'red', size: 'large', lastSeen: lastSeen(true) };

export const OrangeLargeAvatar = Template.bind({});
OrangeLargeAvatar.args = { avatar: 'orange', size: 'large', lastSeen: lastSeen(false) };

export const OrangeLargeAvatarOnline = Template.bind({});
OrangeLargeAvatarOnline.args = { avatar: 'orange', size: 'large', lastSeen: lastSeen(true) };

export const YellowLargeAvatar = Template.bind({});
YellowLargeAvatar.args = { avatar: 'yellow', size: 'large', lastSeen: lastSeen(false) };

export const YellowLargeAvatarOnline = Template.bind({});
YellowLargeAvatarOnline.args = { avatar: 'yellow', size: 'large', lastSeen: lastSeen(true) };
