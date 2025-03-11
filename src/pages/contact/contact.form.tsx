import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ContactSchema, ContactValues } from "@/lib/validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ContactForm() {
  const { toast } = useToast();
  const { language } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactValues) => {
    setIsLoading((prev: boolean) => !prev);
    setTimeout(() => {
      console.log(values);
      toast({
        title: language.contact.contactForm.success,
        description: language.contact.contactForm.description,
      });
      setIsLoading((prev: boolean) => !prev);
      form.reset();
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col justify-end">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label htmlFor="firstName" className="block">
                      <span className="text-gray-700 text-sm">
                        {language.contact.contactForm.fistName}*
                      </span>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="outline-none border-b border-gray-300 w-full p-2 mt-1"
                        {...field}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label htmlFor="lastName" className="block">
                      <span className="text-gray-700 text-sm">
                        {language.contact.contactForm.lastName}
                      </span>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        className="outline-none border-b border-gray-300 w-full p-2 mt-1"
                        {...field}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="block">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label htmlFor="email" className="block">
                      <span className="text-gray-700 text-sm">
                        {language.contact.contactForm.email}*
                      </span>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="outline-none border-b border-gray-300 w-full p-2 mt-1"
                        {...field}
                      />
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="block">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <label htmlFor="message" className="block">
                      <span className="text-gray-700 text-sm">
                        {language.contact.contactForm.message}*
                      </span>
                      <textarea
                        id="message"
                        placeholder="Write your message here..."
                        rows={4}
                        className="outline-none border-b border-gray-300 w-full p-2 mt-1 resize-none"
                        {...field}
                      ></textarea>
                    </label>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className={`px-4 py-2 ${isLoading && "cursor-not-allowed"}`}
              disabled={isLoading}
            >
              {isLoading && <Loader className="animate-spin" />}
              {isLoading
                ? language.contact.contactForm.process
                : language.contact.contactForm.submit}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
