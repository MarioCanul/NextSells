import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function DashboardLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const cookieStore = await cookies();
   const isAuthenticated = cookieStore.has("auth-token");

   if (!isAuthenticated) {
      redirect("/login");
   }

   return (
      <div className="min-h-screen bg-gray-100">
         <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between h-16">
                  <div className="flex">
                     <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold">Dashboard</span>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
         <main className="py-10">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
         </main>
      </div>
   );
}
