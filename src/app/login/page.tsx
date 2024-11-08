"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [error, setError] = useState("");
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      if (!email || !password) {
         setError("Por favor, completa todos los campos.");
         return;
      }

      try {
         // Aquí iría la lógica de autenticación real
         // Por ahora, simularemos un inicio de sesión exitoso
         console.log("Iniciando sesión con:", { email, password });

         // Simular una demora de red
         await new Promise((resolve) => setTimeout(resolve, 1000));

         // Redirigir al dashboard después del inicio de sesión exitoso
         router.push("/dashboard");
      } catch (err) {
         setError("Error al iniciar sesión. Por favor, intenta de nuevo.");
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
         <div className="max-w-md w-full space-y-8">
            <div>
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Inicia sesión en tu cuenta
               </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
               <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                     <label htmlFor="email-address" className="sr-only">
                        Correo electrónico
                     </label>
                     <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className="relative">
                     <label htmlFor="password" className="sr-only">
                        Contraseña
                     </label>
                     <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                        onClick={() => setShowPassword(!showPassword)}
                     >
                        {showPassword ? (
                           <EyeOff
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                           />
                        ) : (
                           <Eye
                              className="h-5 w-5 text-gray-500"
                              aria-hidden="true"
                           />
                        )}
                        <span className="sr-only">
                           {showPassword
                              ? "Ocultar contraseña"
                              : "Mostrar contraseña"}
                        </span>
                     </button>
                  </div>
               </div>

               {error && (
                  <div
                     className="text-red-500 text-sm text-center"
                     role="alert"
                  >
                     {error}
                  </div>
               )}

               <div>
                  <button
                     type="submit"
                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                     Iniciar sesión
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
