import Image from "next/image";
import { Button } from "../components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
    const { userId } = await auth();

    if (userId) {
        redirect("/");
    }
    return (
        <div className="grid grid-cols-2 h-full">
            {/* esquerda */}
            <div className="flex h-full max-w-[550px] flex-col justify-center p-8 ">
                <Image src="/logo.svg" alt="financas" width={173} height={39} className="mb-8" />
                <h1 className="text-4xl font-bold mb-3">Bem-Vindo</h1>
                <p className="text-muted-foreground">Financas é o APP que vai resolver sua vida financeira</p>
                <SignInButton>
                    <Button variant="outline">
                        <LogInIcon className="mr-2 h-5 w-5" />
                        Fazer login ou criar conta
                    </Button>
                </SignInButton>
            </div>

            <div className="relative h-full w-full">
                {/* direita */}
                <Image src="/loggin.png" alt="login" fill className="object-cover" />
            </div>


        </div>

    );
}

export default LoginPage;