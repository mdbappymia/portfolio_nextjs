import { Button, Card, Label } from "flowbite-react";
import React from "react";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <Card className="rounded-3xl lg:px-4 md:px-2">
      <form className="gap-4">
        <div className="md:grid grid-cols-2 gap-3">
          <div className="mt-5">
            <div className="mb-2 block">
              <Label
                className="text-xl font-bold"
                htmlFor="name"
                value="Name"
              />
            </div>
            <input
              id="name"
              type="text"
              placeholder="Your Name Here"
              required
              className="bg-transparent text-lg py-3 w-full rounded-lg !ring-transparent ring-0 dark:!border-gray-700 !border-gray-300"
            />
          </div>
          <div className="mt-5">
            <div className="mb-2 block">
              <Label
                className="text-xl font-bold"
                htmlFor="email"
                value="Email"
              />
            </div>
            <input
              className="bg-transparent text-lg py-3 w-full rounded-lg !ring-transparent ring-0 dark:!border-gray-700 !border-gray-300"
              id="email"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mt-5">
            <div className="mb-2 block">
              <Label
                className="text-xl font-bold"
                htmlFor="phone"
                value="Phone (Optional)"
              />
            </div>
            <input
              className="bg-transparent text-lg py-3 w-full rounded-lg !ring-transparent ring-0 dark:!border-gray-700 !border-gray-300"
              id="phone"
              type="text"
              placeholder="+8801000000000"
            />
          </div>
          <div className="mt-5">
            <div className="mb-2 block">
              <Label
                className="text-xl font-bold"
                htmlFor="subject"
                value="Subject"
              />
            </div>
            <input
              className="bg-transparent text-lg py-3 w-full rounded-lg !ring-transparent ring-0 dark:!border-gray-700 !border-gray-300"
              id="subject"
              type="text"
              required
            />
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-2 block">
            <Label
              className="text-xl font-bold"
              htmlFor="comment"
              value="Your message"
            />
          </div>
          <textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
            className="bg-transparent text-lg py-3 w-full rounded-lg !ring-transparent ring-0 dark:!border-gray-700 !border-gray-300"
          />
        </div>

        <Button color="lime" pill className="px-5 my-2">
          Send <IoIosSend className="ml-1" />
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
