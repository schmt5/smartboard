import { useEffect, useState } from 'react';
import { Box, createStyles, Divider, Text } from '@mantine/core';
import { RichTextEditor, Link } from '@mantine/tiptap';
import { JSONContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useDebounce } from 'usehooks-ts';
import { useMutation } from 'urql';
import { Show } from './ui/Show';

const useStyles = createStyles((theme) => ({
    root: {
        borderColor: theme.colors.gray[4],
        fontSize: theme.fontSizes.sm,
    },
    toolbar: {
        padding: 8,
        paddingRight: 32,
        gap: 8,
        borderColor: theme.colors.gray[4],
    },
    control: {
        border: 'none',
        borderRadius: '4px !important',
        '&:hover': {
            backgroundColor: theme.colors.gray[2] + ' !important',
        },
    }
}))

interface Props {
    label: string;
    value: any;
    onChange: any;
    onBlur: any;
}

export const RichText = ({ label, value, onChange, onBlur }: Props) => {
    const { classes, cx } = useStyles();

    const editor = useEditor({
        extensions: [
            Link,
            StarterKit,
            Placeholder.configure({ placeholder: 'Beschreibe deinen Kurs' })
        ],
        content: value ?? '',
        onUpdate: ({ editor }) => {
            onChange(editor.getJSON());
        },
    });

    return (
        <>
            <Text sx={theme => ({
                fontWeight: 500,
                color: theme.colors.dark[9],
            })}>
                {label}
            </Text>
            <RichTextEditor
                editor={editor}
                onBlur={onBlur}
                classNames={{
                    root: classes.root,
                    toolbar: classes.toolbar,
                    control: classes.control,
                }}
            >
                <Box sx={{ height: 43 }}>
                    <RichTextEditor.Toolbar sticky>
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.H1 />
                            <RichTextEditor.H2 />
                            <RichTextEditor.H3 />
                        </RichTextEditor.ControlsGroup>
                        <Divider orientation="vertical" />
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Bold />
                            <RichTextEditor.Italic />
                            <RichTextEditor.Underline />
                            <RichTextEditor.Code />
                        </RichTextEditor.ControlsGroup>
                        <Divider orientation="vertical" />
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.BulletList />
                            <RichTextEditor.OrderedList />
                        </RichTextEditor.ControlsGroup>
                        <Divider orientation="vertical" />
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Link />
                            <RichTextEditor.Unlink />
                        </RichTextEditor.ControlsGroup>
                    </RichTextEditor.Toolbar>
                </Box>
                <RichTextEditor.Content />
            </RichTextEditor>
        </>
    );
};
