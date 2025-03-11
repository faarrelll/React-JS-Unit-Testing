import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthLayout from "@/layout/AuthLayout";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import { Card } from "@/components/ui/card";

export default function AuthPage() {
  return (
    <AuthLayout>
      <Card className="p-3">
        <Tabs defaultValue="sign-up" className="w-full md:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-up">
            <SignUp />
          </TabsContent>
          <TabsContent value="sign-in">
            <SignIn />
          </TabsContent>
        </Tabs>
      </Card>
    </AuthLayout>
  );
}
