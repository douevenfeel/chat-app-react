import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography
                size='medium'
                tag='p'
                variant='primary'
                weight='medium'
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores minus officiis, nam eveniet
                quibusdam tenetur commodi, fugiat voluptatibus sint provident harum vero voluptas voluptates alias nobis
                corrupti numquam accusantium.
            </Typography>
            <Button
                size='small'
                variant='primary'
                onClick={() => alert('close')}
            >
                Close
            </Button>
        </div>
    ),
    isOpen: true,
    onClose: () => alert('onClose'),
};
