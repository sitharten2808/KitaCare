import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { useLanguage } from '../../contexts/LanguageContext';

interface FAQItem {
  id: number;
  questionKey: string;
  answerKey: string;
  icon?: string;
  iconPosition?: string;
}

interface FaqSectionProps {
  data: FAQItem[];
}

export default function FaqSection({ data }: FaqSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const { t } = useLanguage(); // Use the useLanguage hook to access the t function

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="mb-6 rounded-2xl border border-border bg-gray-100 dark:bg-zinc-800 transition-colors duration-300 p-5 shadow-sm"
          >
            <Accordion.Item value={item.id.toString()}>
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-x-4 text-left rounded-xl px-4 py-3 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    {item.icon && (
                      <span
                        className={`text-xl ${
                          item.iconPosition === "right" ? "order-last ml-auto" : ""
                        }`}
                        style={{
                          transform:
                            item.iconPosition === "right"
                              ? "rotate(7deg)"
                              : "rotate(-4deg)",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="font-semibold text-base md:text-lg">
                      {t(item.questionKey)} {/* Translate the question */}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-gray-400">
                    {openItem === item.id.toString() ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#7CB9E8"
                        className="size-5 md:size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 md:size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content asChild forceMount style={{ display: "block" }}>
                <motion.div
                  initial="collapsed"
                  animate={openItem === item.id.toString() ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-3"
                >
                  <div className="rounded-xl px-4 py-3 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 relative w-fit max-w-full text-sm md:text-base">
                    {t(item.answerKey)} {/* Translate the answer */}
                    <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[10px] border-t-[10px] border-l-transparent border-t-blue-100 dark:border-t-blue-900"></div>
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          </div>
        ))}
      </Accordion.Root>
    </div>
  );
}
