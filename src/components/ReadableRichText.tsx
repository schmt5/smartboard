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
    value: any;
}

export const ReadableRichText = ({ value }: Props) => {
    const { classes, cx } = useStyles();

    const editor = useEditor({
        extensions: [
            Link,
            StarterKit,
        ],
        content: value ?? '',
    });

    return (
        <>
            <RichTextEditor
                editor={editor}
                classNames={{
                    root: classes.root,
                    toolbar: classes.toolbar,
                    control: classes.control,
                }}
            >
                <RichTextEditor.Content />
            </RichTextEditor>
        </>
    );
};
