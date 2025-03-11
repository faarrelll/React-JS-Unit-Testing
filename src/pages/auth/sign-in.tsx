import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SignInSchema, SignInValues } from "@/lib/validator";
import { useSignInMutation } from "@/store/api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { toast } = useToast();
  const form = useForm<SignInValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [signUp, { isLoading }] = useSignInMutation();

  const onSubmit = async (data: SignInValues) => {
    await signUp(data)
      .then((data) => {
        if (data.data.data.token) {
          window.location.href = "/";
        } else {
          toast({
            title: "Error",
            description: "Something went wrong as",
            variant: "destructive",
          });
        }
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
      });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className={`px-4 py-2 ${isLoading && "cursor-not-allowed"}`}
            disabled={isLoading}
          >
            {isLoading && <Loader className="animate-spin" />}
            {isLoading ? "Please wait..." : "Sign In"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
