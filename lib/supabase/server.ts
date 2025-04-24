import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: async (name: string) => {
          return (await cookieStore).get(name)?.value;
        },
        set: async (name: string, value: string, options: CookieOptions) => {
          try {
            (await cookieStore).set({ name, value, ...options });
          } catch (error) {
            console.error(error);
          }
        },
        remove: async (name: string, options: CookieOptions) => {
          try {
            (await cookieStore).set({ name, value: "", ...options });
          } catch (error) {
            console.error(error);
          }
        },
      },
    },
  );
};
