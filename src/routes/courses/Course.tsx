import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { CourseTabList } from "../../components/CourseTabList";
import { CenteredLoader } from "../../components/ui/CenteredLoader";

export default function Course() {
    return (
        <Suspense fallback={<CenteredLoader />}>
            <CourseTabList />
            <Outlet />
        </Suspense>
    );
}
