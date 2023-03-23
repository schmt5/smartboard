import { useState } from "react";
import { ActionIcon, Box, Button, Center, Flex, Text, Tooltip } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { CreatePageDrawer } from "./CreatePageDrawer";

interface PageNavCreateProps {
    isSidebarOpen: boolean;
    pageCount: number;
}

export const PageNavCreate = ({ isSidebarOpen, pageCount }: PageNavCreateProps) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const onOpen = () => setOpenDrawer(true);
    const onClose = () => setOpenDrawer(false);

    const iconLink = (
        <Tooltip
            label={'Seite hinzufügen'}
            position="right"
        >
            <Center>
                <ActionIcon
                    color={'dark'}
                    size={'lg'}
                    onClick={onOpen}
                >
                    <IconPlus />
                </ActionIcon>
            </Center>
        </Tooltip>
    );

    const textLink = (
        <Flex justify={'flex-start'}>
            <Button
                variant={'subtle'}
                color={'dark'}
                leftIcon={<IconPlus size={20} />}
                onClick={onOpen}
            >
                <Text sx={{ whiteSpace: 'nowrap' }}>
                    Seite hinzufügen
                </Text>
            </Button>
        </Flex>
    );

    return (
        <>
            <Box mt={'lg'}>
                {isSidebarOpen ? textLink : iconLink}
            </Box>
            <CreatePageDrawer
                open={openDrawer}
                onClose={onClose}
                pageCount={pageCount}
            />
        </>
    );
}
