import { Box, createStyles, Paper } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "urql";
import { useLocalStorage } from "usehooks-ts";
import { PageLink } from "../../PageLink";
import { PageNavCreate } from "./PageNavCreate";
import { PageNavToggle } from "./PageNavToggle";
import { PagesByCourseQuery } from "../../urql/queries/pagesByCourseQuery";

const useStyle = createStyles(() => ({
    sidebar: {
        flexBasis: 74,
        transition: 'flex-basis 0.34s ease-out',
        height: 'calc(100vh - 106px)',
        borderTop: 0,
        borderBottom: 0,
        overflow: 'hidden',

        '&[data-open="true"]': {
            flexBasis: 340,
            transitionTimingFunction: 'ease-in',
        }
    }
}))

export const Sidebar = () => {
    const { classes } = useStyle();
    const { courseId } = useParams();
    const [open, setOpen] = useLocalStorage('sidebarOpen', true);
    const [{ data }] = useQuery({ query: PagesByCourseQuery, variables: { courseId: courseId! } });

    const toggleOpen = () => setOpen(prevState => !prevState);

    return (
        <Paper
            className={classes.sidebar}
            data-open={open}
            radius={0}
            withBorder
            p={'sm'}
        >
            <PageNavToggle
                open={open}
                toggleOpen={toggleOpen}
            />
            <Box mt={'lg'}>
                {data?.pagesList.items.map((item: any) => (
                    <PageLink
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        isSidebarOpen={open}
                    />
                ))}
            </Box>
            <PageNavCreate
                isSidebarOpen={open}
                pageCount={data?.pagesList.count!}
            />
        </Paper>
    );
}
