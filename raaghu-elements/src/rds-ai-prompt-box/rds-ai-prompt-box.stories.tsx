import React from 'react';
        import { Meta, StoryObj } from '@storybook/react';
        import RdsAiPromptBox from './rds-ai-prompt-box';

        const meta: Meta = {
        title: 'Elements/Ai Prompt Box',
        component: RdsAiPromptBox,
        parameters: {
                layout: 'padded',
            },
            tags: ['autodocs'],
            argTypes: {
            },
        } satisfies Meta<typeof RdsAiPromptBox>;


        export default meta;

        type Story = StoryObj<typeof RdsAiPromptBox>;

        export const Default: Story = {
                args: {
                        prefilledprompt: [
                                { question: "Prefilled Prompt 1" },
                                { question: "Prefilled Prompt 2" },
                                { question: "Prefilled Prompt 3" },
                                { question: "Prefilled Prompt 4" },
                            ],

                }
            } satisfies Story;
            Default.parameters = { controls: { include: ['prefilledprompt'] } };
            