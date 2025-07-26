import SpinCircle from "@/components/SpinCircle";

type CurrentSliderCircleProps = {
  currentSlider: number;
  changeCurrentSliderIndex: (newSliderIndex: number) => void;
};

function CurrentSliderCircle({
  currentSlider,
  changeCurrentSliderIndex,
}: CurrentSliderCircleProps) {
  const totalSlides = 5;

  return (
    <>
      <div className="flex items-center gap-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index}>
            {currentSlider === index ? (
              <SpinCircle />
            ) : (
              <div
                onClick={() => changeCurrentSliderIndex(index)}
                className="w-2 h-2 rounded-full bg-white/60 cursor-pointer
                "
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default CurrentSliderCircle;
