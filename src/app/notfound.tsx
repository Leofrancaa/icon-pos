import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, ArrowLeft, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-light flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="w-full text-center">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <Stethoscope className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold text-destructive mb-2">
              404
            </CardTitle>
            <CardDescription className="text-lg">
              Página não encontrada
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              A página que você está procurando não existe ou foi movida.
            </p>

            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-gradient-to-r from-primary to-primary-light">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Button>
              </Link>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Página Anterior
              </Button>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Se você acredita que isso é um erro, entre em contato conosco.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
