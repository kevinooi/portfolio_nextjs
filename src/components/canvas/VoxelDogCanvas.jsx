import { forwardRef } from "react";
import dynamic from "next/dynamic";

export const DogSpinner = () => (
    <div className="absolute left-1/2 top-1/2">
        <div className="canvas-loader"></div>
    </div>
);

export const DogContainer = forwardRef(({ children }, ref) => {
    return (
        <div
            ref={ref}
            className="relative -z-0 mx-auto pt-30Sch w-280 sm:w-480 md:w-640 lg:w-800"
        >
            {children}
        </div>
    );
});

export const VoxelDogCanvas = dynamic(() => import("./VoxelDog"), {
    ssr: false,
    loading: () => <DogSpinner />,
});

export default VoxelDogCanvas;
