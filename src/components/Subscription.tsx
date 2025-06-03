import { motion } from "motion/react";

import subscription_image_1 from "@/assets/subscription_image_1.png";
import subscription_image_2 from "@/assets/subscription_image_2.png";

export default function Subscription() {
  return (
    <motion.div className="-translate-y-[200px]">
      <div className="customContainer font-barlow">
        <p className="text-[32px] font-medium mb-6 text-white">
          Subscriptions Packs
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="relative w-full lg:w-[632px] h-[364px] flex items-end overflow-hidden rounded-[10px]">
            <img
              src={subscription_image_2}
              alt="subscription_image_2"
              className="absolute w-full h-full top-0 left-0 object-cover bg-top"
            />

            <div className="relative z-300 p-4">
              <button className="btn bg-red-800 mb-4">7 days free</button>
              <p className="text-white mb-4">Amsterdam</p>

              <div className="flex-wrap gap-2 flex w-full items-center justify-between">
                <p className=" sm:w-[300px] lg:w-[400px]">
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>

                <button className="btn bg-[#5800C4]">Subscriptions</button>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[632px] h-[364px] flex items-end overflow-hidden rounded-[10px]">
            <img
              src={subscription_image_1}
              alt="subscription_image_1"
              className="absolute w-full h-full top-0 left-0 object-cover bg-top"
            />

            <div className="relative w-full z-300 p-4">
              <button className="btn bg-red-800 mb-4">Best choice</button>
              <p className="text-white mb-4">Thor: Love and Thunder</p>

              <div className="flex-wrap gap-2 flex items-center justify-between">
                <p className=" sm:w-[300px] lg:w-[400px]">
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>

                <button className="btn bg-[#5800C4]">Subscriptions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
