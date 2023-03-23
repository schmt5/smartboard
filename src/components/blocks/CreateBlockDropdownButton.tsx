import { useContext } from "react";
import { ActionIcon, Button, Flex, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { ActionType, BlockMutationDispatchContext } from "../../context/BlockContext";
import { BlockMutationDrawer } from "./BlockMutationDrawer";

export const CreateBlockDropdownButton = () => {
    const dispatch = useContext(BlockMutationDispatchContext);

    const handleDispatch = (actionType: ActionType) => {
        if (dispatch) {
            dispatch({
                type: actionType,
                payload: null,
            });
        }
    }

    return (
        <>
            <Flex my={'lg'} justify={'center'}>
                <Button
                    sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                    onClick={() => handleDispatch('CREATE_RICHTEXT')}
                    variant={'outline'}
                >
                    Einfügen
                </Button>
                <Menu shadow={'md'} width={200}>
                    <Menu.Target>
                        <ActionIcon
                            variant="outline"
                            size={36}
                            color="indigo"
                            sx={theme => ({ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftColor: theme.colors.indigo[3], borderLeft: 0 })}
                        >
                            <IconChevronDown />
                        </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Label>Blöcke</Menu.Label>
                        <Menu.Item onClick={() => handleDispatch('CREATE_RICHTEXT')}>RichText-Editor</Menu.Item>
                        <Menu.Item>Checkbox</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Flex>
            <BlockMutationDrawer />
        </>
    );
}
