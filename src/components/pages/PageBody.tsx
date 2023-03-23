import { Loader } from "@mantine/core";
import { Suspense } from "react";
import { BlockList } from "../blocks/BlockList";
import { CreateBlockDropdownButton } from "../blocks/CreateBlockDropdownButton";

export const PageBody = () => {

    return (
        <Suspense fallback={<Loader />}>
            <BlockList />
            <CreateBlockDropdownButton />
        </Suspense>
    );
}
