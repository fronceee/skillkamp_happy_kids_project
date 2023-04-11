import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function FAQ() {
  return (
    <div className="w-screen px-4 py-16 text-main-1">
      <div className="mx-auto w-full max-w-3xl rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                <span>What is an FAQ section?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                An FAQ section can be used to quickly answer common questions
                about you or your business, such as “Where do you ship to?”,
                “What are your opening hours?” or “How can I book a service?”
                It’s a great way to help people navigate your site and can even
                boost your site’s SEO.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default FAQ;
