import { styles } from "../../constants/styles";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        <p className="text-secondary text-center w-full py-8">No testimonials available.</p>
      </div>
    </div>
  );
};

export default Feedbacks;
