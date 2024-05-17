import React from "react";
import { motion , useCycle } from "framer-motion";
import QuestionOpenBtn from "./QuestionOpenBtn";


const QuestionItem = ({question}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const ansVarient = {

    open : {
        height : 'auto',
        opacity : 1
    },

    close : {
        height : 0,
        opacity : 0
    }

  }

  return (
    <div
        onClick={toggleOpen}
      className="border-b-[1px] border-slate-500 py-5 grid gap-5 overflow-hidden"
    >
      <div className="flex justify-between flex-nowrap">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        <QuestionOpenBtn toggleOpen={toggleOpen} isOpen={isOpen} />
      </div>
      <motion.p variants={ansVarient} animate={ isOpen ? 'open' : 'close' } className="tracking-[.03rem] text-slate-300">{question.answer}</motion.p>
    </div>
  );
};

export default QuestionItem;
