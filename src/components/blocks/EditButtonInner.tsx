import { ActionIcon, Box } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";

interface Props {
    handleClick: () => void;
}

export const EditButtonInner = ({ handleClick }: Props) => {
    return (
        <Box sx={{ marginLeft: 'auto' }}>
            <ActionIcon
                variant={'subtle'}
                onClick={handleClick}
            >
                <IconEdit size="1.125rem" />
            </ActionIcon>
        </Box>
    );
}
