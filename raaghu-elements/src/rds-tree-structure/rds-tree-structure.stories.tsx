import React from 'react';
        import { Story, Meta } from '@storybook/react';
        import RdsTreeStructure from './rds-tree-structure';

        export default {
        title: 'Elements/Tree Structure',
        component: RdsTreeStructure,
        parameters: {
                layout: 'padded',
            },
            tags: ['autodocs'],
        argTypes: {
                level: {
                    options: [
                        "level1",
                        "level2",
                        "level3",
                        "level4",
                    ],
                    control: { type: "select" },
                },
                folderType: {
                        options: [
                                "circle",
                                "folder",
                        ],
                        control: { type: "select" },
                },
                state: {
                        options: [
                                "default",
                                "hover",
                                "selected"
                        ],
                        control: { type: "select" },
                },
                fileLanguage: {
                        options:[
                                "CSS",
                                "Cplus",
                                "Config",
                                "Database",
                                "Default",
                                "Docker",
                                "ESLint",
                                "Git",
                                "GitHub",
                                "Go",
                                "Gulp",
                                "HTML",
                                "JS",
                                "JSON",
                                "Markdown",
                                "Notebook",
                                "Python",
                                "React",
                                "Sass",
                                "TypeScript",
                                "XML",
                                "YML"

                        ],
                        control:{ type: "select"}
                } 
            },
        } as Meta;

        const Template: Story<{}> = (args) => <RdsTreeStructure {...args} />;

        export const Default = Template.bind({});
        Default.args = {
                level: "level1",
                state: "default",
                showChewron: true,
                showCheckbox: true,
                showFolder: true,
                showFileIcon: true,
                showActions: true,
                showCollapsed: true,
                folderType: "circle",
                fileLanguage: "CSS"
        };
        Default.parameters = { controls: { include: ['level','state','showChewron','showCheckbox','showFolder','showFileIcon','showActions','showCollapsed','fileLanguage','folderType'] } };