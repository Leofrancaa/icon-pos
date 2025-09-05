import Link from "next/link";
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Stethoscope className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Ícone Pós</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transformando carreiras através da excelência em educação em
              implantodontia. Metodologia prática, professores renomados e
              certificação reconhecida.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  Av. Antônio Carlos Magalhães, 1234 - Salvador, BA
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  (71) 3456-7890
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  contato@Ícone Pós.com.br
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/professores"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Professores
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="/pacientes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pacientes
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Área do Aluno
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Ícone Pós. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
