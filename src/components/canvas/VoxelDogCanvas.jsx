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
            className="relative -z-0 mx-auto pt-[80px] md:pt-[120px] lg:pt-[100px] w-[280px] sm:w-[480px] lg:w-[640px] h-[280px] sm:h-[480px] lg:h-[640px]"
        >
            {children}
        </div>
    );
});

export const VoxelDogCanvas = dynamic(() => import("./VoxelDog"), {
    ssr: false,
    loading: () => (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    ),
});

export default VoxelDogCanvas;
